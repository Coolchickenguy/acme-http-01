'use strict';

var request;
var defaults = {};

module.exports.create = function(config) {
	return {
		init: function(opts) {
			request = opts.request;
			return null;
		},
		zones: function(data) {
			//console.info('List Zones', data);
			throw Error('listing zones not implemented');
		},
		set: function(data) {
			var ch = data.challenge;
			if (!ch.dnsZone) {
				// zones() is not implemented for http-01 challenges,
				// but it is almost always implemented for dns-01 challenges
				throw new Error('No matching zone for ' + ch.dnsHost);
			}
			// console.info('Add TXT', data);
			throw Error('setting TXT not implemented');
		},
		remove: function(data) {
			// console.info('Remove TXT', data);
			throw Error('removing TXT not implemented');
		},
		get: function(data) {
			// console.info('List TXT', data);
			throw Error('listing TXTs not implemented');
		}
	};
};
