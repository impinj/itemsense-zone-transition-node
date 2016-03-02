/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

const READER_TYPES = ['GATEWAY', 'XARRAY'];


export class ReaderDefinition extends ItemSenseEndpoint{

  constructor(){
    let path = '/configuration/v1/readerDefinitions';
    let endpointInfo = { path: path};

    super( endpointInfo );

  }

  static get readerTypes(){
    return  {
      GATEWAY: 'GATEWAY',
      XARRAY:'XARRAY'
    };
  }

  static get requestTypes(){
    return {
      GET:{
        endpoint:'show',
        method: 'GET'
      },
      CREATE:{
        endpoint: 'create',
        method: 'POST'
      },
      UPDATE:{
        endpoint: 'createOrReplace',
        method: 'PUT'
      },
      DELETE:{
        endpoint: 'destroy',
        method: 'DELETE'
      }
    };
  }

  static get scrambled28(){
    return [
      45,16,35,14,49,
      36,2,31,18,29,
      48,19,46,3,33,
      52,15,50,13,32,
      1,51,30,17,47,
      20,34,4
    ];
  }
  static get scrambled52(){
    return [
      45,16,35,6,41,
      28,47,18,29,8,
      43,22,4,49,20,
      31,10,37,24,51,
      14,33,12,39,26,
      2,13,32,11,38,
      25,52,15,34,5,
      40,27,46,1,17,
      36,7,42,21,48,
      19,30,9,44,23,
      50,3
    ];
  }

}