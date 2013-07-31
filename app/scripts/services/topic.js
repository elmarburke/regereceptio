/* jshint camelcase: false */
'use strict';

angular.module('regereceptioApp')
  .service('topic', function topic($rootScope, pouch, replicator) {
    var topicClient = {};
    var topicDb = pouch;
    
    /* Private functions */
    
    function mapTopics (doc) {
      if (doc.type && doc.type === 'topic') {
        emit(doc._id, doc.title);
      }
    }
    
    /* Public functions */
    
    topicClient.fetch = function () {
      return topicDb.query({map: mapTopics}, {include_docs: true})
      .then(function (data) {
        var rows = data.rows.map(function (a) {
          return a.doc;
        });
        
        return rows;
      });
    };
    
    topicClient.put = pouch.put;
    
    topicClient.changed = function (callback) {
      var filterFunction = function (doc, req) {
        if ((doc.type && doc.type === 'topic') || doc._deleted == true) {
          return true;
        } else {
          return false;
        }
      };
      
      return pouch.info()
        .then(function (info) {
          return pouch.changes({
            since: info.update_seq,
            include_docs: true,
            continuous: true,
            filter: filterFunction,
            onChange: callback
          });
        });
    };
    
    topicClient.remove = pouch.remove;
    
    return topicClient;
  });