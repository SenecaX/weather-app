const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=46fd33f781478c2b2825f649ce6efb6c&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f';
  
  request({ url, json: true }, (error, response) => {

    if (error) {
      callback('Unable to connect to weather service');
    } else if (response.body.error) {
      callback('Missing parameters');
    } else {
      callback(undefined, {
        current: response.body.current
      });
    }
  });
}

module.exports = { forecast }
