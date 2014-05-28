# Canucks Email Templates
Easily create email templates here and send them out via the Mailgun.com API.

## Configuration
Create a `config.js` following the model of `config.js.sample` populated with your API info.

## Building Templates
Templates should be saved in the `/templates/` directory.

## Sending Tests
Run the shell file `email.sh` with the command `send`.

## Image Hosting
Save assets to the `/assets/` folder. Then, run the shell file `email.sh` with the command `serve`. Your images will now be hosted on `localhost:9000`.
