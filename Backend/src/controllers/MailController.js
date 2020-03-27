"use strict";
const 
  path = require('path'),
  nodemailer = require("nodemailer"),
  hbs = require('nodemailer-express-handlebars');

module.exports = {
  async Send({ id, email, name }) {    
    const { host, port, user, pass } = process.env;

    const transporter = nodemailer.createTransport({
      host, port,
      auth: { user, pass },
    });

    transporter.use('compile', hbs({
      viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('../backend/src/emailTemplates/'),
        layoutsDir: path.resolve('../backend/src/emailTemplates/'),
        defaultLayout: 'simple.html',
      },
      viewPath: path.resolve('../backend/src/emailTemplates/'),
      extName: '.html'
    }))


    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Be The Hero 🦸🏽‍♂️" <solracdirgni123@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "ID de acesso", // Subject line
      text: `Olá ${name}, Tudo bem?`, // plain text body
      template: 'simple',
      context: { id },
    });

    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}