const request = require('request');

const geoCode = (address, callback) => {
  const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2VuZWNheCIsImEiOiJja2ptdHNkdnA2Z2JoMnlsZzhuMXA1Znp5In0.4kkfx4zozTyIIZT_79_d5Q';
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to service', undefined);
    } else if (response.body.features.length === 0) {
      callback('No location found!', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
}

module.exports = { geoCode }