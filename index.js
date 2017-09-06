const data = require('emoji-datasource/emoji.json');
var emoji = require('node-emoji');

const emojiLength = data.length;
let returnValue = [];

module.exports = (input = 1, category = null) => {
  const repeat = (func, times) => {
    func();
    --times && repeat(func, times);
  };

  const getRandomEmoji = () => {
    const random = Math.floor(Math.random() * emojiLength + 1);
    let randomEmoji;
    if (category) {
      const allEmojis = data.filter(
        emoji => emoji.category.toLowerCase() === category.toLowerCase()
      );
      const length = allEmojis.length;
      randomEmoji = length
        ? allEmojis[Math.floor(Math.random() * length + 1)].short_name
        : 'There are no Emojis that match that search';
    } else {
      randomEmoji = data[random].short_name;
    }
    const hasEmoji = emoji.hasEmoji(randomEmoji);
    const getEmoji = emoji.get(randomEmoji);
    returnValue.push(hasEmoji ? getEmoji : getRandomEmoji());
  };

  repeat(getRandomEmoji, input);

  return returnValue.join(' ');
};
