//import { swimCommandFetcher } from './httpHandler.js';
var serverUrl = 'http://127.0.0.1:3000/';

swimCommandFetcher = () => {
  // This needs to be refactored to a separate file and imported later
  $.ajax({
    type: 'GET',
    url: serverUrl,
    success: (response) => {
      console.log('The server is sending back: ' + response);
      SwimTeam.move(response);
    },
    error: () => console.log('Failed to get data')
  });
};

const ajaxFileUpload = (file) => {
  var formData = new FormData();
  formData.append('file', file);
  $.ajax({
    type: 'POST',
    data: formData,
    url: serverUrl + 'image',
    cache: false,
    contentType: false,
    processData: false,
    success: () => {
      // reload the page
      window.location = window.location.href;
    }
  });
};

getBackgroundImage = () => {
  // This needs to be refactored to a separate file and imported later
  $.ajax({
    type: 'GET',
    url: serverUrl + 'image',
    success: (response) => {
      // Update background image
      console.log(response);
    },
    error: () => console.log('Failed to get data')
  });
};

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    swimCommandFetcher();
   // SwimTeam.move(direction.toLowerCase());
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

  ajaxFileUpload(file);
});

console.log('Client is running in the browser!');
