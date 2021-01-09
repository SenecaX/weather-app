


// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log('data :>> ', data);
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msg1 = document.querySelector('#msg1');
const msg2 = document.querySelector('#msg2');

msg1.textContent = '';
msg2.textContent = '';

weatherForm.addEventListener('submit', (e) => {

  e.preventDefault();
  const location = search.value;

  fetch('http://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1Ijoic2VuZWNheCIsImEiOiJja2ptdHNkdnA2Z2JoMnlsZzhuMXA1Znp5In0.4kkfx4zozTyIIZT_79_d5Q').then((response) => {
  response.json().then((data) => {
    
    console.log('data.features :>> ', data.features);
    if (data.features.length === 0) {
      msg2.textContent = 'No location found!';
    } else {
      msg1.textContent = data.features[0].place_name;
    }

  });
  });
  

});