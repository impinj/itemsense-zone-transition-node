/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';


export class ReaderConfiguration extends ItemSenseEndpoint {

  constructor(){
    let path = '/configuration/v1/readerConfigurations';
    let endpointInfo = { path: path};

    super( endpointInfo );

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

  static get readerModes(){
    return {
      MAX_THROUGHPUT: 'MAX_THROUGHPUT',
      HYBRID: 'HYBRID',
      DENSE_READER_M4: 'DENSE_READER_M4',
      DENSE_READER_M8: 'DENSE_READER_M8',
      MAX_MILLER: 'MAX_MILLER',
      DENSE_READER_M4_TWO: 'DENSE_READER_M4_TWO',
      AUTOSET_DENSE_READER: 'AUTOSET_DENSE_READER',
      MODE_1002: 'MODE_1002'
    };
  }

  static get searchModes(){
    return {
      READER_SELECTED: 'READER_SELECTED',
      SINGLE_TARGET: 'SINGLE_TARGET',
      DUAL_TARGET: 'DUAL_TARGET',
      TAG_FOCUS: 'TAG_FOCUS'
    };
  }

  static get operations(){
   return {
     NORMAL: 'NORMAL',
     DO_NOTHING: 'DO_NOTHING'
   };
  }
}

