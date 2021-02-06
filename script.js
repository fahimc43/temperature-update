
const wetherData = city => {
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d7c0c77f2ed37ce0601c7d1045ea8d06`
    fetch(url)
    .then(res => res.json())
    .then(data => updateWeather(data))
}
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function(){
    const input = document.getElementById('city').value;
    wetherData(input);
})

const updateWeather = data => {
    document.getElementById('show-city').innerText = data.name;
    document.getElementById('show-temp').innerText = data.main.temp;
    document.getElementById('description').innerText = data.weather[0].description;
    const showIcon = data.weather[0].icon;
    document.getElementById('show-icon').setAttribute('src', `https://openweathermap.org/img/wn/${showIcon}@2x.png`)
    document.getElementById('city').value = "";
}
wetherData("dhaka");