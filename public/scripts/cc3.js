  console.log('js');

  $(document).ready(function() {
      console.log('JQ');
      $('#addJokeButton').on('click', function() {
          console.log('addJokeButton on click');

          var objectToSend = {
              name: $('#whoseJokeIn').val(),
              question: $('#questionIn').val(),
              punchLine: $('#punchlineIn').val()
          }; //end objectToSend
          console.log('object to send', objectToSend);

          $.ajax({
              type: 'POST',
              url: '/',
              data: objectToSend,
              sucess: function(response) {
                  console.log('back from post call: ', response);

              },
              error: function() {
                  console.log('error with ajax call...');
              }
          }); //end postData ajax call
          clearData();
          getData();
      }); // end addJokeButton on click

      var getData = function() {
          console.log("in get");
          $.ajax({
              type: "GET",
              url: "/newJokes",
              success: function(response) {
                  console.log('back from post call:', response);
                  var responseData = response[response.length - 1];
                  //display answer to DOM
                  $('#outputDiv').append('<p>' + responseData.name + ' ' + responseData.question + ' ' + responseData.punchLine + '</p>');
              }

          }); //end getData ajax call
      }; //end getData function

      function clearData() {
          $('#whoseJokeIn').val('');
          $('#questionIn').val('');
          $('#punchlineIn').val('');
      } //end clearData function

  }); // end doc ready
