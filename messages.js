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

exports.greetingText = function(text) {
	request({
		url: 'https://graph.facebook.com/v2.6/me/thread_settings',
		qs: {
			access_token:token,
			setting_type: 'call_to_actions',
        	thread_state: 'new_thread',
            call_to_actions: [{
                payload: 'GET_START'
            }]
		},
		method: 'POST',
		json: {
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