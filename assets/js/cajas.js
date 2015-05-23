app = angular.module('cajas', []);
app.directive('cajas', function(){
	return {
		restrict: 'E',
		templateUrl: 'cajas.html',
		controller: ['$rootScope','$scope', '$http', function($rootScope, $scope, $http ){
		}]
	};
});