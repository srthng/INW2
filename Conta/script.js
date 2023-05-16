class Conta {
    constructor(numero,ativa,saldo){
        this.numero = numero;
        this.ativa = ativa;
        this.saldo = saldo
    }

    debito(valor){

        if(valor<0){
            console.log("impossível fazer, numero negativo...")
        }
        else if(this.saldo>valor){
            console.log("impossível realizar, saldo indisponivel")
        }
        else{
            this.saldo = this.saldo + valor
        }
    }
    credito(valor){
        this.saldo = this.saldo + valor
    }
}



let Conta1 = new Conta(15,true,0)

console.log(Conta1.saldo)
Conta1.credito(100)

console.log(Conta1.saldo)
Conta1.credito(100)

console.log(Conta1.saldo)
Conta1.credito(100)

console.log(Conta1.saldo)
Conta1.credito(100)

console.log(Conta1.saldo)
Conta1.credito(100)
