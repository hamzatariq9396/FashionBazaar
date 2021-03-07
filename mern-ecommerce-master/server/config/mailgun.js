const keys = require('./keys');
const { key, domain, sender } = keys.mailgun;

const mailgun = require('mailgun-js')({
  apiKey: key,
  domain: domain
});

exports.sendEmail = (recipient, message) => {
  return new Promise((resolve, reject) => {
    const data = {
      from: `Fashion-Bazar  Store! <${sender}>`,
      to: recipient,
      subject: message.subject,
      text: message.text
    };

    mailgun.messages().send(data, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};
