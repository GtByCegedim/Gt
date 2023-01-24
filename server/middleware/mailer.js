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
        <h3> 👋 Bonjour ${user.firstName} ${user.lastName}! </h3>
        <h5>votre email :${user.email}</h5>
        <h5>votre mot de passe :${Storage('stockPassword')}</h5>
        <p>Ce lien va vous deriger vers la page pour creer votre propre mot de passe:</p>
        <a href="http://localhost:${3000}/path_login_frontend">GO</a> 
        ${Storage.clear()}
      </div>`
    }

    if(method=='UpdateUser'){
        subject = "Votre données ont etés modifier par l'admin"
        html = `<div style='height: 150px; width: 100%;'>
        <h3> 👋 Bonjour  </h3>
        <h4>nouveau  nom : ${user.lastName}!<h4>
        <h4>nouveau prenom : ${user.firstName}!<h4>
        <h5>votre email  : ${user.email}</h5>
        <p>Il semble que votre données ont etés non valide </p>
                </div>`
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth:{
            user:process.env.USER_MAILER,
            pass:process.env.MAILER,
        },
    })

    let info ={
        from: `GT ✨" ${process.env.USER_MAILER}`,
        to: user.email,
        subject: subject,
        html:html,
      };
      transporter.sendMail(info);
      console.log("Message sent");
}

module.exports={main}