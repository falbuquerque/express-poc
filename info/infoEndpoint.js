var router = require('express').Router();
module.exports = router;

var Client = require('node-rest-client').Client;
var restClient = new Client();
restClient.registerMethod('getFromWeather', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk', 'GET');

router.get('/get-info', function(request, response) {
  restClient.methods.getFromWeather(function(data, weatherResponse) {
    response.status(200).json(JSON.parse(data));
  });
});
