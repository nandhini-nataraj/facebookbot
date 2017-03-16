const request = require('request');
const token = process.env.FB_ACCESS_TOKEN

exports.sendGenericMessage = function (sender, messageData) {
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

exports.whitelistURL = function (){
	request({
		url: 'https://graph.facebook.com/v2.6/me/thread_settings',
		qs: {access_token:token},
		method: 'POST',
		json: {
			setting_type: "domain_whitelisting",
			whitelisted_domains: ["https://peterssendreceiveapp.ngrok.io"],
			domain_action_type: "add"
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

exports.sendTextMessage = function (sender, text) {
	let messageData = { text:text }
	
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}

exports.getStarted = function() {
	request({
		url: 'https://graph.facebook.com/v2.6/me/thread_settings',
		qs: {
			access_token:token,
			setting_type: 'call_to_actions',
        	thread_state: 'new_thread',
			greeting:{text:"Hi {{user_first_name}}, welcome to this bot."},
            call_to_actions: [{
                payload: 'CLAIM'
            }]
		},
		method: 'POST',
		json: true
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	});
}

exports.greetingText = function() {
	request({
		url: 'https://graph.facebook.com/v2.6/me/thread_settings',
		qs: {
			access_token:token, 
			setting_type: 'greeting',
        	greeting:{text:"Hi {{user_first_name}}, welcome to this bot."}
		},
		method: 'POST',
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	});
}
exports.getLocation = function (sender, text) {
	
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: {access_token:token},
		method: 'POST',
		json: {
			recipient: {id:sender},
			message: {
          		text:text,
				quick_replies:[{content_type:'location'}]
			},
		}
	}, function(error, response, body) {
		if (error) {
			console.log('Error sending messages: ', error)
		} else if (response.body.error) {
			console.log('Error: ', response.body.error)
		}
	})
}