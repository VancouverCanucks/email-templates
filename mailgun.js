#!/usr/bin/env node

var Mailgun = require('mailgun').Mailgun;
var prompt = require('prompt');
var config = require('./config/config.js');

var sendVars = {};

prompt.start();

prompt.get(['recipient', 'subject', 'content'], function(e, r) {
  var mg = new Mailgun(config.apikey);

  mg.sendRaw(
    config.smtpLogin,
    r.recipient,
    '\nFrom: ' + config.smtpLogin + '\nContent-Type: text/html; charset=utf-8' + '\nSubject: ' + r.subject + '\n' + r.content,
    config.smtpLogin,
    {},
    function(err) {
      if (err) console.log('Oh noes: ' + err);
      else     console.log('Success');
  });
});
