const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Mitu poialpoissi tahab ouna: ', poialpoiss=> {
    let ounad = 14
    for(let poialpois = 1; poialpois <= poialpoiss; poialpois++){  
        let ounadpoialpoisile = Math.ceil(Math.random() * 2)
        console.log(ounadpoialpoisile)
        ounad = ounad - ounadpoialpoisile
    }
    console.log(`Lumivalgekesele jai ${ounad}`)
rl.close()    
})