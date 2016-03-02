var ItemSense = require('itemsense-node');
var itemsenseConfig = require('../itemsense-config.json');
var _ = require('lodash');
var q = require('q');

var itemsense = new ItemSense(itemsenseConfig);



var getLatestTransitions = function(fromTime) {
  var deferred = q.defer();
  var queryParams = {fromTime: fromTime.toISOString(), pageSize: 1000};
  var items = [];

  getAllPages(queryParams, true, items).then(function(items){
    var mostRecentTransition = _.values(_.groupBy(items, 'epc'))
        .map(function (arr) {
          return _(arr).max(function (arr) {
            return new Date(arr.observationTime);
          })
        });
    deferred.resolve(mostRecentTransition);

  });

  return deferred.promise;

};


var getAllPages = function( queryParams, initialRequest, items, deferred){
  if(!deferred){
    deferred = q.defer();
  }

  if(queryParams.pageMarker || initialRequest){
     itemsense.items.getHistory(queryParams).then(function(response){
        queryParams.pageMarker = response.nextPageMarker;
        items = _.concat(items, response.history);
        getAllPages(queryParams, false, items, deferred );
      },function(error){
        console.log(error);
    });
  }else{
    deferred.resolve(items);
  }
  return deferred.promise;
};

module.exports = getLatestTransitions;

