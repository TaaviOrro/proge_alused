const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Sisestage ohutemperatuur: ', ohutemp=>{
    let result;
    if (ohutemp > 4.0){
        result = 'Ei ole jaatumis ohtu';
    }
    else if (ohutemp < 4.0){
        result = 'on jaatumis oht';
    }
    console.log(result)
    rl.close()


})