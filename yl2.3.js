const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('sisestage oma vanus: ', vanus=>{
    rl.question('sisestage oma sugu(M,m voi N, n): ', sugu=>{
        rl.question('sisestage oma treeningutuup(1, 2 ,3): ', trenn=>{
            let pulss
            if(sugu == 'M'|| sugu == 'm'){
                pulss = 220 - vanus
            }
            else if (sugu == 'N'|| sugu == 'n'){
                pulss = 206 - vanus * 0.88
            }
         let minpulss
         let maxpulss

         if(trenn == 1){
            minpulss = 0.5 * pulss
            maxpulss = 0.7 * pulss
         }
         else if (trenn == 2){
            minpulss = 0.7 * pulss
            maxpulss = 0.8 * pulss
         }
         else if (trenn == 3){
            minpulss = 0.8 * pulss
            maxpulss = 0.87 * pulss
  
         }

         minpulss= Math.round(minpulss)
         maxpulss= Math.round(maxpulss)

         console.log(`pulsisagedus peab olema ${minpulss} kuni ${maxpulss}`)
         rl.close()

        })
    })
})