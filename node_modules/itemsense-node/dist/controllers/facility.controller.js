/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacilityController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _facilityModel = require('../models/coordinator/facility.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FacilityController = exports.FacilityController = function () {
  function FacilityController(itemsenseService) {
    _classCallCheck(this, FacilityController);

    this.model = new _facilityModel.Facility();
    this.itemsenseService = itemsenseService;
  }

  _createClass(FacilityController, [{
    key: 'get',
    value: function get(facilityName) {
      return this.itemsenseService.makeRequest(this.model, _facilityModel.Facility.requestTypes.GET, null, facilityName);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _facilityModel.Facility.requestTypes.GET);
    }
  }, {
    key: 'create',
    value: function create(facility) {
      return this.itemsenseService.makeRequest(this.model, _facilityModel.Facility.requestTypes.CREATE, facility);
    }
  }, {
    key: 'update',
    value: function update(facility) {
      return this.itemsenseService.makeRequest(this.model, _facilityModel.Facility.requestTypes.UPDATE, facility);
    }
  }, {
    key: 'delete',
    value: function _delete(facilityName) {
      return this.itemsenseService.makeRequest(this.model, _facilityModel.Facility.requestTypes.DELETE, null, facilityName);
    }
  }]);

  return FacilityController;
}();