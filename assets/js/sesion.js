app = angular.module('sesion', []);
app.directive('sesion', function(){
	return {
		restrict: 'E',
		templateUrl: 'sesion.html',
		controller: ['$rootScope','$scope', '$http', '$cookies', function($rootScope, $scope, $http, $cookies){
			$rootScope.get_cuentas = function() {
				$http.get('http://192.168.1.34:3000/rco/cuentas.json').
				success(function(data, status, headers, config) {
					$rootScope.cuentas = data;
				});
			};	
			if ($cookies.usuario_nombre) {
				$rootScope.logueado=true;
				$rootScope.get_cuentas();
			};
			$scope.log_in = function(){
				$http.post('http://192.168.1.34:3000/api/rba/sesiones', {usuario: $scope.usuario, password: $scope.password, empresagrupo: 1}, {withCredentials: true}).
				success(function(data, status, headers, config) {
					$rootScope.logueado=true;
					$rootScope.get_cuentas();
				}).
				error(function(data, status, headers, config) {
					alert("fallo");
				});
			};
			$scope.log_out = function(){
				$http.get('http://192.168.1.34:3000/api/rba/sesiones/salir').
				success(function(data, status, headers, config) {
					$rootScope.logueado=false
				}).
				error(function(data, status, headers, config) {
					alert("fallo");
				});
			};
		}]
	};
});