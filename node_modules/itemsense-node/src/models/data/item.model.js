/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

export class Item extends ItemSenseEndpoint{

  constructor(){
    let path = '/data/v1/items';
    let endpointInfo = {path: path };
    super(endpointInfo);
  }


  static get requestTypes(){
    return {
      GET:{
        endpoint:'show',
        method: 'GET'
      },
      HISTORY:{
        endpoint: 'show/history',
        method: 'GET'
      }
    };
  }



}