bf = require('./bruteforce');

bf.bruteForce(1, 5, 'abcdefghijklmnopqrstuvwxyz')
    .forEach(r => {
        console.log(r);
    });
