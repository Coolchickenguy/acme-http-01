'use strict';

//var request;
var path = require('path');
var http = require('http');
var server;

module.exports.create = function () {
	return {
		init: function () {
			//request = opts.request;
			return Promise.resolve(null);
		},

		set: function (data) {
			// console.log('Add Key Auth URL', data);

			var ch = data.challenge;
			server = http.createServer(function (request, responce) {
				if (
					request.url ===
						path.posix.join(
							'/.well-known/acme-challenge/',
							ch.token
						) ||
					request.url ===
						path.posix.join(
							'/.well-known/acme-challenges/',
							ch.token
						)
				) {
					responce.end(ch.keyAuthorization);
				} else {
					responce.writeHead(500);
					responce.end();
				}
			});
			server.listen(80);

			return Promise.resolve(null);
		},

		get: function (data) {
			// console.log('List Key Auth URL', data);

			var ch = data.challenge;
			if (!server) {
				return Promise.resolve(null);
			}
			return new Promise(function (resolve) {
				server.emit(
					'request',
					{
						url: path.posix.join(
							'/.well-known/acme-challenges/',
							ch.token
						)
					},
					{
						end: function (value) {
							resolve({ keyAuthorization: value });
						},
						writeHead: function () {
							resolve(null);
						}
					}
				);
			});
		},

		remove: function (data) {
			// console.log('Remove Key Auth URL', data);

			var ch = data.challenge;

			return new Promise(function (resolve) {
				server.close(resolve);
				server = undefined;
			}).then(function () {
				return null;
			});
		}
	};
};
