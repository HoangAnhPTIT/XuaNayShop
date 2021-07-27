const sgMail = require('@sendgrid/mail')

function sendEmail(req, res) {
  sgMail.setApiKey('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')
  const msg = {
    to: req.body.email, // Change to your recipient
    from: 'caohoanganh2000@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json(msg)
    })
    .catch((error) => {
      res.status(422).json(error)
    })
}

module.exports = {
  sendEmail
}