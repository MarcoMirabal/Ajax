function solicitudAJAX(params) {
    var url = 'https://clima-argentina.p.rapidapi.com/clima/lavoz';
    let tarjetas = document.querySelector("#nPokemon");
    var objXMLHttpRequest = new XMLHttpRequest();
    objXMLHttpRequest.withCredentials = true;
  
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = objXMLHttpRequest.responseText;
          console.log(json);
        } else {
          alert("Error Code: " + objXMLHttpRequest.status);
          alert("Error Message: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.setRequestHeader('X-RapidAPI-Key', '4436e99902mshb3b2fc151434df6p145369jsnfa2b453cf0e4');
    objXMLHttpRequest.setRequestHeader('X-RapidAPI-Host', 'clima-argentina.p.rapidapi.com');
    objXMLHttpRequest.send(null);
  }