const data = require('emoji-datasource/emoji.json');

const emojiCategories = () => {
	const cats = data.map(emoji => emoji.category.toLowerCase());
	return cats.filter((item, pos) => cats.indexOf(item) === pos);
};

exports.repeat = (func, times, stop) => {
	if (stop) {
		return console.log(`
There are no Categories that match that search.
 The Categories are:
  ${emojiCategories().map(cat => ` ${cat}`)}
`);
	}
	func();
	--times && this.repeat(func, times); // eslint-disable-line no-unused-expressions
};

exports.categoryExists = category => {
	return emojiCategories(data).includes(category);
};

exports.matchesCategory = category =>
  data.filter(emoji => emoji.category.toLowerCase() === category.toLowerCase());

exports.random = Math.floor(Math.random() * (data.length + 1));
