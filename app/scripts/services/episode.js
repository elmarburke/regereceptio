/* jshint camelcase: false */
'use strict';

angular.module('regereceptioApp')
  .factory('episode', function (pouch) {
    var episode = {};
    
    episode.allEpisodes = function () {
      
      function episodesMap (doc) {
        if (doc.type && doc.episode && doc.type === 'topic') {
          emit(doc.episode, doc._id);
        }
      }
      
      var options = {
        include_docs: false, reduce: true
      };
      
      return topicDb.query({map: episodesMap}, options);
    }
    
    return episode;
  });
