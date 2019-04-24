const location = 'Cali,co';
const api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const url_base_weather = process.env.REACT_APP_OPENWEATHERMAP_BASE_URL;
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;