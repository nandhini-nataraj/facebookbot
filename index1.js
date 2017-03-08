//npm packages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const FB= require('fb')
const app = express()

const token = process.env.FB_VERIFY_TOKEN
const access = process.env.FB_ACCESS_TOKEN
const user_access_token=process.env.FB_USER_ACCESS_TOKEN
var user_location = ''


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const APP_ID = '1838086799794301'
const APP_SECRET_CODE = 'a75994ad23cc7e040620f571d8c46092'



app.get('/', function(req,res){
	res.send('Hello Facebook chatbot!')
  });	

app.get('/webhook',function(req, res){
	if(req.query['hub.verify_token'] == token){
		res.send(req.query['hub.challenge'])
	}
	res.send('No entry')
})

app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message) {
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});
  
function receivedMessage(event) {
  // Putting a stub for now, we'll expand it in the following steps
  console.log("Message data: ", event.message);
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;

  console.log("Received message for user %d and page %d at %d with message:", 
    senderID, recipientID, timeOfMessage);
  console.log(JSON.stringify(message));

  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  if (messageText) {

    // If we receive a text message, check to see if it matches a keyword
    // and send back the example. Otherwise, just echo the text we received.
    switch (messageText) {
      case 'generic':
        sendGenericMessage(senderID);
        break;
      case 'location':
        sendLocation(senderID);
        break;
      default:
        sendTextMessage(senderID, messageText);
    }
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
}


function sendGenericMessage(recipientId, messageText) {
  // To be expanded in later sections
}

function sendLocation(recipientId){
	FB.setAccessToken(user_access_token);
	FB.api('/me',  'GET',  {"fields":"id,name,location,devices"},  function(res) {
	  if(!res || res.error) {
	    console.log(!res ? 'error occurred' : res.error);
	    return;
	  }
	  user_location = res.location
	  console.log(res.id);
	  console.log(res.name);
	  console.log(user_location);

	  FB.api('/'+user_location.id,  'GET',  {"fields":"location"},  function(res) {
	  if(!res || res.error) {
	    console.log(!res ? 'error occurred' : res.error);
	    return;
	  }
	  console.log(res.location.city);

     var location = 'City : '+res.location.city+' latitute : '+res.location.latitude+' longitude : '+res.location.longitude;
     var googlemap = 'http://maps.google.com/?q='+res.location.latitude+','+res.location.longitude;

        var messageData = {
        recipient: {
          id: recipientId
        },
        message: {
          text:'Please share your location:',
          quick_replies:[
            {
              content_type:'location',
            }
          ]
        }
      };

      callSendAPI(messageData);
	  });
	})
}



function sendTextMessage(recipientId, messageText) {	
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: access },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s", 
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });  
}

app.listen(process.env.PORT || 3000, function(){
	console.log('Running on port', this.address().port, app.settings.env)
	})