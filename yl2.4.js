const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Kas te soovite istekoha ise valida("ise") voi loosiga("loos")?: ', istekoht=>{ 
    if (istekoht == 'ise'){
        rl.question('kas te soovite akna kohta(aken) voi mitte (muu)?: ', aknakoht=> {
            if (aknakoht == 'aken'){
                console.log(`saite akna koha`)
                
            }
            else if (aknakoht == 'muu'){
                console.log(`valisite muu`)   
            }
            rl.close()
    } else if (istekoht == 'loos'){
        if (Math.ceil(Math.random() * 3) == 1){
            console.log('Koht loositi. aknakoht.')
        }
        else{
            console.log('koht loositi. vahekaik.')
        }
        rl.close()
    }
        })
 })
    
