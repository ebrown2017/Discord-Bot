const fs = require('fs'); //import filesystem

module.exports = {
    name: 'censorRemove',
    description: 'Removes word from censor filter',
    execute(message, args) {
      fs.readFile('./wordFilter/censoredWords.json', (err, data) => { //read in list of censored words
        if (err) throw err;
        let wordsList = JSON.parse(data);
        for (i in wordsList.words) {
          if (args.toString().toLowerCase() === wordsList.words[i].toLowerCase()) {
            wordsList.words.splice(i , 1);
          }
        }
        message.channel.send('Word sucessfully removed.');  //confirmation message

        let jsonData = JSON.stringify(wordsList, null, 2);  //format data
        fs.writeFile('./wordFilter/censoredWords.json', jsonData, (err) => {  //write to json file
          if (err) throw err;
        });
      });
    },
};
