/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentZoneMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemsenseEndpointModel = require('../itemsense-endpoint.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentZoneMap = exports.CurrentZoneMap = function (_ItemSenseEndpoint) {
  _inherits(CurrentZoneMap, _ItemSenseEndpoint);

  function CurrentZoneMap() {
    _classCallCheck(this, CurrentZoneMap);

    var path = '/control/v1/currentZoneMap';
    var endpointInfo = { path: path };
    return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentZoneMap).call(this, endpointInfo));
  }

  _createClass(CurrentZoneMap, null, [{
    key: 'requestTypes',
    get: function get() {
      return {
        GET: {
          endpoint: 'show',
          method: 'GET'
        },
        UPDATE: {
          endpoint: 'clear',
          method: 'PUT'
        },
        DELETE: {
          endpoint: 'destroy',
          method: 'DELETE'
        }
      };
    }
  }]);

  return CurrentZoneMap;
}(_itemsenseEndpointModel.ItemSenseEndpoint);