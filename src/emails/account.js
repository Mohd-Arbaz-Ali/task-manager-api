const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to : email,
        from : 'mohdarbaz068@gmail.com',
        subject : 'Welcome to our application!',
        text : `Welcome to the app ${name}. Let me know how you get along with the app.` 
    })    
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to : email,
        from : 'mohdarbaz068@gmail.com',
        subject : 'Goodbye!',
        text : `We are sorry to see you going ${name}. Please give us your valueble feedback.` 
    })  
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
