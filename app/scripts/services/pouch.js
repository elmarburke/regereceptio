'use strict';

angular.module('regereceptioApp')
  .service('pouch', function pouch(pouchClient) {
    new PouchDB('regerecepito');
    return pouchClient.create('regerecepito');
  });
