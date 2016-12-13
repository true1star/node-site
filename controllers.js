exports.BambooViewController = function($scope, $bambooList) {
	$scope.bambooList = $bambooList;
	setTimeout(function() {
		$scope.$emit('BambooViewController');
	}, 0);
};

exports.SchoolFilterController = function($scope) {
	$scope.schoolList = ['korea','seoul','yonsei'];

	setTimeout(function() {
		$scope.$emit('SchoolFilterController');
	}, 0);
};

exports.SchoolBamboosController = function($scope, $routeParams, $http) {
	var encoded = encodeURIComponent($routeParams.school);
	
	$http.
		get('/api/v1/bamboo/school/' + encoded).
		success(function(data) {
			$scope.bambooList = data.bamboos;
		});
		
		setTimeout(function() {
			$scope.$emit('SchoolBamboosController');
		}, 0);
};

/*
exports.BambooAllController = function($scope, $routeParams, $http) {
    var encoded = encodeURIComponent($routeParams.id);

    $http.
        get('/api/v1/bamboo/').
        success(function(data) {
                $scope.bamboos = data.bamboos;
                });

    setTimeout(function() {
            $scope.$emit('BammbooAllController');
            }, 0);
};
*/
