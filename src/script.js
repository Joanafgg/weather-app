/** @format */

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let enterCity = prompt("Enter a city?");
enterCity = enterCity.toLowerCase().trim();
if (weather[enterCity] !== undefined) {
  let temperature = weather[enterCity].temp;
  let humidity = weather[enterCity].humidity;
  let celsiusTemp = Math.round(temperature);
  let fahrenheitTemp = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${enterCity} with humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${enterCity}`
  );
}

