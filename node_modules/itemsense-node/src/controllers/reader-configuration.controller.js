/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import {ReaderConfiguration} from '../models/coordinator/reader-configuration.model.js';


export class ReaderConfigurationController {

  constructor(itemsenseService){
    this.model = new ReaderConfiguration();
    this.itemsenseService = itemsenseService;
  }
  get(readerConfigurationName){
    return this.itemsenseService.makeRequest(this.model, ReaderConfiguration.requestTypes.GET, null, readerConfigurationName );
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, ReaderConfiguration.requestTypes.GET );
  }
  create(readerConfiguration){
    return this.itemsenseService.makeRequest(this.model, ReaderConfiguration.requestTypes.CREATE, readerConfiguration );
  }
  update(readerConfiguration){
    return this.itemsenseService.makeRequest(this.model, ReaderConfiguration.requestTypes.UPDATE, readerConfiguration );
  }
  delete(readerConfigurationName){
    return this.itemsenseService.makeRequest(this.model, ReaderConfiguration.requestTypes.DELETE, null, readerConfigurationName );
  }




}