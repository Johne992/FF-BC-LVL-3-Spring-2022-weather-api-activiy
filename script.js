//our weather api key : e020912d9981563e01ad44d9d285749f
// link to get current weather:  https://openweathermap.org/current
//Global Variables here

//section 1 - Jaya
let x = document.getElementById('jsect').addEventListener('onclick', blue);

let blue = fetch("https://api.openweathermap.org/data/2.5/weather?lat=21.3131&lon=158.0090&appid=e020912d9981563e01ad44d9d285749f" , {})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});


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

//section 3 - name here


