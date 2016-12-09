var express = require('express');
var axios = require('axios')

var app = express();

app.use(express.static(__dirname + '/views/'));


// app.get('/', function(req, res) {
//   res.render('index');
// });





console.log('server is up and running')
var server = app.listen(process.env.PORT || 3000);
