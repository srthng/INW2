//Classes
class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
    }

    ativar(){
        this.ativo =true
    }

    credito(valor){
        if(this.ativo){
            this.saldo += valor
        }
    }
    debito(valor){
        if(this.ativo){
            if(valor>0){
                console.log("impossível realizar, valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossível realizar, valor nulo...")
            }
            else if(valor>this.saldo){
                console.log("Impossível realizar, saldo indisponível")
            }
            else{
                this.saldo -= valor   
            }
        }
        else{
            console.log("A Conta está desativada")
        }   
    }
}


const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite o numero da conta: "))
let cpf = leia("digite o cpf da conta: ")
let c1 = new Conta(numero,cpf,0,false)
c1.ativar()
c1.credito(100)
console.log("saldo atual: " + c1.saldo)

for (let x = 1; x <= 1; x++){
    console.log("Movimento : " + x)
    console.log("saldo atual conta : "+c1.saldo)
    op = leia("Digite D - debito. Ou Digite C - credito : ")
    if(op == "D"){
        valor = leia("Digite o valor para debito : ")
        c1.debito(valor)
    }
    else if(op == "C"){
        valor = leia("Digite o valor para credito : ")
        c1.credito(valor)
    }
}
