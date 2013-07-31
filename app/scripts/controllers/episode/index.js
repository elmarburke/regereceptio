'use strict';

angular.module('regereceptioApp')
  .controller('EpisodeIndexCtrl', function ($scope, episode) {
    episode.allEpisodes()
    .then(function(data) {
      $scope.episodes = data.rows;
    })
  });
