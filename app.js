const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.sentiment
}));

network.train(trainingData, {
    iterations: 2000,
    logPeriod: 50,
    log: true,
});

const input = [
    "i am not sad",
    "i am not happy",
    "i fucking love dogs"
];

const runned = new Array();

// RUNNING THE SENTENCES THROUGH THE NETWORK

for(var i = 0; i < input.length; i++) {
    runned[i] = network.run(input[i]);
}

// OUTPUTING THE RESULTS

for(var i = 0; i < runned.length; i++) {
    console.log(input[i] + ' is ' + '--> ' + runned[i].toUpperCase());
}