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
exports.RecipeController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _recipeModel = require('../models/coordinator/recipe.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecipeController = exports.RecipeController = function () {
  function RecipeController(itemsenseService) {
    _classCallCheck(this, RecipeController);

    this.model = new _recipeModel.Recipe();
    this.itemsenseService = itemsenseService;
  }

  _createClass(RecipeController, [{
    key: 'get',
    value: function get(recipeName) {
      return this.itemsenseService.makeRequest(this.model, _recipeModel.Recipe.requestTypes.GET, null, recipeName);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _recipeModel.Recipe.requestTypes.GET);
    }
  }, {
    key: 'create',
    value: function create(recipe) {
      return this.itemsenseService.makeRequest(this.model, _recipeModel.Recipe.requestTypes.CREATE, recipe);
    }
  }, {
    key: 'update',
    value: function update(recipe) {
      return this.itemsenseService.makeRequest(this.model, _recipeModel.Recipe.requestTypes.UPDATE, recipe);
    }
  }, {
    key: 'delete',
    value: function _delete(recipeName) {
      return this.itemsenseService.makeRequest(this.model, _recipeModel.Recipe.requestTypes.DELETE, null, recipeName);
    }
  }]);

  return RecipeController;
}();