
const readline = require("node: readline");

const rl = readline.createinterface({
    input: Process.stdin,
    output: proscess.stdout,
})

rl.question("Sisesta astme alus: ", astmeAlus=>{
    rl.question("Sisesta astenadaja: ", astendaja=> {
        let result = astmeAlus ** astendaja
        console.log(result)
        rl.close()

    )
})






let astmealus = 2
let astendaja = 4
let result = astmealus ** astendaja
console.log(result)