/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authentication = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemsenseEndpointModel = require('../itemsense-endpoint.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authentication = exports.Authentication = function (_ItemSenseEndpoint) {
  _inherits(Authentication, _ItemSenseEndpoint);

  function Authentication() {
    _classCallCheck(this, Authentication);

    var path = '/configuration/v1/tokens';
    var endpointInfo = { path: path };
    return _possibleConstructorReturn(this, Object.getPrototypeOf(Authentication).call(this, endpointInfo));
  }

  _createClass(Authentication, null, [{
    key: 'requestTypes',
    get: function get() {
      return {
        GET: {
          endpoint: '',
          method: 'GET'
        },
        VALIDATE: {
          endpoint: 'validateToken',
          method: 'GET'
        },
        LIST: {
          endpoint: 'listTokens',
          method: 'GET'
        },
        REVOKE: {
          endpoint: 'destroy',
          method: 'PUT'
        }
      };
    }
  }]);

  return Authentication;
}(_itemsenseEndpointModel.ItemSenseEndpoint);