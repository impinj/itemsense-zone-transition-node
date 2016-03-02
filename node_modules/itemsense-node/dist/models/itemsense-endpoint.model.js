/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemSenseEndpoint = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemSenseEndpoint = exports.ItemSenseEndpoint = function () {
  function ItemSenseEndpoint(entityInfo) {
    _classCallCheck(this, ItemSenseEndpoint);

    this._path = entityInfo.path;
  }

  _createClass(ItemSenseEndpoint, [{
    key: 'getRequestUrl',
    value: function getRequestUrl(requestType, id, queryParams) {
      var url = this._path + "/" + requestType.endpoint;
      if (id) {
        url += "/" + id;
      }
      if (queryParams) {
        url += "?" + _querystring2.default.stringify(queryParams);
      }
      console.log(url);
      return url;
    }
  }, {
    key: 'path',
    get: function get() {
      return this._path;
    }
  }, {
    key: 'requestTypes',
    get: function get() {
      return this._requestTypes;
    }
  }]);

  return ItemSenseEndpoint;
}();