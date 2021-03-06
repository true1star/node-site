var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');


module.exports = function(wagner) {
    var api = express.Router();

	api.get('/createbam', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			Bamboo.
				create(array, function (err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                            });
		};
	}));

	api.get('/categories', wagner.invoke(function(Category) {
		return function(req, res) {
			
			Category.
				find().
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
	
	api.get('/bamboo', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			var sort = { date: -1 };
			
			Bamboo.
				find().
				sort(sort).
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

	api.get('/bamboo/:page', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			var sort = { date: -1 };
			var page = req.params.page;
			var nPerPage = 3;
			
			Bamboo.
				find().
				sort(sort).
				skip( page > 0 ? ((page-1))*nPerPage : 0 ).
				limit( nPerPage ).
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
	
	api.get('/bamboo/school/:school/:category?', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			var query = { school : req.params.school };
			
			if ( req.params.category ){
				query["category"] = Number(req.params.category);
			}
			
			/*Bamboo.
				find(query).
				sort({ date : -1 }).
				exec(function(err, bamboos) {
                            if (err) {
                                return res.
                                    status(status.INTERNAL_SERVER_ERROR).
                                    json({ error: err.toString() });
                            }
                            res.json({ bamboos: bamboos });
                });*/
                
				Bamboo.
				find(query).
				limit(10).
				populate('category').
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

	api.get('/bamboo/category/:category?', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			var query = {};
			console.log(req.params.category);
			if( req.params.category ){
				query = { category: Number(req.params.category) };
			}
			
			Bamboo.
				find(query).
				limit(10).
				populate('category').
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

	api.get('/bamboo/topics/:topic', wagner.invoke(function(Bamboo) {
		return function(req, res) {
			
			Bamboo.
				find({ $text: { $search: req.params.topic } }).
				populate('category').
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
