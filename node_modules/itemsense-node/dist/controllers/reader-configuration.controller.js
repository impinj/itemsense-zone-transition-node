/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReaderConfigurationController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _readerConfigurationModel = require('../models/coordinator/reader-configuration.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReaderConfigurationController = exports.ReaderConfigurationController = function () {
  function ReaderConfigurationController(itemsenseService) {
    _classCallCheck(this, ReaderConfigurationController);

    this.model = new _readerConfigurationModel.ReaderConfiguration();
    this.itemsenseService = itemsenseService;
  }

  _createClass(ReaderConfigurationController, [{
    key: 'get',
    value: function get(readerConfigurationName) {
      return this.itemsenseService.makeRequest(this.model, _readerConfigurationModel.ReaderConfiguration.requestTypes.GET, null, readerConfigurationName);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _readerConfigurationModel.ReaderConfiguration.requestTypes.GET);
    }
  }, {
    key: 'create',
    value: function create(readerConfiguration) {
      return this.itemsenseService.makeRequest(this.model, _readerConfigurationModel.ReaderConfiguration.requestTypes.CREATE, readerConfiguration);
    }
  }, {
    key: 'update',
    value: function update(readerConfiguration) {
      return this.itemsenseService.makeRequest(this.model, _readerConfigurationModel.ReaderConfiguration.requestTypes.UPDATE, readerConfiguration);
    }
  }, {
    key: 'delete',
    value: function _delete(readerConfigurationName) {
      return this.itemsenseService.makeRequest(this.model, _readerConfigurationModel.ReaderConfiguration.requestTypes.DELETE, null, readerConfigurationName);
    }
  }]);

  return ReaderConfigurationController;
}();