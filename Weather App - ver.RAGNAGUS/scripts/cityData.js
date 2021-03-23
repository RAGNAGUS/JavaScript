const apiKey = 'bqQ3GzrGR2B5RfEUyxu0hcM8qQ6RRbcS'

const getCity = async(city) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const location = `?apikey=${apiKey}&q=${city}`

    const response = await fetch(url + location);

    const data = await response.json();


    return await data[0];

}

const getWeather = async(cityKey) => {

    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const weatherApi = `${cityKey}?apikey=${apiKey}`

    const response = await fetch(url + weatherApi);

    const data = await response.json();



    return await data[0];

}