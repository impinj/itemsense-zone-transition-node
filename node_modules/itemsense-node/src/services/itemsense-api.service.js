/**
 * Created by jcombopi on 2/25/16.
 */


import request from 'request-promise';
import ItemsenseEndpoint from '../models/itemsense-endpoint.model.js';

export class ItemsenseApiService{

  constructor(itemsenseConfig){
    this._itemsenseConfig = itemsenseConfig;
    this.itemsenseRequest =  request.defaults({
      headers: {'Authorization': itemsenseConfig.authorizationHeader},
      baseUrl: itemsenseConfig.itemsenseUrl,
      json: true
    });
  }

  makeRequest(itemsenseModel, requestType, body, id, queryParams){
    let options = {};
    console.log(this._itemsenseConfig.itemsenseUrl);
    options.url =   itemsenseModel.getRequestUrl(requestType, id, queryParams);
    options.method = requestType.method;
    if(body){
      options.body = body;
    }
    return this.itemsenseRequest(options);
  }

}

