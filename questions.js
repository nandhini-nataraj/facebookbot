exports.claimOrQuote = {
		"attachment": {
				"type": "template",
				"payload": {
					"template_type": "generic",
					"elements": [{
						"title": "Hi there, How may i help you?",
						"image_url": "http://globaltoynews.typepad.com/.a/6a0133ec87bd6d970b0168ea4059ce970c-500wi",
						"buttons": [{
							"type": "postback",
							"title": "Claim",
							"payload": "CLAIM"
						}, {
							"type": "postback",
							"title": "Quote",
							"payload": "QUOTE"
						}],
					}]
				}
			}
		}

exports.accidentQuestion = {
		"attachment": {
				"type": "template",
				"payload": {
					"template_type": "generic",
					"elements": [{
						"title": "Did you met with an Accident?",
						"image_url": "http://globaltoynews.typepad.com/.a/6a0133ec87bd6d970b0168ea4059ce970c-500wi",
						"buttons": [{
							"type": "postback",
							"title": "Yes",
							"payload": "ACCIDENT"
						}, {
							"type": "postback",
							"title": "No",
							"payload": "NO_ACCIDENT"
						}],
					}]
				}
			}
		}

exports.accidentYes = {
	"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Are you injured?",
        "buttons":[
          {
            "type":"postback",
            "title":"Yes",
			"payload":"ME_INJURED_YES"
          },
          {
            "type":"postback",
            "title":"No",
            "payload":"ME_INJURED_NO"
          }
        ]
      }
    }
}

exports.accidentNo = {
	"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Is your car breakdown?",
        "buttons":[
          {
            "type":"postback",
            "title":"Yes",
			"payload":"BREAKDOWN_YES"
          },
          {
            "type":"postback",
            "title":"No",
            "payload":"BREAKDOWN_NO"
          }
        ]
      }
    }
}

exports.meInjuredYes = "Call 911"

exports.meInjuredNo = {
	"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Is other party Injured?",
        "buttons":[
          {
            "type":"postback",
            "title":"Yes",
			"payload":"OTHER_PARTY_INJURED_YES"
          },
          {
            "type":"postback",
            "title":"No",
            "payload":"OTHER_PARTY_INJURED_NO"
          }
        ]
      }
    }
}

exports.breakdownYes = "We just processed On-road assistance service for you. XXX will be reaching you in X minutes. Contact : xxxxxxxx"

exports.breakdownNo = agentContact;

exports.agentContact = "Our Agent will be contacting you in few minutes. Agent contact no. XXX XXX XXXX for your reference."

exports.otherPartyInjuredYes = meInjuredYes;

exports.otherPartyInjuredNo = {
	"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Is your car damaged?",
        "buttons":[
          {
            "type":"postback",
            "title":"Yes",
			"payload":"MYCAR_DAMAGED_YES"
          },
          {
            "type":"postback",
            "title":"No",
            "payload":"MYCAR_DAMAGED_NO"
          }
        ]
      }
    }
}

exports.myCarDamagedYes = {
	"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Do you need towing service?",
        "buttons":[
          {
            "type":"postback",
            "title":"Yes",
      			"payload":"TOWING_YES"
          },
          {
            "type":"postback",
            "title":"No",
            "payload":"TOWING_NO"
          }
        ]
      }
    }
}

exports.myCarDamagedNo = {
	"attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Is other person car damaged?",
        "buttons":[
          {
            "type":"postback",
            "title":"Yes",
			"payload":"OTHER_PARTY_CARDAMAGE_YES"
          },
          {
            "type":"postback",
            "title":"No",
            "payload":"OTHER_PARTY_CARDAMAGE_NO"
          }
        ]
      }
    }
}

exports.towingYes = {
  "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"We are processed your towing service request. Towing vehicle will be available in few minutes. Contact (for reference) : XXX XXX XXXX. Also we need car damage details. Press OK when you are ready.",
        "buttons":[
          {
            "type":"postback",
            "title":"OK",
      			"payload":"GET_DAMAGE_DETAILS"
          }
        ]
      }
    }
}
exports.towingNo = {
  "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"We require your car damage details. Press OK when you are ready.",
        "buttons":[
          {
            "type":"postback",
            "title":"OK",
      			"payload":"GET_DAMAGE_DETAILS"
          }
        ]
      }
    }
}
exports.towingYes = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
                {
                    "title": "Front-end parts",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/white-t-shirt.png",
                    "subtitle": "Front Bumper, Front Wheels, Head Lights, Grille, Hood",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/view?item=100",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FRONTEND_PARTS"
                        }
                    ]                
                },
                {
                    "title": "Center parts",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/white-t-shirt.png",
                    "subtitle": "Fender, Front Doors, Rear Doors, Roof",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/view?item=100",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"CENTER_PARTS"
                        }
                    ]                
                },
                {
                    "title": "Rear-end parts",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/white-t-shirt.png",
                    "subtitle": "Rear Bumper, Rear Wheels, Tail lights, Trunk Lid, Exhaust",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/view?item=100",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"REAREND_PARTS"
                        }
                    ]                
                }
            ] 
        }
    }
}




