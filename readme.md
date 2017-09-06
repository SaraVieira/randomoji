# randomoji [![Build Status](https://travis-ci.org/saravieira/randomoji.svg?branch=master)](https://travis-ci.org/saravieira/randomoji) [![codecov](https://codecov.io/gh/saravieira/randomoji/badge.svg?branch=master)](https://codecov.io/gh/saravieira/randomoji?branch=master)

> GET A RANDOM EMOJI


## Install

```
$ npm install randomoji
```


## Usage

```js
const randomoji = require('randomoji');

randomoji('unicorns');
//=> 'unicorns & rainbows'
```


## API

### randomoji(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global randomoji
```

```
$ randomoji --help

  Usage
    randomoji [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ randomoji
    unicorns & rainbows
    $ randomoji ponies
    ponies & rainbows
```


## License

MIT © [Sara Vieira](http://iamsaravieira.com)
