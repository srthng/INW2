const leia = require("prompt-sync")()

let num

num = parseInt(leia("Digite um número positivo inteiro : "))

for(let x=1; x<=num; x++){

    if((x%2) == 0){
        console.log(x)
    }
    
}