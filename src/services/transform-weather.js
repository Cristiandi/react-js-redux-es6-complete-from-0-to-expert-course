import convert from 'convert-units';

const getTemp = kelvin => {
  return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weatherData => {
  return 'rain';
}

const transformWeather = weatherData => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData);
  const temperature = getTemp(temp);

  const data = {
    weatherState,
    temperature,
    humidity,
    wind: `${speed} m/s`
  };

  return data;
}

export default transformWeather;