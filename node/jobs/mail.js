"use strict";

//https://github.com/andris9/Nodemailer

var mail = require("nodemailer").mail;

// setup e-mail data with unicode symbols
var mail_options = {
    from: "from_ <from_@mabotech.com>", // sender address
    to: "to1@mabotech.com, to2@mabotech.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
};

mail(mail_options);


