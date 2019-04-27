const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  console.log('Messages length: ' + messages.length);
  messages.push(message);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  var message = messages.shift();
  console.log(`Dequeing message: ${message}`);
  console.log('\nMessages count: ' + messages.length);
  return message;
};