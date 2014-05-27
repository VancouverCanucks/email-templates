#!/usr/bin/env node

var Mailgun = require('mailgun').Mailgun;
var prompt = require('prompt');
var config = require('./config/config.js');

var sendVars = {};

prompt.start();

prompt.get(['recipient', 'subject', 'content'], function(e, r) {
  var mg = new Mailgun(config.apikey);

  mg.sendText(
    config.smtpLogin,
    r.recipient,
    r.subject,
    r.content,
    config.smtpLogin,
    {},
    function(err) {
      if (err) console.log('Oh noes: ' + err);
      else     console.log('Success');
  });
});
