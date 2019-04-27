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
  if (req.method === 'POST') {
    req.on('data', (chunk) => {
     console.log(chunk.toString());
     keypress = chunk.toString().slice();
     messageQueue.enqueue(keypress);
    });

   //res.write(keypress);
   //res.write("This is the return value: " + keypress);
   res.writeHead(200, headers);
   res.write("This is the return value: " + keypress);
   res.end();
  } 

  
  //res.write('hi');
  
  
  

};
