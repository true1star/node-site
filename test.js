/*
var app = require('./example');
var assert = require('assert');
var express = require('express');
var superagent = require('superagent');
var URL_ROOT = 'http://localhost:3000';
var wagner = require('wagner-core');

describe('my feature', function() {
        it('works', function() {
                assert.equal('A', 'A');
                });

        it('fails gracefully', function() {
                assert.throws(function() {
                        throw 'Error!';
                        });
                });
        });

describe('my other feature', function() {
        it('async', function(done){
                setTimeout(function(){
                        done();
                        }, 25);
                });
        });
*/
//////////////////////////////////////////////////
/*
describe('server', function() {
	var server;

	beforeEach(function() {
		server = app().listen(3000);
	});

	afterEach(function() {
		server.close();
	});

	it('prints out "Hello, world" when user goes to /', function(done) {
		superagent.get('http://localhost:3000/', function(err, res) {
			assert.ifError(err);
			assert.equal(res.status, 200);
			assert.equal(res.text, "Hello, world!");
			done();
		});
	});
});


describe('Category API', function() {
	var server;
	var Category;

	before(function() {
		var app = express();

		//Bootstrap server
		models = require('./models')(wagner);
		app.use(require('./api')(wagner));

		server = app.listen(3000);

		//Make Category model available in tests
		Category = models.Category;
	});

	after(function() {
		//Shut the server down when done
		server.close();
	});

	beforeEach(function(done) {
		//Make sure categories are epty before each test
		Category.remove({}, function(err) {
			assert.ifError(err);
			done();
		});
	});

	it('can load a category by id', function(done) {
		//Create a single category
		Category.create({ _id: 'Electronics' }, function(err, doc) {
			assert.ifError(err);
			var url = URL_ROOT + '/category/id/Electronics';
			// Make an HTTP request to localhost:3000/category/id/Electronics
			superagent.get(url, function(err, res) {
				assert.ifError(err);
				var result;
				//And make sure we got { _id: 'Electronics' } back
				assert.doesNotThrow(function() {
					result = JSON.parse(res.text);
				});
				assert.ok(result.category);
				assert.equal(result.category._id, 'Electronics');
				done();
			});
		});
	});
	
	it('can load all categories that have a certain parent', function(done) {
		var categories = [
			{ _id: 'Electronics' },
			{ _id: 'Phones', parent: 'Electronics' },
			{ _id: 'Laptops', parent: 'Electronics' },
			{ _id: 'Bacon' }
		];

		//Create 4 categories
		Category.create(categories, function(err, doc) {
			assert.ifError(err);
			var url = URL_ROOT + '/category/parent/Electronics';
			// Make an HTTP request to localhost:3000/category/parent/Electronics
			superagent.get(url, function(err, res) {
				assert.ifError(err);
				var result;
				//And make sure we got { _id: 'Electronics' } back
				assert.doesNotThrow(function() {
					result = JSON.parse(res.text);
				});
				assert.ok(result.categories);
				assert.equal(result.categories.length, 2);
				assert.equal(result.categories[0]._id, 'Laptops');
				assert.equal(result.categories[1]._id, 'Phones');
				done();
			});
		});
	});
});


describe('counterDirective', function() {
	var injector;
	var element;
	var scope;
	
	beforeEach(function() {
		injector = angular.injector(['myApp']);
		
		injector.invoke(function($rootScope, $compile) {
			scope = $rootScope.$new();
			element = $compile('<counter-directive></counter-directive>')(scope);
			scope.$apply();
		});
	});
	
	it('increments counter when you click', function() {
		assert.equal(element.text(), 'You\'ve clicked this div 0 times');
		element.find('div').click();
		assert.equal(element.text(), 'You\'ve clicked this div 1 times');
	});
});
*/


describe('Nav Bar', function() {
	var injector;
	var element;
	var scope;
	var compiler;
	var httpBackend;
	
	beforeEach(function() {
		injector = angular.injector(['myApp', 'ngMockE2E']);
		intercepts = {};
		
		injector.invoke(function($rootScope, $compile, $httpBackend) {
			scope = $rootScope.$new();
			compiler = $compile;
			httpBackend = $httpBackend;
		});
	});
	
	it('shows first bamboo school', function(done) {
		httpBackend.whenGET('/views/pages/template.html').passThrough();
		httpBackend.expectGET('/api/v1/bamboo').respond({
		"bamboos":[
		{
		"_id":"584bae0c4eb3cf163a31e416",
		"school":"seoul",
		"contents":"I went to the movies with my girlfriend and there were a lot of couples.",
		"featured":true,"__v":0,
		"like":142,
		"date":"2016-12-10T07:26:04.376Z",
		"topics":["girlfriend","movie","couple"],
		"category":"love"
		},
		{
		"_id":"584ba846d23858127b1fe196",
		"school":"seoul",
		"contents":"I went to the movies with my girlfriend and there were a lot of couples.",
		"featured":true,
		"__v":0,
		"like":142,
		"date":"2016-12-10T07:01:26.066Z",
		"topics":["girlfriend","movie","couple"],
		"category":"love"
		},
		{
		"_id":"584a6747b48c182c42d91984",
		"school":"Yonsei",
		"contents":"Mother, father gentleman and I like it",
		"featured":true,
		"__v":0,
		"like":221,
		"date":"2016-12-09T08:11:51.464Z",
		"topics":["mother","father","like"],
		"category":"family"
		},
		{"_id":"584a6746b48c182c42d91983",
		"school":"Yonsei","contents":"Mother, father gentleman and I like it",
		"featured":true,
		"__v":0,
		"like":221,
		"date":"2016-12-09T08:11:50.678Z",
		"topics":["mother","father","like"],
		"category":"family"
		},
		{"_id":"584a66b60148752b8eb2f156",
		"school":"Korea",
		"contents":"I went to the date library to get ready for the love. I need an extra like.",
		"featured":true,
		"__v":0,
		"like":421,
		"date":"2016-12-09T08:09:26.437Z",
		"topics":["love","date","like"],
		"category":"romance"
		},
		{"_id":"584a65260148752b8eb2f155",
		"school":"Korea",
		"contents":"I went to the date library to get ready for the love. I need an extra like.",
		"featured":true,
		"__v":0,
		"like":421,
		"date":"2016-12-09T08:02:46.605Z",
		"topics":["love","date","like"],
		"category":"romance"
		}
		]});
			
		element = compiler('<user-menu></user-menu>')(scope);
		scope.$apply();
		
		scope.$on('MyHttpController', function() {
			httpBackend.flush();
			assert.notEqual(element.find('.bamboo').css('display'), 'none');
			assert.equal(element.find('.bamboo').text().trim(), 'First school: seoul');
			done();
		});
	});
});





































