/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

export class Authentication extends ItemSenseEndpoint{

  constructor(){
    let path = '/configuration/v1/tokens';
    let endpointInfo = {path: path};
    super(endpointInfo);
  }


  static get requestTypes(){
    return {
      GET:{
        endpoint:'',
        method: 'GET'
      },
      VALIDATE:{
        endpoint: 'validateToken',
        method: 'GET'
      },
      LIST:{
        endpoint: 'listTokens',
        method: 'GET'
      },
      REVOKE:{
        endpoint: 'destroy',
        method: 'PUT'
      }
    };
  }



}