const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('sisestage ainepunktide arv: ', ainepunkt => {
    rl.question('sisestage nadalate arv: ', nadalad => {
        let ajakulu = (ainepunkt * 26) / nadalad
        console.log(ajaksulu)
        rl.close()

    })
   
})