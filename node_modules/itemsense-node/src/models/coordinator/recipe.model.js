/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

const READER_TYPES = ['GATEWAY', 'XARRAY'];


export class Recipe extends ItemSenseEndpoint {

  constructor() {
    let path = '/configuration/v1/recipes';
    let endpointInfo = {path: path};

    super( endpointInfo);

  }

  static get zoneModel() {
    return {
      GEOGRAPHIC: 'GEOGRAPHIC',
      GATEWAY: 'GATEWAY'
    };
  }

  static get locationAggregationModel(){
    return {
      BY_TIME: 'BY_TIME',
      BY_CYCLES: 'BY_CYCLES'
    };
  }

  static get requestTypes() {
    return {
      GET: {
        endpoint: 'show',
        method: 'GET'
      },
      CREATE: {
        endpoint: 'create',
        method: 'POST'
      },
      UPDATE: {
        endpoint: 'createOrReplace',
        method: 'PUT'
      },
      DELETE: {
        endpoint: 'destroy',
        method: 'DELETE'
      }
    };
  }
}
