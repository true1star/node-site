var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');


module.exports = function(wagner) {
    var api = express.Router();

	api.use(bodyparser.json());
	
	var bamboo = {
    school: 'Korea',
    category: 'school',
    topics: ['final','exam','library'],
    contents: 'final exam dolor sit amet, adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est library.',
    like: 88,
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
	
	api.get('/bamboo/school/:query', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			Bamboo.
				find({ school : req.params.query }).
				sort({ date : -1 }).
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
