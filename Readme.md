# randomoji [![Build Status](https://travis-ci.org/SaraVieira/randomoji.svg?branch=master)](https://travis-ci.org/SaraVieira/randomoji)

> GET A RANDOM EMOJI


## Install

```
npm install randomoji
or
yarn add randomoji
```


## Usage

```js
const randomoji = require('randomoji');

randomoji();
//=> 📄
randomoji(5);
//=> 😓 😿 👖 👑 👫
randomEmoji(5, 'objects')
//=> 🛋 ⌚️ 🗂 💊 🗞
```


## API

### randomoji(NumberOfEmojis, category)

#### NumberOfEmojis

Type: `int`

Number of Emojis you want. Defaults to one

#### category

Type: `string`<br>
What category you want these emojis to be in:

Categories:
* symbols
* objects
* nature
* people
* foods
* places
* activity
* flags
* skin tones


## CLI

```
npm install --global randomoji
or
yarn global add randomoji
```

```
$ randomoji --help

  Usage
    randomoji [NumberOfEmojis} [category]

  Examples
    $ randomoji
    > 📄
    $ randomoji 5
    > 😓 😿 👖 👑 👫
    $ randomEmoji 5 objects
    > 🛋 ⌚️ 🗂 💊 🗞
```


## License

MIT © [Sara Vieira](http://iamsaravieira.com)
