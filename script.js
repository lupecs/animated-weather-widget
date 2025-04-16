const apiKey = '';
const city = 'Los Angeles';

async function getWeather() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
};

const data = await res.json();
document.getElementById('city').textContent = data
document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
document.getElementById('desc').textContent = data.weather[0].description;
document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

if (data.weather[0].main.toLowerCase().includes('rain')) {
    document.body.style.background = 'linear-gradient(to top, #3a6073, #16222a)';
} else if (data.weather[0].main.toLowerCase().includes('clear')) {
    document.body.style.background = 'linear-gradient(to top, #fbceabb, #f8b500)';
}

getWeather();