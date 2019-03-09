const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.sentiment
}));

network.train(trainingData, {
    iterations: 20000,
    logPeriod: 50,
    log: true,
});

const output = network.run('he who lives in harmony with himself lives in harmony with the universe');

console.log(`Sentiment: ${output}`);