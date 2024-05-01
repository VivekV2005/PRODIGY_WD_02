const apiKey = 'YOUR_API_KEY'; // Replace with your own API key from OpenWeatherMap

document.getElementById('submit-btn').addEventListener('click', () => {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value.trim();

    if (cityName) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;
            })
            .catch(error => {
                alert('Error fetching weather data. Please try again.');
                console.error(error);
            });
    } else {
        alert('Please enter a city name.');
    }
});