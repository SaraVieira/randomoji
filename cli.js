#!/usr/bin/env node
'use strict';
const meow = require('meow');
const randomoji = require('.');

const cli = meow(`
  Usage
    randomoji [NumberOfEmojis} [category]

  Examples
    $ randomoji
    📄
    $ randomoji 5
    😓 😿 👖 👑 👫
    $ randomEmoji 5 objects
    🛋 ⌚️ 🗂 💊 🗞
`);

console.log(randomoji(cli.input[0], cli.input[1]));
