# [acme-dns-01-{{servicename}}.js](https://git.rootprojects.org/root/acme-dns-01-{{servicename}}.js) | a [Root](https://rootprojects.org/) project

{{ Service Title }} DNS + Let's Encrypt for Node.js - ACME dns-01 challenges w/ ACME.js and Greenlock.js

Handles ACME dns-01 challenges. Compatible with ACME.js and Greenlock.js. Passes acme-dns-01-test.

# Features

-   Compatible
    -   Let’s Encrypt v2.1 / ACME draft 18 (2019)
    -   {{ Service Title }} API
    -   ACME.js, Greenlock.js, and others
-   Quality
    -   node v6 compatible VanillaJS
    -   < 150 lines of code
    -   Zero Dependencies

# Install

```js
npm install --save acme-dns-01-{{servicename}}
```

{{ Service Title }} Token:

-   Login to your account at: {{ Service URL }}
-   {{ Instructions to generate token }}

# Usage

First you create an instance with your credentials:

```js
var dns01 = require('acme-dns-01-{{servicename}}').create({
	baseUrl: '{{ api url }}', // default
	token: 'xxxx'
});
```

Then you can use it with any compatible ACME library, such as Greenlock.js or ACME.js.

## Greenlock.js

```js
var Greenlock = require('greenlock-express');
var greenlock = Greenlock.create({
	challenges: {
		'dns-01': dns01
		// ...
	}
});
```

See [Greenlock Express](https://git.rootprojects.org/root/greenlock-express.js) and/or [Greenlock.js](https://git.rootprojects.org/root/greenlock.js) documentation for more details.

## ACME.js

```js
// TODO
```

See the [ACME.js](https://git.rootprojects.org/root/acme-v2.js) for more details.

## Build your own

There are only 5 methods:

-   `init(config)`
-   `zones(opts)`
-   `set(opts)`
-   `get(opts)`
-   `remove(opts)`

```js
dns01
	.set({
		identifier: { value: 'foo.example.co.uk' },
		wildcard: false,
		dnsZone: 'example.co.uk',
		dnsPrefix: '_acme-challenge.foo',
		dnsAuthorization: 'xxx_secret_xxx'
	})
	.then(function() {
		console.log('TXT record set');
	})
	.catch(function() {
		console.log('Failed to set TXT record');
	});
```

See acme-dns-01-test for more implementation details.

# Tests

```bash
# node ./test.js domain-zone api-token
node ./test.js example.com xxxxxx
```

# Authors

-   AJ ONeal

See AUTHORS for contact info.

# Legal

[acme-dns-01-{{servicename}}.js](https://git.coolaj86.com/coolaj86/acme-dns-01-{{servicename}}.js) | MPL-2.0 | [Terms of Use](https://therootcompany.com/legal/#terms) | [Privacy Policy](https://therootcompany.com/legal/#privacy)

Copyright 2019 AJ ONeal
Copyright 2019 The Root Group LLC
