import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transform-weather';

const transformForecast = data => {
  return data.list
    .filter(item => {
      return moment.unix(item.dt).hour() === 7 || moment.unix(item.dt).hour() === 13 || moment.unix(item.dt).hour() === 18;
    })
    .map(item => (
      {
        weekDay: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data: transformWeather(item)
      }
    ));
};

export default transformForecast;