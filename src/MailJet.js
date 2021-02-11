const dotenv = require('dotenv');
dotenv.config();
const mailjet = require ('node-mailjet')
.connect(process.env.MAILJET_API_ID, process.env.MAILJET_API_SECRET)
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "joan.smith@efrei.net",
        "Name": "Some one"
      },
      "To": [
        {
          "Email": "joan.smith@efrei.net",
          "Name": "Some one"
        }
      ],
      "Subject": "Bonjour Bg.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
