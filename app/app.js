var app = angular.module('myBamboo', ['ng']);

app.directive('userMenu', function() {
	return {
		controller: 'MyHttpController',
		templateUrl: '/views/pages/template.html'	
	}
});

app.controller('MyHttpController', function($scope, $http) {
	$http.get('/api/v1/bamboo').success(function(data) {
		$scope.bamboo = data.bamboos[0];
	});
	
	setTimeout(function() {
		$scope.$emit('MyHttpController');
	}, 0);
});
