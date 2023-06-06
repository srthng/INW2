const leia = require("prompt-sync")()

let usuario = leia("Digite o nome do usuário : ")
let salario = parseFloat(leia("Digite o valor do seu salário : "))

if(salario < 2500){
   console.log("Você está isento de imposto")
   console.log("O seu salário : " +salario)
} else if(2500 >= salario <=5000){
   imposto = salario * 0.15
   console.log("O valor do imposto que você ira pagar : " + imposto)
   console.log("O seu salário : " +salario)
} else if(5000 < salario){
   imposto = salario * 0.25
   console.log("O valor do imposto que você ira pagar : " + imposto)
   console.log("O seu salário : " +salario)
}