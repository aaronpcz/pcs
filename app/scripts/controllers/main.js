'use strict';

var pcsApp = angular.module('pcsApp');

pcsApp.factory('issueAPI', function($http){
    return {
        getIssues: function() {
            var url='http://localhost/Shipping/web/index.php/issues';
            return $http.get(url);
          }
      };
  });
pcsApp.controller('MainCtrl', function ($scope, issueAPI) {
    //'MainCtrl', ['$scope', '$http', 'Issues'], function ($scope, $http, Issues)
    //Issues.query({'/issues'});

    issueAPI.getIssues().success(function(allIssues){
        $scope.viewIssues = allIssues;
      });

    /*$scope.awesomeThings = [
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'
    ];

    $scope.addThing = function() {
        $scope.awesomeThings.push($scope.things);
        $scope.things = '';
      };

    $scope.removeThing = function(index){
        $scope.awesomeThings.splice(index, 1);
      };*/
  });

