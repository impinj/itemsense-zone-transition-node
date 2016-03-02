/**
 * Created by jcombopi on 2/25/16.
 */
/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

export class User extends ItemSenseEndpoint{

  constructor(){
    let path = '/configuration/v1/users';
    let endpointInfo = { path: path};


    super( endpointInfo );

  }

  static get roles(){
    return ['Admin','ConfigManager', 'DataManager', 'JobRunner'];
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

}