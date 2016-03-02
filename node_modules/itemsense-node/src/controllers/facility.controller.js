/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

import {Facility} from '../models/coordinator/facility.model.js';


export class FacilityController {

  constructor(itemsenseService){
    this.model = new Facility();
    this.itemsenseService = itemsenseService;
  }
  get(facilityName){
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.GET, null, facilityName );
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.GET );
  }
  create(facility){
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.CREATE, facility );
  }
  update(facility){
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.UPDATE, facility );
  }
  delete(facilityName){
    return this.itemsenseService.makeRequest(this.model, Facility.requestTypes.DELETE, null, facilityName );
  }




}