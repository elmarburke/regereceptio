'use strict';

angular.module('regereceptioApp')
  .factory('replicator', function replicator($store, pouch, $rootScope) {
    var replicator = {};
    
    replicator.addSync = function (remoteDb, options) {
      if (options.continuous) {
        // save config to localStorage
        var localReplicator = $store.get('replicators') || [];
        localReplicator.push({
          'remoteDb': remoteDb,
          'options': options
        });
        $store.set('replicators', localReplicator);
      }
      
      replicator.startSync(remoteDb, options);
    };
    
    var autostartSync = function () {
      var localReplicator = $store.get('replicators') || [];
      $store.bind($rootScope, 'replicators');
      localReplicator.forEach(function (item) {
        replicator.startSync(item.remoteDb, item.options);
      });
    };
    
    replicator.startSync = function (remoteDb, options) {
      pouch.replicate.to(remoteDb, options);
      pouch.replicate.from(remoteDb, options);
    };
    
    autostartSync();
    
    return replicator;
  });
