const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
const dates = document.querySelector('.todayDates');
const times = document.getElementById('todayTime');
let date = new Date();

// Function work when user input the city name
form.addEventListener('submit', function (e) {

    // preventDefault() to stop page reload
    e.preventDefault();


    

    // Updating the city name
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

    // fetching data from the weather api
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

        // Updating the DOM
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}`
        weather.innerHTML = `${weatherMain}`
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;

        

        // Updating dates
        const currentMonth = date.getMonth();
        switch (currentMonth) {
            case 0:
                dates.innerHTML = `${date.getDate()}, Jan`
                break;
            case 1:
                dates.innerHTML = `${date.getDate()}, Feb`
                break;
            case 2:
                dates.innerHTML = `${date.getDate()}, Mar`
                break;
            case 3:
                dates.innerHTML = `${date.getDate()}, Apr`
                break;
            case 4:
                dates.innerHTML = `${date.getDate()}, May`
                break;
            case 5:
                dates.innerHTML = `${date.getDate()}, Jun`
                break;
            case 6:
                dates.innerHTML = `${date.getDate()}, Jul`
                break;
            case 7:
                dates.innerHTML = `${date.getDate()}, Aug`
                break;
            case 8:
                dates.innerHTML = `${date.getDate()}, Sept.`
                break;
            case 9:
                dates.innerHTML = `${date.getDate()}, Oct.`
                break;
            case 10:
                dates.innerHTML = `${date.getDate()}, Nov`
                break;
            case 11:
                dates.innerHTML = `${date.getDate()}, Dec`
                break;
        }

       
    })
})
