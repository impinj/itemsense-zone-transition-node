/**
 * Created by jcombopi on 2/26/16.
 */

'use strict';

import {MessageQueue} from '../models/data/message-queue.model.js';


export class MessageQueueController {

  constructor(itemsenseService) {
    this.model = new MessageQueue();
    this.itemsenseService = itemsenseService;
  }
  configure(messageQueue){
    return this.itemsenseService.makeRequest(this.model, MessageQueue.requestTypes.CONFIGURE, messageQueue );
  }





}