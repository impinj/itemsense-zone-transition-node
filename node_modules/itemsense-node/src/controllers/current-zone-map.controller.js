/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

import {CurrentZoneMap} from '../models/coordinator/current-zone-map.model.js';



export class CurrentZoneMapController {

  constructor(itemsenseService){
    this.model = new CurrentZoneMap();
    this.itemsenseService = itemsenseService;
  }
  get(facilityName){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.GET, null, facilityName );
  }

  update(zoneMapName){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.UPDATE,null, zoneMapName );
  }

  clear(facilityName){
    return this.itemsenseService.makeRequest(this.model, ReaderDefinition.requestTypes.DELETE, null, facilityName );
  }




}