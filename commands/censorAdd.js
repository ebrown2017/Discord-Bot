const fs = require('fs'); //import filesystem

module.exports = {
    name: 'censorAdd',
    description: 'Adds word to censor filter',
    execute(message, args) {
      fs.readFile('./wordFilter/censoredWords.json', (err, data) => { //read in list of censored words
        if (err) throw err;
        let wordsList = JSON.parse(data);
        wordsList.words.push(args.toString()); //add word to array
        message.channel.send('Word sucessfully added.');  //confirmation message

        let jsonData = JSON.stringify(wordsList, null, 2);  //format data
        fs.writeFile('./wordFilter/censoredWords.json', jsonData, (err) => {  //write to json file
          if (err) throw err;
        });
      });
    },
};
