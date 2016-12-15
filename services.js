var status = require('http-status');

exports.$bambooList = function($http) {
	var s = {};
	
	s.loadBambooList = function() {
		$http.
			get('/api/v1/bamboo').
			success(function(data) {
				s.bambooList = data.bamboos;
			}).
			error(function(data, $status) {
				if ($status === status.NOT_FOUND) {
					s.bambooList = null;
				}
			});
	};
	
	s.loadBambooList();
	
	setInterval(s.loadUser, 60*60*1000);
	
	return s;
};

exports.$schools = function($http) {
	var s = {};
	
	s.loadSchools = function() {
		$http.
			get('/api/v1/schools').
			success(function(data) {
				s.schools = data.schools;
			}).
			error(function(data, $status) {
				if ($status === status.NOT_FOUND) {
					s.schools = null;
				}
			});
	};
	
	s.loadSchools();
	
	return s;
};

