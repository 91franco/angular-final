angular
  .module('miApp')
  .controller('CargaCtrl', ['$scope', 'Datos',
   function($scope, Datos){
     $scope.cargar = cargar;
     $scope.user = {};

     function cargar() {
       Datos.cargar($scope.user);
       console.log(Datos.listado());
       $scope.user = {};
     }
  }]);
