const fs = require('fs');

function filterCheck(message) {
    const messageString = message.content.toLowerCase();

    fs.readFile('wordFilter/censoredWords.json', (err, data) => {
      if (err) throw err;
      let wordsList = JSON.parse(data);

      for (i in wordsList.words) {
        if (messageString.includes(wordsList.words[i].toLowerCase())) {
          message.delete();
        }
      }
    });
}

module.exports = filterCheck;
