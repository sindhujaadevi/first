$(document).ready(function() {
  $('.ui.form')
    .form({
      fields: {
        regex: {
        identifier  :'regex',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter the name'
          },
          {
            type   : 'regExp[/^[a-zA-Z\s]+$/]',
            prompt : 'Please enter a valid letter username'
          },
        ]
      },
        password: {
          identifier: 'password',
          rules: [{
            type: 'empty',
            prompt: 'Please enter your password'
          }, {
            type: 'length[6]',
            prompt: 'Your password must be at least 6 characters'
          }]
        }
      }
    });
});
