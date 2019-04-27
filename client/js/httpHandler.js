


  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  // export var swimCommandFetcher = (file) => {
  //   $.ajax({
  //     type: 'GET',
  //     url: serverUrl,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     data: {
  //       arrow: 'eric'
  //     },
  //     success: () => {
  //       console.log('success');
  //       window.location = window.location.href;
  //     }
  //   });
  // };
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  // export const ajaxFileUpload = (file) => {
  //   var formData = new FormData();
  //   formData.append('file', file);
  //   $.ajax({
  //     type: 'POST',
  //     data: formData,
  //     url: serverUrl,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     success: () => {
  //       // reload the page
  //       window.location = window.location.href;
  //     }
  //   });
  // };

  export default $('form').on('submit', function(e) {
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
