'use strict';

var request;
var defaults = {};

module.exports.create = function(config) {
	return {
		init: function(opts) {
			request = opts.request;
			return null;
		},

		set: function(data) {
			var ch = data.challenge;
			// console.info('Add Key Auth URL', data);
			throw Error('setting key authorization not implemented');
		},

		remove: function(data) {
			var ch = data.challenge;
			// console.info('Remove Key Auth URL', data);
			throw Error('removing key authorization not implemented');
		},

		get: function(data) {
			var ch = data.challenge;
			// console.info('List Key Auth URL', data);
			throw Error('retrieving key authorization not implemented');
		}
	};
};
