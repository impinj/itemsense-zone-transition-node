/**
 * Created by jcombopi on 3/1/16.
 */
var configureQueue = require('./src/push.js');
var pullItems = require('./src/pull.js');

const ELAPSED_QUERY_TIME_IN_SECONDS =10;


var handleMessage = function (message) {
  //do work to handle pushed meessages
  console.log(JSON.stringify(message));
};


//Push samples via message queues

 configureQueue('south', 'north', handleMessage);
 configureQueue('north', 'south', handleMessage);
 configureQueue('ABSENT', 'FACILITY',handleMessage);
 configureQueue('south', 'ABSENT', handleMessage);
 configureQueue('north', 'ABSENT', handleMessage);
 configureQueue('south', 'FACILITY', handleMessage);
 configureQueue('north', 'FACILITY', handleMessage);


//Pulling Data Examples
var getMostRecentZoneTransitions = function(){
  var dateNow = new Date();
  var queryTime = new Date(dateNow.getTime() - ELAPSED_QUERY_TIME_IN_SECONDS * 1000);
  console.log(queryTime.toUTCString());
  pullItems.getMostRecentTransition(queryTime).then(function (items) {
    console.log(items);
    setTimeout(getMostRecentZoneTransitions, ELAPSED_QUERY_TIME_IN_SECONDS * 1000);
  });

};

setTimeout(getMostRecentZoneTransitions, ELAPSED_QUERY_TIME_IN_SECONDS * 1000);


