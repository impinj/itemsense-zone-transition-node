/**
 * Created by jcombopi on 2/25/16.
 */

import {ItemsenseApiService} from './services/itemsense-api.service.js';
import {AuthenticationController} from './controllers/authentication.controller.js';
import {CurrentZoneMapController} from './controllers/current-zone-map.controller.js';
import {FacilityController} from './controllers/facility.controller.js';
import {JobController} from './controllers/job.controller.js';
import {ReaderConfigurationController} from './controllers/reader-configuration.controller.js';
import {ReaderDefinitionController} from './controllers/reader-definition.controller.js';
import {RecipeController} from './controllers/recipe.controller.js';
import {UserController} from './controllers/user.controller.js';
import {ZoneMapController} from './controllers/zone-map.controller.js';
import {ItemController} from './controllers/item.controller.js';
import {MessageQueueController} from './controllers/message-queue.controller.js';


export class ItemSense {

  constructor(itemSenseConfig) {
    this._itemsenseConfig = itemSenseConfig;
    this._itemsenseService = new ItemsenseApiService(this);
    this._wm = new Map();
    //controllers for client
    this._wm.set('authenticationController', new AuthenticationController(this._itemsenseService));
    this._wm.set('currentZoneMapController', new CurrentZoneMapController(this._itemsenseService));
    this._wm.set('facilityController', new FacilityController(this._itemsenseService));
    this._wm.set('jobController',  new JobController(this._itemsenseService));
    this._wm.set('readerConfigurationController', new ReaderConfigurationController(this._itemsenseService));
    this._wm.set('readerDefinitionController', new ReaderDefinitionController(this._itemsenseService));
    this._wm.set('recipeController', new RecipeController(this._itemsenseService));
    this._wm.set('userController', new UserController(this._itemsenseService));
    this._wm.set('zoneMapController', new ZoneMapController(this._itemsenseService));
    this._wm.set('itemController', new ItemController(this._itemsenseService));
    this._wm.set('messageQueueController', new MessageQueueController(this._itemsenseService));
  }
  get itemsenseUrl() {
    return this._itemsenseConfig.itemsenseUrl;
  }

  get authorizationHeader() {
    return "Basic " + new Buffer(this._itemsenseConfig.username + ":" + this._itemsenseConfig.password, "utf8").toString("base64");
  }

  get authentication(){
    return this._wm.get('authenticationController');
  }
  get currentZoneMap(){
    return this._wm.get('currentZoneMapController');
  }
  get facilities(){
    return this._wm.get('facilityController');
  }
  get jobs(){
    return this._wm.get('jobController');
  }
  get readerConfigurations(){
    return this._wm.get('readerConfigurationController');
  }
  get readerDefinitions(){
    return this._wm.get('readerDefinitionController');
  }
  get recipes(){
    return this._wm.get('recipeController');
  }
  get users(){
    return this._wm.get('userController');
  }
  get zoneMaps(){
    return this._wm.get('zoneMapController');
  }
  get items(){
    return this._wm.get('itemController');
  }
  get messageQueue(){
    return this._wm.get('messageQueueController');
  }

}

module.exports = ItemSense;