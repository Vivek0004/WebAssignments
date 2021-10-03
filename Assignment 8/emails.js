const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API

sgMail.setApiKey(sendgridAPIKey)

const welcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'vivek.gugnani04@gmail.com',
        subject: 'Welcome to Work',
        text: `Hi ${name}, Welcome to Work.`
    }).then(() => {
        console.log('sent')
    }).catch((e) => {
        console.log(e)
    })
}



module.exports = {
    welcomeEmail
}

