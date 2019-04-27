//import { swimCommandFetcher } from './httpHandler.js';
swimCommandFetcher = (direction) => {
  // This needs to be refactored to a separate file and imported later
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:3000',
    data: direction,
    success: (response) => {
      console.log('The server is sending back: ' + response);
    }
  });
};

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    swimCommandFetcher(direction);
    SwimTeam.move(direction.toLowerCase());
  }
});

$('form').on('submit', function(e) {
  e.preventDefault();

  var form = $('form .file')[0];
  if (form.files.length === 0) {
    console.log('No file selected!');
    return;
  }

  var file = form.files[0];
  if (file.type !== 'image/jpeg') {
    console.log('Not a jpg file!');
    return;
  }

  ajaxFileUplaod(file);
});

console.log('Client is running in the browser!');
