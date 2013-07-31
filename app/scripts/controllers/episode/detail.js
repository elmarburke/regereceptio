'use strict';

angular.module('regereceptioApp')
  .controller('EpisodeDetailCtrl', function ($scope, $routeParams, episode) {
    var episodeName = $scope.episodeName = $routeParams.episode_name;
    
    episode.allTopicsOfAnEpisode(episodeName)
    .then(function (topics) {
      $scope.topics = topics;
    })
  });
