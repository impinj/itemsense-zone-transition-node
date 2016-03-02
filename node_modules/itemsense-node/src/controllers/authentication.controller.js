/**
 * Created by jcombopi on 2/26/16.
 */
'use strict';

import {Authentication} from '../models/coordinator/authentication.model.js';



export class AuthenticationController {

  constructor(itemsenseService) {
    this.model = new Authentication();
    this.itemsenseService = itemsenseService;
  }

  getToken() {
    return this.itemsenseService.makeRequest(this.model, Authentication.requestTypes.GET, null);
  }

  validateToken(id) {
    return this.itemsenseService.makeRequest(this.model, Authentication.requestTypes.VALIDATE, null, id);
  }

  getAllTokens(username) {
    return this.itemsenseService.makeRequest(this.model, Authentication.requestTypes.LIST, null, username);
  }

  revokeToken(token) {
    return this.itemsenseService.makeRequest(this.model, Authentication.requestTypes.REVOKE, token);
  }

  revokeAllTokens(username) {
    return this.itemsenseService.makeRequest(this.model, Authentication.requestTypes.REVOKE, null, username);
  }
}