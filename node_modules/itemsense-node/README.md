# itemsense-node
> A simple Node.js API-wrapper library for Impinj's ItemSense. <br/>
For more information about ItemSense, check out http://developer.impinj.com.

## Install
```bash
$ npm i itemsense-node --save
```

## Usage

  Each itemsense-node API request returns a promise that will resolve when the operation has been completed. For more information about promises, check out the npm package [request-promise](https://www.npmjs.com/package/request-promise ).



### Basic Usage
```javascript
var ItemSense = require('itemsense-node');	 //Require itemsense-node package to get started

var itemsenseConfig = {};  //Create itemsense config json object, or read one in
itemsenseConfig.username = 'admin';
itemsenseConfig.password = 'admindefault';
itemsenseConfig.itemsenseUrl = 'http://192.168.0.113/itemsense';

var itemsense = new ItemSense(itemsenseConfig); //Instantiate new ItemSense instance

//Run a sample request
itemsense.items.get().then(function(response){
  console.log(response);
});
```

### Table of Contents
1. <a href="#itemsenseConfig">ItemSense Configuration</a>
2. <a href="authToken">Authorization Tokens</a>
3. <a href="#users">Users</a>
4. <a href="#zoneMaps">Zone Maps </a>
5. <a href= "#currentZoneMap"> Current Zone Map </a>
6. <a href= "#readerDefinitions" >Reader Definitions </a>
7. <a href ="#readerConfigurations"> Reader Configurations </a>
8. <a href= "#jobs" >Jobs </a>
9. <a href= "#messageQueue">Message Queue </a>
10. <a href= "#items">Items </a>



### ItemSense Configuration 
<div id="itemsenseConfig" />
<table>
<thead>
<tr>
<td>
<b>Property</b>
</td>
<td>
<b>Description</b>
</td>
</tr>
</thead>
<tbody>
<tr>
  <td>
  itemsenseUrl
  </td>
  <td>
  The base URL for your itemsense instance. e.g. http://office.impinj.com/itemsense
  </td>
</tr>
<tr>
  <td>
  authToken
  </td>
  <td>
  The authorization token for your itemsense instance. Users have the option of either providing an auth token or username and password for itemsense credentials
  </td>
</tr>
<tr>
  <td>
  username
  </td>
  <td>
  The username for your itemsense credentials. This will be used to encode your requests with a basic auth header. This is optional if you are instead providing an authToken.
  </td>
</tr>
<tr>
  <td>
  password
</td>
  <td>
  The password for your itemsense credentials. This will be used to encode your requests with a basic auth header. This is optional if you are instead providing an authToken.
  </td>
</tr>
</tbody>

</table>

### Authorization Tokens

<div id="authToken" />

For information about token authentication, visit http://developer.impinj.com/itemsense/docs/api/#authentication

```javascript
itemsense.authorization.getToken() //creates a token based on basic auth credentials

itemsense.authorization.validateToken(id) //validates a specific token id

itemsense.authorization.getAllTokens(username) // retrieves all tokens available for a specific user

itemsense.authorization.revokeToken(token) // revokes a token 

itemsense.authorization.revokeAllTokens(username) // revokes all tokens available for a specific user


```

### Users

<div id="users" />

For information about users, visit http://developer.impinj.com/itemsense/docs/api/#users

```javascript

itemsense.users.get(username) // returns a user object based on username

itemsense.users.getAll() // returns all of the users for an itemsense instance

itemsense.users.create(user) // creates a user

itemsense.users.update(user) //updates a user

```
### Facilities

<div id="facilities" />

For information about facilities, visit http://developer.impinj.com/itemsense/docs/api/#facilities

```javascript
itemsense.facilities.get(facilityName) // returns a facility object based on the name

itemsense.facilities.getAll() // returns all of the facilities for an itemsense instance

itemsense.facilities.create(facility) // creates a facility

itemsense.facilities.update(facility) //updates a faciity
```


### Zone Maps

<div id="zoneMaps" />

For information about zone maps, visit http://developer.impinj.com/itemsense/docs/api/#zone-maps

```javascript
itemsense.zoneMaps.get(zoneMapName) // returns a zone map object based on the name

itemsense.zoneMaps.getAll() // returns all of the zone maps for an itemsense instance

itemsense.zoneMaps.create(zoneMap) // creates a zone map

itemsense.zoneMaps.update(zoneMap) //updates a zone map
```

### Current Zone Map

<div id="currentZoneMap" />

```javascript
itemsense.currentZoneMap.get(facilityName) // returns the current zonemap for a specific facility

itemsense.currentZoneMap.update(zoneMapName) // updates/sets the current zone map

itemsense.zoneMaps.clear(facilityName) // clears the current zone map value
```

### Reader Definitions

<div id="readerDefintions" />

For information about zone maps, visit http://developer.impinj.com/itemsense/docs/api/#reader-definitions

```javascript
itemsense.readerDefinitions.get(readerDefinitionName) // returns a reader definition object based on the name

itemsense.readerDefinitions.getAll() // returns all of the reader definitions for an itemsense instance

itemsense.readerDefinitions.create(readerDefinition) // creates a reader definition

itemsense.readerDefinitions.update(readerDefinition) //updates a reader definition

itemsense.readerDefinitions.delete(readerDefinitionName) //deletes a reader definition based on the name
```

### Reader Configurations

<div id="readerConfigurations" />

For information about zone maps, visit http://developer.impinj.com/itemsense/docs/api/#reader-configurations

```javascript
itemsense.readerConfigurations.get(readerConfigurationName) // returns a reader configuration object based on the name

itemsense.readerConfigurations.getAll() // returns all of the reader configurations for an itemsense instance

itemsense.readerConfigurations.create(readerConfiguration) // creates a reader configuration

itemsense.readerConfigurations.update(readerConfiguration) //updates a reader configuration

itemsense.readerConfigurations.delete(readerConfigurationName) //deletes a reader configuration based on the name
```


### Jobs

<div id="jobs" />

For information about jobs, visit http://developer.impinj.com/itemsense/docs/api/#jobs

```javascript
itemsense.jobs.get(jobId) // returns a job object based on the id

itemsense.jobs.getAll() // returns all of the jobs for an itemsense instance

itemsense.jobs.start(job) // starts a job

itemsense.jobs.stop(jobId) //stops a job based on the id

itemsense.jobs.stats(jobId) // retrieves the job stats for a specific job

```

### Message Queue

<div id="messageQueue" />

For information about message queues, visit http://developer.impinj.com/itemsense/docs/api/#message-queues

```javascript
itemsense.messageQueue.configure(messageQueue) // configures the message queue

```

### Items

<div id="items" />

For information about items, visit http://developer.impinj.com/itemsense/docs/api/#items

```javascript
itemsense.items.get(queryParams) // Retrieves items from ItemSense, takes in an option query param object

itemsense.items.getHistory(queryParams) // Retrieves item history records from ItemSense, takes in an optional query param object
```
