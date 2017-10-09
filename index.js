const emoji = require('node-emoji');
const data = require('emoji-datasource/emoji.json');
const {categoryExists, matchesCategory, repeat} = require('./functions');

const returnValue = [];

module.exports = (input = 1, category = null) => {
	const getRandomEmoji = () => {
		let randomEmoji;
		if (category) {
			if (!categoryExists(category)) {
				return;
			}
			randomEmoji = matchesCategory(category) ?
        matchesCategory(category)[
            Math.floor(Math.random() * (matchesCategory(category).length + 1))
          ].short_name :
        'There are no Emojis that match that search';
		} else {
			randomEmoji =
        data[Math.floor(Math.random() * (data.length + 1))].short_name;
		}
		const hasEmoji = emoji.hasEmoji(randomEmoji);
		const getEmoji = emoji.get(randomEmoji);
		returnValue.push(hasEmoji ? getEmoji : getRandomEmoji());
	};

	repeat(getRandomEmoji, input, category && !categoryExists(category));

	return returnValue.join(' ');
};
