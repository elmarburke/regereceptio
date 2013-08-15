'use strict';

angular.module('regereceptioApp')
  .controller('EpisodeIndexCtrl', function ($scope, episode) {
    episode.allEpisodes()
      .then(function(episodes) {
        $scope.episodes = episodes;
      });
    
  });
