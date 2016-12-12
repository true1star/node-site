//EXPRESS//
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//MongoDB
/*
var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/example';

mongodb.MongoClient.connect(url, function(err, db){
        if  (err) {
            console.log(err);
            process.exit(1);
        }

        db.collection('sample').insert( { x: 1 }, function(err, result){
                if (err) {
                    console.log(err);
                    process.exit(1);
                }

            db.collection('sample').find().toArray(function(err, docs){
                    if (err) {
                        console.log(err);
                        process.exit(1);
                    }

                    docs.forEach(function(doc){
                            console.log(JSON.stringify(doc));
                    });
                    process.exit(0);
            });
        });
});
*/

//mongoose
var mongoose = require('mongoose');
var schema = require('./bamboo');

mongoose.connect('mongodb://localhost:27017/test');
var Bamboo = mongoose.model('Bamboo', schema, 'bamboos');

var bamboo = new Bamboo({
    school: 'Korea',
    category: 'study',
    topics: ['library','exam','credit'],
    contents: 'I went to the science library to get ready for the final exams. I need an extra credit.',
    like: 1234,
    featured: true
});

bamboo.save(function(err){
        if (err) {
            console.log(err);
            process.exit(1);
        }
        Bamboo.find({ school: 'Korea'}, function(err, docs){
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(require('util').inspect(docs));
                process.exit(0);
        });
 });

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded());

//route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css and images, etc ) location
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function(){
	console.log('app started');
});

