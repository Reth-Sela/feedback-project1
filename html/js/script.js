
function tobackend() {
 
  // Get the text value from the textarea
  var text = document.getElementById('textareas').value;
 
  // Create an XMLHttpRequest
  var httpRequest = new XMLHttpRequest();

  // Configure it to make a POST request to your Spring application
  httpRequest.open("POST", 'http://localhost:8081/api/sent', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  // Set up the callback for when the request completes
  httpRequest.onload = function () {
      if (httpRequest.status === 200) {
          // Request was successful, handle the response
          alert(httpRequest.responseText);
      } else {
          // Request failed
          alert('Request failed with status: ' + httpRequest.status);
      }
  };

  // Convert the text value to JSON and send it in the request body
  var requestBody = JSON.stringify({ text: text });
  httpRequest.send(requestBody);
 
  console.log("inside the .js file ");

  
}

