angular
  .module('miApp')
  .controller('CalculosCtrl', ['$scope', 'Personas',
   function($scope, Personas){

     $scope.calcular = calcular;
     $scope.rta = 'Presione un boton para calcular.';
     $scope.datos = [];

     Personas.listado()
     .then(function(datos){
        $scope.datos = datos;
     })
     .catch(function(e){
       console.log(e);
     })

     function calcular(punto){
       switch (punto) {
         case 1:
           var rta = puntoUno(punto);
           $scope.rta = "Edad de los usuarios: " + rta;

           break;
         case 2:
           var rta = puntoDos(punto);
           $scope.rta = "Edad de usuarios mujeres: " + rta;

           break;
         case 3:
           var rta = puntoTres(punto);
           $scope.rta = "Nombre: " + rta.name + " edad: " + rta.age;
           break;
         default:

       }
     }

     function puntoUno(){
       return $scope.datos
         .reduce(function (prev, next) {
           return prev + next.age;
         }, 0) / $scope.datos.length;
     }
     function puntoDos(){
       var sumAge = $scope.datos
         .filter(function (user) {
           return user.gender === 'female';
         })
         .reduce(function (prev, next) {
           return prev + next.age;
         }, 0);

       var countGender = $scope.datos.reduce(function (prev, next) {
         if (next.gender === 'male') {
           return 1 + prev;
         }
         return prev;
       }, 0);

       return sumAge / countGender;
     }
     function puntoTres(){
       return $scope.datos
       .reduce(function (prev, next) {
        if (prev && prev.age > next.age) {
          return {
            name: prev.name,
            age: prev.age
          };
        }

        return next;
      });
     }
  }]);
