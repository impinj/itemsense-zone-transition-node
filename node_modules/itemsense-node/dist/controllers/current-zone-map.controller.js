/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentZoneMapController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _currentZoneMapModel = require('../models/coordinator/current-zone-map.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurrentZoneMapController = exports.CurrentZoneMapController = function () {
  function CurrentZoneMapController(itemsenseService) {
    _classCallCheck(this, CurrentZoneMapController);

    this.model = new _currentZoneMapModel.CurrentZoneMap();
    this.itemsenseService = itemsenseService;
  }

  _createClass(CurrentZoneMapController, [{
    key: 'get',
    value: function get(facilityName) {
      return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.GET, null, facilityName);
    }
  }, {
    key: 'update',
    value: function update(zoneMapName) {
      return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.UPDATE, null, zoneMapName);
    }
  }, {
    key: 'clear',
    value: function clear(facilityName) {
      return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.DELETE, null, facilityName);
    }
  }]);

  return CurrentZoneMapController;
}();