function renderTemp(data) {
    var el = document.getElementById('temperature');
    el.innerHTML = data.temperature + " °C";
  }
  

  var endpoint = 'https://k9ujwayzle.execute-api.us-east-1.amazonaws.com/dev/weather';
  
  fetch(endpoint, {mode: 'cors'})
    .then(function(resp){
      return resp.json();
    })
    .then(renderTemp);