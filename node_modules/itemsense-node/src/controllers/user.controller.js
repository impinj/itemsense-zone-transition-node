/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/26/16.
 */
/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import {User} from '../models/coordinator/user.model.js';


export class UserController {

  constructor(itemsenseService){
    this.model = new User();
    this.itemsenseService = itemsenseService;
  }
  get(username){
    return this.itemsenseService.makeRequest(this.model, User.requestTypes.GET, null, username );
  }
  getAll(){
    return this.itemsenseService.makeRequest(this.model, User.requestTypes.GET );
  }
  create(user){
    return this.itemsenseService.makeRequest(this.model, User.requestTypes.CREATE, user );
  }
  update(user){
    return this.itemsenseService.makeRequest(this.model, User.requestTypes.UPDATE, user );
  }
  delete(username){
    return this.itemsenseService.makeRequest(this.model, User.requestTypes.DELETE, null, username );
  }




}