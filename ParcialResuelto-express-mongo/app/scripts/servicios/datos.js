angular
  .module('miApp')
  .factory('Datos', [function(){
    var data = [];
    
    return {
      listado : listado,
      cargar: cargar,
      borrar: borrar
    }

    function cargar(objeto){
      data.push(objeto);
    }

    function listado(){
      return data;
    }

    function borrar(item) {
      var pos = data.indexOf(item);
      return data.splice(pos, 1);
    }
  }]);
