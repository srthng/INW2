const leia = require("prompt-sync")()
let martricula = ["1","2","3","4"]
let nome = ["Marcos","Pedro","Maria","Paulo"]
let nota = [0,0,0,0]
console.log("MAT\tNOME\tNOTA")
for(let i=0; i<martricula.length; i++){
    console.log(martricula[i]+'\t'+nome[i]+'\t'+nota[i])
}
console.log("Digitação de valores")
for(let i=0; i<martricula.length; i++){
    console.log(martricula[i]+'\t'+nome[i])
    nota[i] = leia("Digite o valor da nota do aluno : ")
}
console.log("MAT\tNOME\tNOTA")
for(let i=0; i<martricula.length; i++){
    console.log(martricula[i]+'\t'+nome[i]+'\t'+nota[i])
    if(nota[i] < 5){
        console.log("O aluno foi reprovado")
    }
}


