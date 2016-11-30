angular
  .module('miApp')
  .service('Personas', ['$http', function($http){

    this.listado = listado;

    function listado () {
      return $http.get('scripts/personas.json')
      .then(function(rta){
        return rta.data;
      })
      .catch(function(e){
        return e;
      })
    }
  }]);
