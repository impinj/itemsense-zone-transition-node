/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';



export class CurrentZoneMap extends ItemSenseEndpoint{


  constructor(){
    let path = '/control/v1/currentZoneMap';
    let endpointInfo = {path: path };
    super(endpointInfo);
  }
  static get requestTypes(){
    return {
      GET:{
        endpoint:'show',
        method: 'GET'
      },
      UPDATE:{
        endpoint: 'clear',
        method: 'PUT'
      },
      DELETE:{
        endpoint: 'destroy',
        method: 'DELETE'
      }
    };
  }
}