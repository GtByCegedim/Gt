const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Storage = require('local-storage')

const main = (method,user)=> {
    const token = jwt.sign({email:user.email},process.env.SECRET_TOCKEN)
    let subject = ''
    let html = ''
    
    if(method=='AddEmployé'){
        subject = 'recevoire votre email et mot de passe'
        html = `<div style='height: 150px; width: 100%;'>
        <h4> 👋 Bonjour Voila votre données Bienvenu ! </h4>
        <h5>votre email :${user.email}</h5>
        <h5>votre mot de passe :${Storage('stockPassword')}</h5>
        <p>You are receiving this because you (or someone else) have requested the reset of the password for your account. <span style='font-weight: bold;'>MARHABA</span>,Please click on the following link, or paste this into your browser to complete the process:</p>
        <a href="http://localhost:${3000}/path_login_frontend">Login</a> 
        ${Storage.clear()}
      </div>`
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth:{
            user:'wlahlali343@gmail.com',
            pass:process.env.MAILER,
        },
    })

    let info ={
        from: '"GT ✨" <wlahlali343@gmail.com>',
        to: user.email,
        subject: subject,
        html:html,
      };
      transporter.sendMail(info);
      console.log("Message sent");
}

module.exports={main}