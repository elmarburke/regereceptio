'use strict';

angular.module('regereceptioApp')
  .controller('MainCtrl', function ($scope, pouchClient) {
    
    var testdb = pouchClient.create("dbname");
    testdb.allDocs({include_docs: true})
    .then(function (entrys) {
      $scope.awesomeThings = entrys.rows
    })
  });