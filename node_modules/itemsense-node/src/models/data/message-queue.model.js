/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';


import {ItemSenseEndpoint} from '../itemsense-endpoint.model.js';

export class MessageQueue extends ItemSenseEndpoint{

  constructor(){
    let path = '/data/v1/messageQueues/zoneTransition';
    let endpointInfo = {path: path };
    super(endpointInfo);
  }


  static get requestTypes(){
    return {
      CONFIGURE:{
        endpoint:'configure',
        method: 'POST'
      }
    };
  }



}