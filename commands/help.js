module.exports = {
    name: 'help',
    description: 'Displays commands',
    execute(message, args) {
      message.reply( 'Supported Commands: ' + "\n" +
                    '.censorAdd (word) - adds word to censor filter' + "\n" +
                    '.censorRemove (word) - removes word from censor filter' + "\n" +
                    '.censorRemoveAll - removes all words from censor filter');
    },
};
