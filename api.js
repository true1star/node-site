var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');


module.exports = function(wagner) {
    var api = express.Router();

	api.use(bodyparser.json());
	
	var bamboo = {
    school: 'Seoul',
    category: 'love',
    topics: ['girlfriend','movie','couple'],
    contents: 'I went to the movies with my girlfriend and there were a lot of couples.',
    like: 142,
    featured: true
};

	api.get('/create', wagner.invoke(function(Bamboo) {
		return function(req, res) {		
			Bamboo.create( bamboo, function(err, doc) {
			res.send('done!!')});
		}
	}));
	
	api.get('/bamboo', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			var sort = { date: -1 };
			
			Bamboo.
				find().
				sort(sort).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                            });
		};
	}));

	api.get('/bamboo/:query', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			Bamboo.
				find(
					{ $text : { $search: req.params.query } },
					{ score : { $meta: 'textScore' } }).
				sort({ score : { $meta: 'textScore' } }).
				limit(10).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                            });
		};
	}));
/*
    api.get('/category/id/:id', wagner.invoke(function(Category) {
                return function(req, res) {
                    Category.findOne({ _id: req.params.id }, function(err, category) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            if (!category) {
                                return res.
                                    status(status.NOT_FOUND).
                                    json({ error: 'Not found' });
                            }
                            res.json({ category: category });
                    });
                }
    }));
    
    api.get('/category/parent/:id', wagner.invoke(function(Category) {
                return function(req, res) {
                    Category.
                        find({ parent: req.params.id }).
                        sort({ _id: 1 }).
                        exec(function(err, categories) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ categories: categories });
                    });
                };
    }));
*/
    
    return api;
};
