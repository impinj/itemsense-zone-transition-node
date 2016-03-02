/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

import {Item} from '../models/data/item.model.js';


export class ItemController {

  constructor(itemsenseService) {
    this.model = new Item();
    this.itemsenseService = itemsenseService;
  }
  get(queryParams){
    return this.itemsenseService.makeRequest(this.model, Item.requestTypes.GET, null, null, queryParams );
  }
  getHistory(queryParams){
    return this.itemsenseService.makeRequest(this.model, Item.requestTypes.HISTORY, null, null, queryParams );
  }




}