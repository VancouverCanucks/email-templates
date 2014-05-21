var Mailgun = require('mailgun').Mailgun;

var mg = new Mailgun('some-api-key');
mg.sendText('example@example.com', ['Recipient 1 <rec1@example.com>', 'rec2@example.com'],
  'This is the subject',
  'This is the text',
  'noreply@example.com', {},
  function(err) {
    if (err) console.log('Oh noes: ' + err);
    else     console.log('Success');
});
