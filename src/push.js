var ItemSense = require('itemsense-node');
var itemsenseConfig = require('../itemsense-config.json');
var amqp = require('amqp');
var q = require('q');
var itemsense = new ItemSense(itemsenseConfig);



var attachMessageListener = function(queueConfig, messageHandler){
  console.log("Connection ready, starting queue listener");
  var defer = q.defer();
  queueConfig.connection.queue(queueConfig.queue, {
    durable: true,
    noDeclare: true,
    arguments: {"x-expires": 3600000, "x-message-ttl": 3600000, "x-max-length-bytes": 1073741824}
  }, function (queue) {
      console.log("queue ready, listening for messages");
       queue.subscribe(function(msg) {
         messageHandler(JSON.parse(msg.data));
       });


    }
  );
};



function createQueueConnection(queueConfig, messageHandler) {
  console.log('creating queue connection');
  queueConfig.connection = amqp.createConnection({
    url: queueConfig.serverUrl,
    login: itemsenseConfig.username,
    password: itemsenseConfig.password
  }, {reconnect: false});

  return queueConfig;
}


var configureQueue = function(fromZone, toZone, messageHandler){

  var messageQueue = {fromZone: fromZone, toZone: toZone};
  itemsense.messageQueue.configure(messageQueue).then(function(queueConfig){
    console.log('queue created');
    createQueueConnection(queueConfig);
    queueConfig.connection.on('ready', function(){
      console.log('connection is ready, attach message listener');
      attachMessageListener(queueConfig, messageHandler);
    });

    queueConfig.connection.on("error", function (err) {
     console.log(err);
    });

  });

};

module.exports = configureQueue;

