/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemModel = require('../models/data/item.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemController = exports.ItemController = function () {
  function ItemController(itemsenseService) {
    _classCallCheck(this, ItemController);

    this.model = new _itemModel.Item();
    this.itemsenseService = itemsenseService;
  }

  _createClass(ItemController, [{
    key: 'get',
    value: function get(queryParams) {
      return this.itemsenseService.makeRequest(this.model, _itemModel.Item.requestTypes.GET, null, null, queryParams);
    }
  }, {
    key: 'getHistory',
    value: function getHistory(queryParams) {
      return this.itemsenseService.makeRequest(this.model, _itemModel.Item.requestTypes.HISTORY, null, null, queryParams);
    }
  }]);

  return ItemController;
}();