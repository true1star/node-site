var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);

var app = express();

//wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

//css, img
app.use(express.static(__dirname + '/public'));
//
app.use(express.static('./', { maxAge: 4*60*60*1000 }));

app.listen(3000);
console.log('Listening on port 3000!');
