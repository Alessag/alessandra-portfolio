/* eslint-disable consistent-return */
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true,
});

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  server: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  response.set('Access-Control-Allow-Headers', '*');

  if (request.method === 'OPTIONS') {
    response.end();
  } else {
    cors(request, response, () => {
      if (request.method !== 'POST') {
        return;
      }

      const mailOptions = {
        from: request.body.email,
        replyTo: request.body.email,
        to: gmailEmail,
        subject: `${request.body.name} just messaged me from my website`,
        text: request.body.message,
        html: `<p>${request.body.message}</p>`,
      };

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail);
        response.status(200).send({
          isEmailSend: true,
        });
        
      });
    });
  }
});
