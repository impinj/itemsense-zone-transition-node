'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemSense = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by jcombopi on 2/25/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _itemsenseApiService = require('./services/itemsense-api.service.js');

var _authenticationController = require('./controllers/authentication.controller.js');

var _currentZoneMapController = require('./controllers/current-zone-map.controller.js');

var _facilityController = require('./controllers/facility.controller.js');

var _jobController = require('./controllers/job.controller.js');

var _readerConfigurationController = require('./controllers/reader-configuration.controller.js');

var _readerDefinitionController = require('./controllers/reader-definition.controller.js');

var _recipeController = require('./controllers/recipe.controller.js');

var _userController = require('./controllers/user.controller.js');

var _zoneMapController = require('./controllers/zone-map.controller.js');

var _itemController = require('./controllers/item.controller.js');

var _messageQueueController = require('./controllers/message-queue.controller.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ItemSense = exports.ItemSense = function () {
  function ItemSense(itemSenseConfig) {
    _classCallCheck(this, ItemSense);

    this._itemsenseConfig = itemSenseConfig;
    this._itemsenseService = new _itemsenseApiService.ItemsenseApiService(this);
    this._wm = new Map();
    //controllers for client
    this._wm.set('authenticationController', new _authenticationController.AuthenticationController(this._itemsenseService));
    this._wm.set('currentZoneMapController', new _currentZoneMapController.CurrentZoneMapController(this._itemsenseService));
    this._wm.set('facilityController', new _facilityController.FacilityController(this._itemsenseService));
    this._wm.set('jobController', new _jobController.JobController(this._itemsenseService));
    this._wm.set('readerConfigurationController', new _readerConfigurationController.ReaderConfigurationController(this._itemsenseService));
    this._wm.set('readerDefinitionController', new _readerDefinitionController.ReaderDefinitionController(this._itemsenseService));
    this._wm.set('recipeController', new _recipeController.RecipeController(this._itemsenseService));
    this._wm.set('userController', new _userController.UserController(this._itemsenseService));
    this._wm.set('zoneMapController', new _zoneMapController.ZoneMapController(this._itemsenseService));
    this._wm.set('itemController', new _itemController.ItemController(this._itemsenseService));
    this._wm.set('messageQueueController', new _messageQueueController.MessageQueueController(this._itemsenseService));
  }

  _createClass(ItemSense, [{
    key: 'itemsenseUrl',
    get: function get() {
      return this._itemsenseConfig.itemsenseUrl;
    }
  }, {
    key: 'authorizationHeader',
    get: function get() {
      return "Basic " + new Buffer(this._itemsenseConfig.username + ":" + this._itemsenseConfig.password, "utf8").toString("base64");
    }
  }, {
    key: 'authentication',
    get: function get() {
      return this._wm.get('authenticationController');
    }
  }, {
    key: 'currentZoneMap',
    get: function get() {
      return this._wm.get('currentZoneMapController');
    }
  }, {
    key: 'facilities',
    get: function get() {
      return this._wm.get('facilityController');
    }
  }, {
    key: 'jobs',
    get: function get() {
      return this._wm.get('jobController');
    }
  }, {
    key: 'readerConfigurations',
    get: function get() {
      return this._wm.get('readerConfigurationController');
    }
  }, {
    key: 'readerDefinitions',
    get: function get() {
      return this._wm.get('readerDefinitionController');
    }
  }, {
    key: 'recipes',
    get: function get() {
      return this._wm.get('recipeController');
    }
  }, {
    key: 'users',
    get: function get() {
      return this._wm.get('userController');
    }
  }, {
    key: 'zoneMaps',
    get: function get() {
      return this._wm.get('zoneMapController');
    }
  }, {
    key: 'items',
    get: function get() {
      return this._wm.get('itemController');
    }
  }, {
    key: 'messageQueue',
    get: function get() {
      return this._wm.get('messageQueueController');
    }
  }]);

  return ItemSense;
}();

module.exports = ItemSense;