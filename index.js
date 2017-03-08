'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const messages = require('./messages.js');
const questions = require('./questions.js');
const app = express();
var http    = require( 'http' );
var arr = [];
var count = 0;

const token = process.env.FB_VERIFY_TOKEN

app.set('port', (process.env.PORT || 8080))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// index
app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', function (req, res) {
	console.log("Get webhook : "+req.query['hub.verify_token']);
	if (req.query['hub.verify_token'] === token) {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// to post data
app.post('/webhook/', function (req, res) {
	messages.greetingText();
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = req.body.entry[0].messaging[i];
		let sender = event.sender.id;
		if (event.message && event.message.text) {
			start(sender);
			count +=1;
			let text = event.message.text;
			if(text === 'RESET') count = 0;
			arr.push(text);
		}
		if (event.postback) {
			let text = event.postback;
			console.log("Postback : "+ text.payload);
			if(text.payload === 'GET_START'){
				messages.getLocation(sender, "Please share your location");
			} else if(text.payload === 'CLAIM'){
				messages.sendGenericMessage(sender, questions.accidentQuestion);
			} else if(text.payload === 'ACCIDENT'){
				messages.sendGenericMessage(sender, questions.accidentYes);
			} else if(text.payload === 'NO_ACCIDENT'){
				messages.sendGenericMessage(sender, questions.accidentNo);
			} else if(text.payload === 'ME_INJURED_YES'){
				messages.sendTextMessage(sender, questions.meInjuredYes);
			} else if(text.payload === 'ME_INJURED_NO'){
				messages.sendGenericMessage(sender, questions.meInjuredNo);
			} else if(text.payload === 'BREAKDOWN_YES'){
				messages.sendTextMessage(sender, questions.breakdownYes);
			} else if(text.payload === 'BREAKDOWN_NO'){
				messages.sendTextMessage(sender, questions.breakdownNo);
			} else if(text.payload === 'OTHER_PARTY_INJURED_YES'){
				messages.sendTextMessage(sender, questions.otherPartyInjuredYes);
			} else if(text.payload === 'OTHER_PARTY_INJURED_NO'){
				messages.sendGenericMessage(sender, questions.otherPartyInjuredNo);
			} else if(text.payload === 'MYCAR_DAMAGED_YES'){
				messages.sendGenericMessage(sender, questions.myCarDamagedYes);
			} else if(text.payload === 'MYCAR_DAMAGED_NO'){
				messages.sendGenericMessage(sender, questions.myCarDamagedNo);
			} else if(text.payload === 'TOWING_YES'){
				messages.sendGenericMessage(sender, questions.towingYes);
			} else if(text.payload === 'TOWING_NO'){
				messages.sendGenericMessage(sender, questions.towingNo);
			} else if(text.payload === 'GET_DAMAGE_DETAILS'){
				messages.sendGenericMessage(sender, questions.damagedPartsList);
			} else if(text.payload === 'FRONTEND_PARTS'){
				messages.sendGenericMessage(sender, questions.frontEndParts); //TODO
			} else if(text.payload === 'CENTER_PARTS'){
				messages.sendGenericMessage(sender, questions.centerParts); //TODO
			} else if(text.payload === 'REAREND_PARTS'){
				messages.sendGenericMessage(sender, questions.rearEndParts); //TODO
			} 
			//TODO bodyshop
			//TODO schedule rental
			//TODO ClaimDetials
			//TODO other car damaged
			
			
			continue
		}
	}
	res.sendStatus(200)
})

function start(id) {
  if (count == 1) {
    messages.sendGenericMessage(id, questions.claimOrQuote);
  } else if (count == 3) {
    messages.sendGenericMessage(id, questions.claimOrQuote);
  } else if (count == 5) {
    messages.sendTextMessage(id, 'How old are you : ');
  } else if (count == 7 || count == 6) {
    messages.sendTextMessage(id, 'What is your Height (Feet/Inches) : ');
  } else if (count == 9 || count == 8) {
    let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Have you used tobacco products in last 3 years?",
					"image_url": "http://www.chargerbulletin.com/wp-content/uploads/2015/03/tobacco-free.jpg",
					"buttons": [{
						"type": "postback",
						"payload": "TOBACCO",
						"title": "Yes"
					}, {
						"type": "postback",
						"title": "No",
						"payload": "TOBACCO"
					}],
				}]
			}
		}
	}
    messages.sendGenericMessage(id, messageData);
  } else if (count == 10) {
    let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Please select your Health Category",
					"image_url": "http://www.nestle.com.au/asset-library/PublishingImages/NHW/13526-Health_Star_Rating_Logo.jpg",
					"buttons": [{
						"type": "postback",
						"payload": "HEALTH",
						"title": "Excellent"
					}, {
						"type": "postback",
						"payload": "HEALTH",
						"title": "Very Good"
					}, {
						"type": "postback",
						"payload": "HEALTH",
						"title": "Good"
					}/*, {
						"type": "postback",
						"payload": "HEALTH",
						"title": "Average"
					}*/],
				}]
			}
		}
	}
    messages.sendGenericMessage(id, messageData);
  } else if (count == 11) {
    let messageData = {
		"attachment": {
			"type": "template",
			"payload": {
				"template_type": "generic",
				"elements": [{
					"title": "Please select a Coverage Amount",
					"image_url": "https://www.presentationmagazine.com/newimages/free-money-ideas.jpg",
					"buttons": [{
						"type": "postback",
						"payload": "CVGAMT",
						"title": "$50,000"
					}, {
						"type": "postback",
						"payload": "CVGAMT",
						"title": "$100,000"
					}, {
						"type": "postback",
						"payload": "CVGAMT",
						"title": "$200,000"
					}/*, {
						"type": "postback",
						"payload": "CVGAMT",
						"title": "$250,000"
					}*/],
				}]
			}
		}
	}
    messages.sendGenericMessage(id, messageData);
  }
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
