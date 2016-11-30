angular
  .module('miApp')
  .controller('ListadoCtrl', ['$scope', 'Datos',
   function($scope, Datos){
     console.log(Datos.listado());

     $scope.personas = Datos.listado();
     $scope.borrar = Datos.borrar;

  }]);
