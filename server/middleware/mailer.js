const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Storage = require("local-storage");

const main = (method, user) => {
  const token = jwt.sign({
    email: user.email
  }, process.env.SECRET_TOCKEN, {
    expiresIn: 600
  })
  let subject = ''
  let html = ''

  if (method == 'AddEmployé') {
    subject = 'recevoire votre email et mot de passe'
    html = `<div style='height: 150px; width: 100%;'>
        <h3> 👋 Bonjour ${user.firstName} ${user.lastName}! </h3>
        <h5>votre email :${user.email}</h5>
        <h5>votre mot de passe :${Storage("stockPassword")}</h5>
        <p>Ce lien va vous deriger vers la page pour creer votre propre mot de passe:</p>
        <a href="http://localhost:${3000}/resetpassword/${user.id}">GO</a>  
        ${Storage.clear()}
      </div>`;
  }

  if (method == 'UpdateUser') {
    subject = "Votre données ont etés modifier par l'admin"
    html = `<div style='height: 150px; width: 100%;'>
        <h3> 👋 Bonjour  </h3>
        <h4>nouveau  nom : ${user.lastName}!<h4>
        <h4>nouveau prenom : ${user.firstName}!<h4>
        <h5>votre email  : ${user.email}</h5>
        <p>Il semble que votre données ont etés non valide </p>
                </div>`
  }


  if (method == 'addTask') {
    subject = "Nouvelle tache assigné"
    html = `<div style='height: 150px; width: 100%;'>
        <h3 color: blue ; > 👋 Bonjour  ${user.lastName}  ${user.firstName}</h3>
        <h4>vous avez reçu une nouvelle tache le ${Storage('createdAt')} !<h4>
        <h4>Voila votre tache : ${Storage('creatTask')} !<h4>
        ${Storage.clear()}
                </div>`
  }

  if (method == 'forgetPassword') {
    subject = "Vous avez oublié votre mot de passe ?"
    html = `<div style='height: 150px; width: 100%;'>
        <h3> 👋 Bonjour ${user.firstName +' '+ user.lastName} </h3>
        <p>Ce lien va vous deriger vers la page de réinitilisation de mot de passe:</p>
        <a href="http://localhost:${3000}/resetpassword/${token}">GO</a> 
                </div>`
  }

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.USER_MAILER,
      pass: process.env.MAILER,
    },
  })

  let info = {
    from: `"GT ✨" ${process.env.USER_MAILER}`,
    to: user.email,
    subject: subject,
    html: html,
  };
  transporter.sendMail(info);
  console.log("Message sent");
};

const sendTeamInvitation = (user, teamLeader, teamName) => {
  let subject = `Invitation to join team ${teamName} from ${teamLeader}`;
  let html = `<div style="background-color: #f2f2f2; padding: 20px; font-family: Arial, sans-serif; height: 150px; width: 100%;">
                <h3 style="color: #005c9e;">👋 Bonjour ${user.firstName} ${user.lastName}!</h3>
                <p style="font-size: 16px; color: #333; margin-top: 10px;">Vous êtes ajouté(e) comme membre du groupe ${teamName} par ${teamLeader}.</p>
                <p style="font-size: 16px; color: #333;">Bonne chance pour tes prochainnes tâches.</p>
              </div>`;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.USER_MAILER,
      pass: process.env.MAILER,
    },
  });

  let info = {
    from: `"GT ✨" ${process.env.USER_MAILER}`,
    to: user.email,
    subject: subject,
    html: html,
  };

  transporter.sendMail(info, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Invitation sent to ${user.email}`);
    }
  });
};

module.exports = {
  main,
  sendTeamInvitation
};