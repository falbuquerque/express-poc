var router = require('express').Router();
module.exports = router;

var Client = require('node-rest-client').Client;
var restClient = new Client();
restClient.registerMethod('getFromFacebook', 'http://graph.facebook.com/44', 'GET');
restClient.registerMethod('getFromWeather', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk', 'GET');

router.get('/get-info', function(request, response) {
  restClient.methods.getFromFacebook(function(json, response) {
    console.log(JSON.parse(json));
  });
  restClient.methods.getFromWeather(function(json, response) {
    console.log(JSON.parse(json));
  });

  response.status(200).json({'status': 'done'});
});

function handleJson(json, response) {
  console.log(JSON.parse(json));
}
