/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageQueueController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messageQueueModel = require('../models/data/message-queue.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageQueueController = exports.MessageQueueController = function () {
  function MessageQueueController(itemsenseService) {
    _classCallCheck(this, MessageQueueController);

    this.model = new _messageQueueModel.MessageQueue();
    this.itemsenseService = itemsenseService;
  }

  _createClass(MessageQueueController, [{
    key: 'configure',
    value: function configure(messageQueue) {
      return this.itemsenseService.makeRequest(this.model, _messageQueueModel.MessageQueue.requestTypes.CONFIGURE, messageQueue);
    }
  }]);

  return MessageQueueController;
}();