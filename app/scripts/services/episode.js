/* jshint camelcase: false */
'use strict';

angular.module('regereceptioApp')
  .factory('episode', function (pouch) {
    var episode = {};
    
    function episodesMap (doc) {
      if (doc.type && doc.episode && doc.type === 'topic') {
        emit(doc.episode, doc._id);
      }
    }
    
    episode.allEpisodes = function () {
      
      var options = {
        include_docs: false,
        reduce: true
      };
      
      return pouch.query({map: episodesMap, reduce: '_count'}, options)
        .then(function (data) {
          return data.rows;
        });
    }
    
    episode.allTopicsOfAnEpisode = function (episodeName) {
      var options = {
        include_docs: true,
        reduce: false,
        key: episodeName
      };
      
      return pouch.query({map: episodesMap}, options)
      .then(function (data) {
        var rows = data.rows.map(function (a) {
          return a.doc;
        });
        
        return rows
      });
    }
    
    return episode;
  });
