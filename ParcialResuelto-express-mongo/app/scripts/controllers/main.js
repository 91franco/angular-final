angular
  .module('miApp')
  .controller('MainCtrl', ['$scope',
   function($scope){

     $scope.vista = 1;
     $scope.cambiarVista = cambiarVista;

     function cambiarVista(vista){
       $scope.vista = vista;
     }

  }]);
