//our weather api key : 
// link to get current weather:  https://openweathermap.org/current
//Global Variables here

//Check Status Easily function
function checkStatus(response){
  if(response.ok){
    return Promise.resolve(response);
  }else{
    return Promise.reject(new Error(response.statusText));
  }
}

//section 1 - Jaya
let x = document.getElementById('jsect').addEventListener('onclick', blue);

let blue = fetch("https://api.openweathermap.org/data/2.5/weather?lat=21.3131&lon=158.0090&appid=__" , {})
.then(response => {
	console.log(response);
}
.catch(err => {
	console.error(err);
});


//section 2 - Justin
function theWeather(){
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=21&lon=158&appid=___")
    .then(checkStatus)
    //.then(function(response){return response.json();})
    .then(response => response.json())
    //.then(function(data){console.log(data)};)
    .then(data => console.log(data))
    .catch(error => console.log(nope))
}


//section 3 - name here


