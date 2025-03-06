const API_KEY = "c53f05b7af9309718ce15ea0ecfaca94";
let unit = "metric";

function fetchWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        document.getElementById("error-message").textContent = "Please enter a city!";
        return;
    }

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("error-message").textContent = "City not found!";
                return;
            }
            
            document.getElementById("error-message").textContent = "";
            document.getElementById("city-name").textContent = `Weather in ${data.name}`;
            document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}° ${unit === "metric" ? "C" : "F"}`;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
        })
        .catch(error => {
            document.getElementById("error-message").textContent = "Error fetching data!";
            console.error(error);
        });
}

function toggleUnit() {
    unit = unit === "metric" ? "imperial" : "metric";
    fetchWeather();
}
