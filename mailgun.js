#!/usr/bin/env node

var Mailgun = require('mailgun-js');
var prompt = require('prompt');
var fs = require('fs');
var config = require('./config/config.js');

var gun = new Mailgun({ apiKey: config.apikey, domain: config.domain });

prompt.start();
prompt.get(['recipient', 'subject', 'content'], function(e, r) {
  var gun = new Mailgun({ apiKey: config.apikey, domain: config.domain });
  var template = fs.readFileSync('./templates/' + r.content).toString();

  var envelope = {
    from: config.smtpLogin,
    subject: r.subject,
    to: r.recipient,
    html: template
  };

  gun.messages().send(envelope, function(e, body) {
    console.log(body);
  });
});
