/**
 * Created by jcombopi on 2/26/16.
 */
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jobModel = require('../models/coordinator/job.model.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JobController = exports.JobController = function () {
  function JobController(itemsenseService) {
    _classCallCheck(this, JobController);

    this.model = new _jobModel.Job();
    this.itemsenseService = itemsenseService;
  }

  _createClass(JobController, [{
    key: 'get',
    value: function get(id) {
      return this.itemsenseService.makeRequest(this.model, _jobModel.Job.requestTypes.GET, null, id);
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.itemsenseService.makeRequest(this.model, _jobModel.Job.requestTypes.GET);
    }
  }, {
    key: 'start',
    value: function start(job) {
      return this.itemsenseService.makeRequest(this.model, _jobModel.Job.requestTypes.START, job);
    }
  }, {
    key: 'stop',
    value: function stop(id) {
      return this.itemsenseService.makeRequest(this.model, _jobModel.Job.requestTypes.STOP, null, id);
    }
  }, {
    key: 'stats',
    value: function stats(id) {
      return this.itemsenseService.makeRequest(this.model, _jobModel.Job.requestTypes.STATS, null, id);
    }
  }]);

  return JobController;
}();