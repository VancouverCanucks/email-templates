#!/bin/sh

if [ $1 ]
then
  if [ $1 = 'send' ]
  then
    ./mailgun.js
  elif [ $1 = 'serve' ]
  then
    harp server
  else
    echo 'Invalid argument'
  fi
else
  echo 'You have not entered any arguments'
fi
