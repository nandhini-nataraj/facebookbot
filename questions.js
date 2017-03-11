exports.claimOrQuote = {
		"attachment": {
				"type": "template",
				"payload": {
					"template_type": "generic",
					"elements": [{
						"title": "Hi there, How may i help you?",
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

exports.breakdownNo = exports.agentContact;

exports.agentContact = "Our Agent will be contacting you in few minutes. Agent contact no. XXX XXX XXXX for your reference."

exports.otherPartyInjuredYes = exports.meInjuredYes;

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

exports.uploadDamageImages = "Please attach damaged car images using Messenger attachment option";

/*
exports.damagedPartsList = {
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

exports.damagedPartsList = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
                {
                    "title": "Front-end parts",
                    "image_url": "http://st.motortrend.com/uploads/sites/10/2015/09/2012-jaguar-XF-front-end-2.jpg",
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
                    "image_url": "http://carnbikeexpert.com/wp-content/uploads/2016/01/Tata-Zica-Side-view.jpg",
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
                    "image_url": "http://files.prokerala.com/automobile/images/photo/full/jaguar-xj-715/jaguar-xj-exterior-rear-view.jpg",
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

exports.damagedPartsList = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
                {
                    "title": "Front-end parts",
                    "image_url": "http://st.motortrend.com/uploads/sites/10/2015/09/2012-jaguar-XF-front-end-2.jpg",
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
                    "image_url": "http://carnbikeexpert.com/wp-content/uploads/2016/01/Tata-Zica-Side-view.jpg",
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
                    "image_url": "http://files.prokerala.com/automobile/images/photo/full/jaguar-xj-715/jaguar-xj-exterior-rear-view.jpg",
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

exports.frontendPartsList = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
                {
                    "title": "Front Bumper",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FRONTBUMPER"
                        }
                    ]                
                },
                {
                    "title": "Front Wheels",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FRONTWHEELS"
                        }
                    ]                
                },
                {
                    "title": "Head Lights",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"HEADLIGHTS"
                        }
                    ]                
                },
                {
                    "title": "Grille",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"GRILLE"
                        }
                    ]                
                },
                {
                    "title": "Hood",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"HOOD"
                        }
                    ]                
                }
            ] 
        }
    }
}

exports.centerPartsList = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
                {
                    "title": "Fender",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FENDER"
                        }
                    ]                
                },
                {
                    "title": "Front Doors",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FRONTDOORS"
                        }
                    ]                
                },
                {
                    "title": "Rear Doors",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"REARDOORS"
                        }
                    ]                
                },
                {
                    "title": "Roof",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"ROOF"
                        }
                    ]                
                }
            ] 
        }
    }
}

exports.rearEndPartsList = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "list",
            "top_element_style": "compact",
            "elements": [
                {
                    "title": "Fender",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FENDER"
                        }
                    ]                
                },
                {
                    "title": "Front Doors",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"FRONTDOORS"
                        }
                    ]                
                },
                {
                    "title": "Rear Doors",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"REARDOORS"
                        }
                    ]                
                },
                {
                    "title": "Roof",
                    "image_url": "",
                    "subtitle": "Multiple selection allowed",
                    "buttons": [
                        {
                          "type":"postback",
                          "title":"Select",
                          "payload":"ROOF"
                        }
                    ]                
                }
            ] 
        }
    }
}
*/

