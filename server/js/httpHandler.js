const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./keypressHandler');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
module.exports.router = (req, res, next = ()=>{}) => {
  //console.log('Serving request type ' + req.method + ' for url ' + req.url);
  var keypress;

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
  }

  if (req.method === 'GET') {
    switch (req.url) {
      case '/': {
        console.log('GET received');
        console.log(messageQueue.messages);
        var removed = messageQueue.dequeue();
        console.log(typeof removed, removed);
        res.writeHead(200, headers);
        res.end(removed);
      }
      case '/image': {
        res.writeHead(200, headers);
        res.end('image will be updated');
      }
    }
  }

  if (req.method === 'POST') {
    req.on('data', (chunk) => {
     console.log(chunk.toString());    
    });

   //res.write(keypress);
   //res.write("This is the return value: " + keypress);
  //  res.writeHead(200, headers);
  //  res.write("This is the return value: " + keypress);
  } 

  
  //res.write('hi');
  
  
  res.end();

};
