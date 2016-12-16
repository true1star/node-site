var controllers = require('./controllers');
var directives = require('./directives');
var services = require('./services');
var _ = require('underscore');

var components = angular.module('myBamboo.components', ['ng']);

_.each(controllers, function(controller, name) {
	components.controller(name, controller);
});

_.each(directives, function(directive, name) {
	components.directive(name, directive);
});

_.each(services, function(factory, name) {
	components.factory(name, factory);
});

var app = angular.module('myBamboo', ['myBamboo.components', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			template: '<home-view></home-view>'
		}).
		when('/bamboo', {
			template: '<bamboo-view></bamboo-view>'
		}).
		when('/school', {
			template: '<school-filter></school-filter>'
		}).
		when('/school/:school/:category?', {
			templateUrl: 'views/pages/school_view.html'
		}).
		when('/category', {
			template: '<category-filter></category-filter>'
		}).
		when('/category/:category', {
			templateUrl: 'views/pages/category_view.html'
		}).
		when('/topics/:topic', {
			template: '<topic-view></topic-view>'
		});
});
