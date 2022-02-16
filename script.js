//our weather api key : e020912d9981563e01ad44d9d285749f
// link to get current weather:  https://openweathermap.org/current
// https://imdb-api.com/ example, put this in a function with its own name
//fetch uses promise syntax to send requests to a server, below is the url of what it is trying to pull
fetch("https://imdb8.p.rapidapi.com/auto-complete?q=dexter")
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
//fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")
//.then(response => {
//	console.log(response);
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
fetch("https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=e020912d9981563e01ad44d9d285749f")
  .then(response => response.json( ))
  .then(json => console.log(response.json( )))
  .catch(err => console.error(err))
}


//section 3 - name here


