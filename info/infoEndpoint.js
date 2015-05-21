var router = require('express').Router();
module.exports = router;

var Client = require('node-rest-client').Client;
var restClient = new Client();
restClient.registerMethod('getFromFacebook', 'http://graph.facebook.com/44', 'GET');
restClient.registerMethod('getFromWeather', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk', 'GET');

router.get('/get-info', function(request, response) {
  restClient.methods.getFromFacebook(handleJson);
  restClient.methods.getFromWeather(handleJson);
  response.status(200).json({'status': 'done'});
});

function handleJson(json, response) {
  console.log(JSON.parse(json));
}
