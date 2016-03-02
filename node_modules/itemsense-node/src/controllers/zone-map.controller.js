/**
 * Created by jcombopi on 2/26/16.
 */


'use strict';

import {ZoneMap} from '../models/coordinator/zone-map.model.js';


export class ZoneMapController {

  constructor(itemsenseService){
    this.model = new ZoneMap();
    this.itemsenseService = itemsenseService;
  }
  get(zoneMapName){
    return this.itemsenseService.makeRequest(this.model, ZoneMap.requestTypes.GET, null, zoneMapName );
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, ZoneMap.requestTypes.GET );
  }
  create(zoneMap){
    return this.itemsenseService.makeRequest(this.model, ZoneMap.requestTypes.CREATE, zoneMap );
  }
  update(zoneMap){
    return this.itemsenseService.makeRequest(this.model, ZoneMap.requestTypes.UPDATE, zoneMap );
  }
  delete(zoneMapName){
    return this.itemsenseService.makeRequest(this.model, ZoneMap.requestTypes.DELETE, null, zoneMapName );
  }







}