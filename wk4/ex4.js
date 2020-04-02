let fs = require("fs");
let path = require("path");

const { fork } = require('child_process');
const compute = fork('compute.js');
compute.send('start');

compute.on('message', result => {
    console.log('Long computation result:', `${result}`);
    process.exit();
});
