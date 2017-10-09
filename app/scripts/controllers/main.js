'use strict';

/**
 * @ngdoc function
 * @name anApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anApp
 */
angular.module('anApp')
  .controller('MainCtrl',  function ($scope, Balance) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.listBall = Balance.listBall;
	  $scope.selectedIndex = 0;
	  $scope.resultatFinal = "";
	
	  $scope.selection = function (n) {
	Balance.resetPoids();
		Balance.ajouterPoid(n);
		$scope.selectedIndex = n;
		console.log(angular.toJson($scope.listBall));
	  }
	  
	  $scope.execute = function(){
		  $scope.result = Balance.execute();
		  console.log($scope.result);
		  console.log("iterations:"+Balance.nombreIteration);
		  if ($scope.result < 9)
		  $scope.resultatFinal="C'est la boule "+$scope.result + " qui est la plus lourde! Solution trouvée apres "+Balance.nombreIteration+" itérations";
		  else  $scope.resultatFinal="if faudra choisir tout d'abord une boule svp ";
		 Balance.nombreIteration=0;
	  }
	  
	  $scope.reset = function() {
		$scope.selectedIndex = 0;
		$scope.resultatFinal ="";
		Balance.resetPoids();
	  }
	
  });
