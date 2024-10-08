#!/usr/bin/env node
'use strict';

// See https://git.coolaj86.com/coolaj86/acme-challenge-test.js
var tester = require('acme-challenge-test');
require('dotenv').config({"path":"./example.env"});

// Usage: node ./test.js example.com username xxxxxxxxx
var record = process.argv[2] || process.env.RECORD;
var challenger = require('./index.js').create();

// The dry-run tests can pass on, literally, 'example.com'
// but the integration tests require that you have control over the domain
tester
	.testRecord('http-01', record, challenger)
	.then(function() {
		console.info('PASS', record);
	})
	.catch(function(e) {
		console.error(e.message);
		console.error(e.stack);
	});
