/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReaderDefinition = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _itemsenseEndpointModel = require('../itemsense-endpoint.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var READER_TYPES = ['GATEWAY', 'XARRAY'];

var ReaderDefinition = exports.ReaderDefinition = function (_ItemSenseEndpoint) {
  _inherits(ReaderDefinition, _ItemSenseEndpoint);

  function ReaderDefinition() {
    _classCallCheck(this, ReaderDefinition);

    var path = '/configuration/v1/readerDefinitions';
    var endpointInfo = { path: path };

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReaderDefinition).call(this, endpointInfo));
  }

  _createClass(ReaderDefinition, null, [{
    key: 'readerTypes',
    get: function get() {
      return {
        GATEWAY: 'GATEWAY',
        XARRAY: 'XARRAY'
      };
    }
  }, {
    key: 'requestTypes',
    get: function get() {
      return {
        GET: {
          endpoint: 'show',
          method: 'GET'
        },
        CREATE: {
          endpoint: 'create',
          method: 'POST'
        },
        UPDATE: {
          endpoint: 'createOrReplace',
          method: 'PUT'
        },
        DELETE: {
          endpoint: 'destroy',
          method: 'DELETE'
        }
      };
    }
  }, {
    key: 'scrambled28',
    get: function get() {
      return [45, 16, 35, 14, 49, 36, 2, 31, 18, 29, 48, 19, 46, 3, 33, 52, 15, 50, 13, 32, 1, 51, 30, 17, 47, 20, 34, 4];
    }
  }, {
    key: 'scrambled52',
    get: function get() {
      return [45, 16, 35, 6, 41, 28, 47, 18, 29, 8, 43, 22, 4, 49, 20, 31, 10, 37, 24, 51, 14, 33, 12, 39, 26, 2, 13, 32, 11, 38, 25, 52, 15, 34, 5, 40, 27, 46, 1, 17, 36, 7, 42, 21, 48, 19, 30, 9, 44, 23, 50, 3];
    }
  }]);

  return ReaderDefinition;
}(_itemsenseEndpointModel.ItemSenseEndpoint);