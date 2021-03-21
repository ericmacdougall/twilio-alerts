const twilioClient = require('twilio')("API", "CREDENTIALS")

module.exports.sms = (PhoneNumber, Message) => {
  return twilioClient.messages.create({
    body: Message,
    from: "+TWILIO-NUMBER",
    to: PhoneNumber
  })
};
