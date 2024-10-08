# [acme-http-01-webroot.js](https://git.rootprojects.org/root/acme-http-01-webroot.js) | a [Root](https://rootprojects.org/) project

Webroot Authentication + Let's Encrypt for Node.js - ACME http-01 challenges w/ ACME.js and Greenlock.js

Handles ACME http-01 challenges. Compatible with ACME.js and Greenlock.js. Passes acme-http-01-test.

# Features

-   Compatible
    -   Let’s Encrypt v2.1 / ACME draft 18 (2019)
    -   Works with your web root
        -   Apache
        -   Nginx
        -   Lighttpd
    -   ACME.js, Greenlock.js, and others
-   Quality
    -   node v6 compatible VanillaJS
    -   < 150 lines of code
    -   Zero Dependencies

# Install

```js
npm install --save acme-http-01-webroot
```

# Usage

First you create an instance with your credentials:

```js
var http01 = require('acme-http-01-webroot').create({
	webroot: '~/.local/tmp/acme-challenge' // default
});
```

Template example:

```js
var http01 = require('acme-http-01-webroot').create({
	webroot: '/srv/www/{domain}/.well-known/acme-challenge'
});
```

Then you can use it with any compatible ACME library, such as Greenlock.js or ACME.js.

## Greenlock.js

```js
var Greenlock = require('greenlock-express');
var greenlock = Greenlock.create({
	challenges: {
		'http-01': http01
	}
	// ...
});
```

See [Greenlock Express](https://git.rootprojects.org/root/greenlock-express.js) and/or [Greenlock.js](https://git.rootprojects.org/root/greenlock.js) documentation for more details.

## ACME.js

```js
// TODO
```

See the [ACME.js](https://git.rootprojects.org/root/acme-v2.js) for more details.

## Build your own

There are only 4 methods:

-   `init(config)`
-   `set(opts)`
-   `get(opts)`
-   `remove(opts)`

```js
http01
	.set({
		identifier: { value: 'foo.example.co.uk' },
		token: 'xxxx'
		keyAuthorization: 'xxxx.yyyy'
	})
	.then(function() {
		console.log('Saved ACME key authorization file');
	})
	.catch(function(err) {
		console.error('Failed to save ACME key authorization file');
		console.error(err);
	});
```

See acme-http-01-test for more implementation details.

# Tests

```bash
# node ./test.js domain-zone api-token
node ./test.js example.com xxxxxx
```

# Authors

-   AJ ONeal

See AUTHORS for contact info.

# Legal

[acme-http-01-webroot.js](https://git.coolaj86.com/coolaj86/acme-http-01-webroot.js) | MPL-2.0 | [Terms of Use](https://therootcompany.com/legal/#terms) | [Privacy Policy](https://therootcompany.com/legal/#privacy)

Copyright 2019 AJ ONeal
Copyright 2019 The Root Group LLC
