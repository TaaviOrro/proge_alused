const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage mitu korda aratada: ', aratus=> {
    for (let step = 1; step <= aratus; step++){
        console.log("touse ja sara")
    }
    rl.close()
})