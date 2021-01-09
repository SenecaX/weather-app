const geoCode = require('./geocode');
const forecast = require('./forecast');

const address = process.argv[2];

// if (!address) {
//   console.log('Please provide an address');
// } else {

//  geoCode.geoCode(address, (error, data) => {
//     if (error) {
//       return console.log(error);
//     }

//     forecast.forecast(data.latitude, data.longitude, (error, forecastData) => {
//       if (error) {
//         return console.log(error);
//       }

//       console.log('forecast', forecastData);
//       console.log('data :>> ', data);
//     });
//   });
// }


