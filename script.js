//our weather api key : e020912d9981563e01ad44d9d285749f
// link to get current weather:  https://openweathermap.org/current
// https://imdb-api.com/ example, put this in a function with its own name
//fetch uses promise syntax to send requests to a server, below is the url of what it is trying to pull

//section 2 - Justin
function theWeather(){
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=21&lon=158&appid=e020912d9981563e01ad44d9d285749f")
    .then(checkStatus)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(nope))
}

function checkStatus(response){
  if(response.ok){
    return Promise.resolve(response);
  }else{
    return Promise.reject(new Error(response.statusText));
  }
}



