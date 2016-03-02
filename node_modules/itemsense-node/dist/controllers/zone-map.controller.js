/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoneMapController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _zoneMapModel = require('../models/coordinator/zone-map.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ZoneMapController = exports.ZoneMapController = function () {
  function ZoneMapController(itemsenseService) {
    _classCallCheck(this, ZoneMapController);

    this.model = new _zoneMapModel.ZoneMap();
    this.itemsenseService = itemsenseService;
  }

  _createClass(ZoneMapController, [{
    key: 'get',
    value: function get(zoneMapName) {
      return this.itemsenseService.makeRequest(this.model, _zoneMapModel.ZoneMap.requestTypes.GET, null, zoneMapName);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _zoneMapModel.ZoneMap.requestTypes.GET);
    }
  }, {
    key: 'create',
    value: function create(zoneMap) {
      return this.itemsenseService.makeRequest(this.model, _zoneMapModel.ZoneMap.requestTypes.CREATE, zoneMap);
    }
  }, {
    key: 'update',
    value: function update(zoneMap) {
      return this.itemsenseService.makeRequest(this.model, _zoneMapModel.ZoneMap.requestTypes.UPDATE, zoneMap);
    }
  }, {
    key: 'delete',
    value: function _delete(zoneMapName) {
      return this.itemsenseService.makeRequest(this.model, _zoneMapModel.ZoneMap.requestTypes.DELETE, null, zoneMapName);
    }
  }]);

  return ZoneMapController;
}();