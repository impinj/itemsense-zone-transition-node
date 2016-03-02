'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemsenseApiService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by jcombopi on 2/25/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _itemsenseEndpointModel = require('../models/itemsense-endpoint.model.js');

var _itemsenseEndpointModel2 = _interopRequireDefault(_itemsenseEndpointModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemsenseApiService = exports.ItemsenseApiService = function () {
  function ItemsenseApiService(itemsenseConfig) {
    _classCallCheck(this, ItemsenseApiService);

    this._itemsenseConfig = itemsenseConfig;
    this.itemsenseRequest = _requestPromise2.default.defaults({
      headers: { 'Authorization': itemsenseConfig.authorizationHeader },
      baseUrl: itemsenseConfig.itemsenseUrl,
      json: true
    });
  }

  _createClass(ItemsenseApiService, [{
    key: 'makeRequest',
    value: function makeRequest(itemsenseModel, requestType, body, id, queryParams) {
      var options = {};
      console.log(this._itemsenseConfig.itemsenseUrl);
      options.url = itemsenseModel.getRequestUrl(requestType, id, queryParams);
      options.method = requestType.method;
      if (body) {
        options.body = body;
      }
      return this.itemsenseRequest(options);
    }
  }]);

  return ItemsenseApiService;
}();