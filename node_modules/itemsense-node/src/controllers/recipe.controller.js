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

import {Recipe} from '../models/coordinator/recipe.model.js';


export class RecipeController {

  constructor(itemsenseService){
    this.model = new Recipe();
    this.itemsenseService = itemsenseService;
  }
  get(recipeName){
    return this.itemsenseService.makeRequest(this.model, Recipe.requestTypes.GET, null, recipeName );
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, Recipe.requestTypes.GET );
  }
  create(recipe){
    return this.itemsenseService.makeRequest(this.model, Recipe.requestTypes.CREATE, recipe );
  }
  update(recipe){
    return this.itemsenseService.makeRequest(this.model, Recipe.requestTypes.UPDATE, recipe );
  }
  delete(recipeName){
    return this.itemsenseService.makeRequest(this.model, Recipe.requestTypes.DELETE, null, recipeName );
  }




}