const readline = require("node:readline");

const rl= readline.createinterface({
    input: proccess.stdin,
    output: process.stdout,
})




rl.question = ("sisestage oma nimi: ", nimi => {
    rl.question =("sisestage lubatud kiirus: ", lubatud => {
        rl.question =("sisestage tegelik kiirus: ", tegelik => {
            let trahv = (lubatud - tegelik) * 3
            trahv = math.min(trahv, 190)
            console.log(trahv)
            rl.close()
        })
    })
    
        

})
