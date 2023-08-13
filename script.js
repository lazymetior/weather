const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "031a129761msh67525efa7ecbcfcp1d0ff0jsn907df28d63ae",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getWeather = (city) => {
	cityName.innerHTML = city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
	console.log(response);

	//cloud_pct.innerHTML = response.cloud_pct;
	feels_like.innerHTML = response.feels_like;
	humidity.innerHTML = response.humidity;
	humidity1.innerHTML = response.humidity;
	max_temp.innerHTML = response.max_temp;
	min_temp.innerHTML = response.min_temp;
	sunrise.innerHTML = response.sunrise;
	sunset.innerHTML = response.sunset;
	temp.innerHTML = response.temp;
	temp1.innerHTML = response.temp;
	wind_degrees.innerHTML = response.wind_degrees;
	wind_speed.innerHTML = response.wind_speed;
	wind_speed2.innerHTML = response.wind_speed;
	
  })
  .catch((err) => console.error(err));
}



submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");


for (let city of ["Shanghai", "Boston", "Lucknow", "Kolkata"]) {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
	  .then((response) => response.json())
	  .then((response) => {
		console.log(response);
  
		// Convert sunrise timestamp to time format "hh:mm:ss"
		const sunriseDate = new Date(response.sunrise * 1000); // Convert to milliseconds
		const sunriseTime = sunriseDate.toLocaleTimeString("en-US", { timeStyle: "medium" });
  
		// Convert sunset timestamp to time format "hh:mm:ss"
		const sunsetDate = new Date(response.sunset * 1000); // Convert to milliseconds
		const sunsetTime = sunsetDate.toLocaleTimeString("en-US", { timeStyle: "medium" });
  
		// Update elements with weather data for each city
		document.getElementById(city.toLowerCase() + "_temp").innerHTML = response.temp;
		document.getElementById(city.toLowerCase() + "_cloud_pct").innerHTML = response.cloud_pct;
		document.getElementById(city.toLowerCase() + "_feels_like").innerHTML = response.feels_like;
		document.getElementById(city.toLowerCase() + "_humidity").innerHTML = response.humidity;
		document.getElementById(city.toLowerCase() + "_max_temp").innerHTML = response.max_temp;
		document.getElementById(city.toLowerCase() + "_min_temp").innerHTML = response.min_temp;
		document.getElementById(city.toLowerCase() + "_sunrise").innerHTML = sunriseTime; // Display sunrise time
		document.getElementById(city.toLowerCase() + "_sunset").innerHTML = sunsetTime; // Display sunset time
		document.getElementById(city.toLowerCase() + "_wind_degrees").innerHTML = response.wind_degrees;
		document.getElementById(city.toLowerCase() + "_wind_speed").innerHTML = response.wind_speed;
	  })
	  .catch((err) => console.error(err));
  }
  




