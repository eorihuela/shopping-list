(function() {
  'use strict';

  angular
    .module('checklist', [])
    .controller('checklistController', checklistController);

  checklistController.$inject = ['$scope', 'structureService', '$location', '$rootScope'];

  function checklistController($scope, structureService, $location, $rootScope) {

    // Register upper level modules
    structureService.registerModule($location, $scope, 'checklist');
    // --- Start checklistController content ---

    $scope.addItem    = addItem;
    $scope.removeItem = removeItem;

    $scope.arrayItems = [];
    $scope.producto   = {};
    $scope.err        = '';

    function addItem() {  //añadimos producto al array
       if (($scope.producto.articulo!=null) && ($scope.producto.cantidad!=null)) {
           if (isNumber($scope.producto.cantidad)) {
               $scope.err   = '';
               $scope.arrayItems.push($scope.producto);
             } else $scope.err   = 'Error: introduzca un número en el campo cantidad.';

       }else $scope.err   = 'Error: introduzca valores.';
       reset();
    }

    function isNumber (number) {
       if (!isNaN(number)) return true;
       else return false;
    }

    function removeItem(productIndex) {
        $scope.arrayItems.splice(productIndex, 1);
    }

    function reset() {
      $scope.producto = {};
    }



    // --- End checklistController content ---
  }
}());
