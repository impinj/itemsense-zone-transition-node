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
exports.ReaderDefinitionController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _readerDefinitionModel = require('../models/coordinator/reader-definition.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReaderDefinitionController = exports.ReaderDefinitionController = function () {
  function ReaderDefinitionController(itemsenseService) {
    _classCallCheck(this, ReaderDefinitionController);

    this.model = new _readerDefinitionModel.ReaderDefinition();
    this.itemsenseService = itemsenseService;
  }

  _createClass(ReaderDefinitionController, [{
    key: 'get',
    value: function get(readerDefinitionName) {
      return this.itemsenseService.makeRequest(this.model, _readerDefinitionModel.ReaderDefinition.requestTypes.GET, null, readerDefinitionName);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _readerDefinitionModel.ReaderDefinition.requestTypes.GET);
    }
  }, {
    key: 'create',
    value: function create(readerDefinition) {
      return this.itemsenseService.makeRequest(this.model, _readerDefinitionModel.ReaderDefinition.requestTypes.CREATE, readerDefinition);
    }
  }, {
    key: 'update',
    value: function update(readerDefinition) {
      return this.itemsenseService.makeRequest(this.model, _readerDefinitionModel.ReaderDefinition.requestTypes.UPDATE, readerDefinition);
    }
  }, {
    key: 'delete',
    value: function _delete(readerDefinitionName) {
      return this.itemsenseService.makeRequest(this.model, _readerDefinitionModel.ReaderDefinition.requestTypes.DELETE, null, readerDefinitionName);
    }
  }]);

  return ReaderDefinitionController;
}();