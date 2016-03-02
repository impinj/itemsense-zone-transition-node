/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import {ReaderDefinition}  from '../models/coordinator/reader-definition.model.js';


export class ReaderDefinitionController {

  constructor(itemsenseService){
    this.model = new ReaderDefinition();
    this.itemsenseService = itemsenseService;
  }
  get(readerDefinitionName){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.GET, null, readerDefinitionName );
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.GET );
  }
  create(readerDefinition){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.CREATE, readerDefinition );
  }
  update(readerDefinition){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.UPDATE, readerDefinition );
  }
  delete(readerDefinitionName){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.DELETE, null, readerDefinitionName );
  }




}