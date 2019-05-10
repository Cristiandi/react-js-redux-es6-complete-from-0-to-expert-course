import { url_base_weather, api_key } from '../constants/api-url';

const getUrlWeatherByCity = city => `${url_base_weather}weather?q=${city}&appid=${api_key}`;

export default getUrlWeatherByCity;