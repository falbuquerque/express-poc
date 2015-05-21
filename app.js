var express = require('express');
var fs = require('fs');
var app = express();
var log = require('morgan');

// Configurações da aplicação
app.use(log('common', {
  stream: fs.createWriteStream('d:\\dev\\tmp\\express-poc.log', {flags: 'a'})
}));

// Endpoints
app.use('/', require('./info/infoEndpoint'));

// Error handling
app.use(function(error, request, response, nextCall) {
  console.error(error.stack);
  response.status(500).send('Error!');
});

// Server bootstrap
var server = app.listen(8080, function () {
  console.log('Started!');
});
