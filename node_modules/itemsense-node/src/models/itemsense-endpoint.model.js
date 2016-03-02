/**
 * Created by jcombopi on 2/25/16.
 */

'use strict';

import querystring from 'querystring';

export class ItemSenseEndpoint{

  constructor(entityInfo){
    this._path = entityInfo.path;

  }

  get path(){
    return this._path;
  }
  get requestTypes(){
    return this._requestTypes;
  }

  getRequestUrl( requestType, id, queryParams){
    let url = this._path + "/" + requestType.endpoint;
    if(id){
      url += "/" + id;
    }
    if(queryParams){
      url += "?" + querystring.stringify(queryParams);
    }
    console.log(url);
    return url;
  }

}