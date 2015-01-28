'use strict';

/**
 * @ngdoc function
 * @name paveApp.controller:PdrCtrl
 * @description
 * # PdrCtrl
 * Controller of the paveApp
 */
angular.module('paveApp')
  .controller('PdrCtrl', function ($scope,$location) {
    
  	$scope.nextPage = '#/history/review';

  	$scope.issues = ['Animal Cruelty','Arguing','Backtalking','Bedwetting','Complaining','Daydreaming','Defiance','Depression/Sadness','Destructiveness','Encopresis','Fearfulness','Fighting','Interrupting','Irritability','Jealousy','Lying','Nervous/Jittery','Notminding','Pant Wetting','Pouting','School Problems','Sexual Behaviors','Short Attention Span','Sleep Problems/Nightmares','Sluggishness','Stealing','Swearing','Teasing','Worried/Anxious','Biting','Hitting','Loudness','Waking at night','Crying','Hyperactivity','Repetitive Questions','Tantrums','Whining','Yelling'];

  	$scope.feelings = ['Stressed','Depressed','Positive','Hopeful','Overwhelmed'];

  	$scope.submit = function(){

  		window.location.href = "#/history/review";

  	}

  	$scope.cravingsTrue = false;

  	$scope.cravings = function(yes_no){

  		$scope.cravingsTrue = yes_no;

  	}


  });