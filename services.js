var status = require('http-status');

exports.$bambooList = function($http) {
	var s = {};
	
	s.loadBambooList = function() {
		$http.
			get('/api/v1/bamboo').
			success(function(data) {
				// first bamboo post
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
