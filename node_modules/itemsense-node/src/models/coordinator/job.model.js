/**
 * Created by jcombopi on 2/25/16.
 */
/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

export class Job extends ItemSenseEndpoint{

  constructor(){
    let path = '/control/v1/jobs';
    let endpointInfo = {path: path };
    super( endpointInfo);
  }


  static get requestTypes(){
    return {
      START:{
        endpoint:'start',
        method: 'POST'
      },
      STOP:{
        endpoint: 'stop',
        method: 'POST'
      },
      GET:{
        endpoint: 'show',
        method: 'GET'
      },
      STATS:{
        endpoint: 'stats',
        method: 'GET'
      }
    };
  }



}