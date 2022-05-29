require('dotenv').config();
const mailjet = require ('node-mailjet')
.connect(process.env.MAIL_TOKEN, process.env.MAIL_KEY);

const request = async (email, message) => await mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": email,
        "Name": "Visitor"
      },
      "To": [
        {
          "Email": "dias.gustavo.dias@gmail.com",
          "Name": "Gustavo",
        },
      ],
      "Subject": "Greetings from visitor",
      "TextPart": message,
      "HTMLPart": "",
      "CustomID": `${email}-${Date.now().toLocaleString()}`,
    },
  ],
});

export default request;
