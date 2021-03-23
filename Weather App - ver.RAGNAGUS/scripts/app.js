const searchForm = document.querySelector('.search-city');
const pageDetails = document.querySelector('.details');
const weatherImg = document.querySelector('.daytime-img img');
const weatherIcon = document.querySelector('.weather-icon img');
const allDetails = document.querySelector('.allDetail');


const UpdateIU = (city) => {

    const { cityDets, weather } = city;

    console.log(city);

    // update City Name
    pageDetails.innerHTML = `
    <div class="city-name">
        <h5 class="display-5">${cityDets.EnglishName}</h5>
    </div>
    <div class="weather">
        <h5 class="display-5">${weather.WeatherText}</h5>
    </div>
    <div class="temp display-6">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>°</span>
    </div>
    `;

    //update image
    const imgSrc = weather.IsDayTime ? '/img/day.svg' : '/img/night.svg';
    weatherImg.setAttribute('src', imgSrc);

    // update icon
    const iconSrc = `/img/icons/${weather.WeatherIcon}.svg`
    weatherIcon.setAttribute('src', iconSrc);

    // unhide
    if (allDetails.classList.contains('d-none')) {
        allDetails.classList.remove('d-none');
    }

}

const UpdateCity = async(city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
}

searchForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();

    const city = searchForm.search.value.trim();
    searchForm.reset();

    UpdateCity(city)
        .then((data) => UpdateIU(data));

})