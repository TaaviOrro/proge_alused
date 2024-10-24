const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage vajalik taringute arv: ', taring=> {
    for(let kord = 1; kord <= taring; kord++){
        console.log(Math.ceil(Math.random() * 6))
    }
rl.close()
})