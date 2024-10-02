const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage perenimi: ', perenimi=>{
    if (perenimi.slice(-2)=='ne'){
        console.log('on abielus');
    }
    else if(perenimi.slice(-2)=='te'){
        console.log('Vallaline');
    }
    else if (perenimi.slice(-1)== 'e'){
        console.log('maaramata');
    }
    else   console.log('ilmselt pole Leedu perenimi')
    
rl.close()
})