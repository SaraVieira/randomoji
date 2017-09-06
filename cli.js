#!/usr/bin/env node
'use strict';
const meow = require('meow');
const randomoji = require('.');

const cli = meow(`
	Usage
	  $ randomoji [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ randomoji
	  unicorns & rainbows
	  $ randomoji ponies
	  ponies & rainbows
`);

console.log(randomoji(cli.input[0], cli.input[1]));
