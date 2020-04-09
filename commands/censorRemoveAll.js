const fs = require('fs'); //import filesystem

module.exports = {
    name: 'censorRemoveAll',
    description: 'Removes all words from censor filter',
    execute(message, args) {
      fs.readFile('./wordFilter/censoredWords.json', (err, data) => { //read in list of censored words
        if (err) throw err;
        let wordsList = JSON.parse(data);
        wordsList.words = []; //remove all words from list
        message.channel.send('All words sucessfully removed.');  //confirmation message

        let jsonData = JSON.stringify(wordsList, null, 2);  //format data
        fs.writeFile('./wordFilter/censoredWords.json', jsonData, (err) => {  //write to json file
          if (err) throw err;
        });
      });
    },
};
