/**
 * Created by jcombopi on 2/26/16.
 */
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
exports.UserController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userModel = require('../models/coordinator/user.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = exports.UserController = function () {
  function UserController(itemsenseService) {
    _classCallCheck(this, UserController);

    this.model = new _userModel.User();
    this.itemsenseService = itemsenseService;
  }

  _createClass(UserController, [{
    key: 'get',
    value: function get(username) {
      return this.itemsenseService.makeRequest(this.model, _userModel.User.requestTypes.GET, null, username);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _userModel.User.requestTypes.GET);
    }
  }, {
    key: 'create',
    value: function create(user) {
      return this.itemsenseService.makeRequest(this.model, _userModel.User.requestTypes.CREATE, user);
    }
  }, {
    key: 'update',
    value: function update(user) {
      return this.itemsenseService.makeRequest(this.model, _userModel.User.requestTypes.UPDATE, user);
    }
  }, {
    key: 'delete',
    value: function _delete(username) {
      return this.itemsenseService.makeRequest(this.model, _userModel.User.requestTypes.DELETE, null, username);
    }
  }]);

  return UserController;
}();