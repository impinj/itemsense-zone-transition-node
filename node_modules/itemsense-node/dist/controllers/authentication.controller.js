/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authenticationModel = require('../models/coordinator/authentication.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticationController = exports.AuthenticationController = function () {
  function AuthenticationController(itemsenseService) {
    _classCallCheck(this, AuthenticationController);

    this.model = new _authenticationModel.Authentication();
    this.itemsenseService = itemsenseService;
  }

  _createClass(AuthenticationController, [{
    key: 'getToken',
    value: function getToken() {
      return this.itemsenseService.makeRequest(this.model, _authenticationModel.Authentication.requestTypes.GET, null);
    }
  }, {
    key: 'validateToken',
    value: function validateToken(id) {
      return this.itemsenseService.makeRequest(this.model, _authenticationModel.Authentication.requestTypes.VALIDATE, null, id);
    }
  }, {
    key: 'getAllTokens',
    value: function getAllTokens(username) {
      return this.itemsenseService.makeRequest(this.model, _authenticationModel.Authentication.requestTypes.LIST, null, username);
    }
  }, {
    key: 'revokeToken',
    value: function revokeToken(token) {
      return this.itemsenseService.makeRequest(this.model, _authenticationModel.Authentication.requestTypes.REVOKE, token);
    }
  }, {
    key: 'revokeAllTokens',
    value: function revokeAllTokens(username) {
      return this.itemsenseService.makeRequest(this.model, _authenticationModel.Authentication.requestTypes.REVOKE, null, username);
    }
  }]);

  return AuthenticationController;
}();