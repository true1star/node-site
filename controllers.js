exports.mainViewController = function($scope, $bambooList) {
	$scope.bambooList = $bambooList;
	setTimeout(function() {
		$scope.$emit('mainViewController');
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
