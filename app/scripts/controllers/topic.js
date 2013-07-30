'use strict';

angular.module('regereceptioApp')
  .controller('TopicCtrl', function ($scope, topic) {
    topic.fetch()
      .then(function (data) {
        $scope.topics = data;
      });
    
    $scope.addTopic = function(topicTitle) {
      var doc = {
        _id: Math.uuid(),
        type: "topic",
        title: topicTitle,
        position: ($scope.topics.length + 1) * 10
      };
      
      topic.put(doc);
      $scope.newTopic = '';
    };
    
    topic.changed(function (change) {
      $scope.$apply(function() {
        var indexOfChange = $scope.topics.indexOfObject('_id', change.doc._id);
        
        if(indexOfChange.length === 0) {
          // No items foud, so we push the array
          $scope.topics.push(change.doc);
        }
        else if (change.deleted){
          // Ups, we did delete somthng
          $scope.topics.splice(indexOfChange[0], 1);
        }
        else {
          // lets update!
          $scope.topics[indexOfChange] = change.doc;
        }
        
      });
    });
    
    $scope.delete = function (index, id, rev) {
      //$scope.topics.splice(index, 1);
      
      topic.remove({
        _id: id,
        _rev: rev
      });
    };
    
    
  });