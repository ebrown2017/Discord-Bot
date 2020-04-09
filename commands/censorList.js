const fs = require('fs'); //import filesystem

module.exports = {
    name: 'censorList',
    description: 'Lists words from censor filter',
    execute(message, args) {
      fs.readFile('./wordFilter/censoredWords.json', (err, data) => { //read in list of censored words
        if (err) throw err;
        let wordsList = JSON.parse(data);
        message.author.send(JSON.stringify(wordsList.words) + ' are all censored word(s)');  //DM author with list
      });
    },
};
