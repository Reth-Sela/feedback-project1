
      function toback(){
        let httpRequest=new XMLHttpRequest();
        httpRequest.open("GET",'http://localhost:8081/api/hello');
        httpRequest.send();
        httpRequest.onload=function(){
            alert(httpRequest.responseText);
        }
        console.log("inside the .js file ")
      }