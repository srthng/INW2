const leia = require("prompt-sync")()

let nome = leia("Digite seu nome : ")
let idade = parseInt(leia("Digite a seu ano de nascimento : "))

let dataNascimento = 2023 - idade

if(dataNascimento < 3){
    console.log("Não atendemos bebês")
} else if(dataNascimento > 3 && dataNascimento < 13){
    console.log("Bem vindo " + nome)
    console.log("Faixa infantil " + dataNascimento)
}  else if(dataNascimento > 13 && dataNascimento < 17){
    console.log("Bem vindo " + nome)
    console.log("Faixa adolecente " + dataNascimento)
} else if(dataNascimento > 17 && dataNascimento < 65){
    console.log("Bem vindo " + nome)
    console.log("Faixa adulta ")
} else if(dataNascimento <= 65){
    console.log("Não atendemos idosos")
}