class Produto{
    constructor(id,descricao,ativo,estoque,preco,tipo,marca){
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo,
        this.estoque = estoque,
        this.preco = preco,
        this.tipo = tipo,
        this.marca = marca
    }

    Ativar(){
        this.ativo = true
    }
    Desativar(){
        this.ativo = false
    }

    retirarEstoque(){
        if(this.estoque < 0){
            console.log("Impossível realizar a retirada, não a nenhum no estoque")
        } else{
            this.estoque -= 1
        }
    }
    incluirEstoque(){
            this.estoque += 1
    }
}


const leia = require("prompt-sync")()

let opcao = ""
let op = ""

do{
    console.log("Iscas do Avenildo")
    console.log("")
    console.log("Iscas do Avenildo, a loja perfeita de pescaria feita para você")
    console.log("")
    console.log("")

    opcao = leia("Deseja fazer compras S/N :")

    if(opcao == "s"){
        do{
            console.log("Bem-vindo a Loja do Avenildo")
            console.log("")
            console.log("")
            console.log("1 - Cadastrar produtos ")
            console.log("")
            console.log("2 - finalizar")
            op = leia("Escolha umas das opções acima : ")

            if(op == "1"){
                let p1 = new Produto()
                p1.Ativar
                p1.estoque = 10
                for(movimento = 1; movimento <= 10; movimento++){
                    console.log("")
                    console.log("movimentos feitos : " +movimento)
                    console.log("")
                    console.log("Quantidade no estoque : " +p1.estoque)
                    console.log("")
                    console.log(p1.id)
                    console.log(p1.descricao)
                    console.log(p1.ativo)
                    console.log(p1.estoque)
                    console.log(p1.preco)
                    console.log(p1.tipo)
                    console.log(p1.marca)
                    op = leia("Digite o produto que você quer cadastrar(V) - Digite se você quer fazer uma retirada de produto do estoque (R) - Digite se você quer fazer incluir uma quantidade no estoque (I): ")
                    if(op == "v"){
                        opId = leia("Digite o id da vara : ")
                        p1.id = opId
                        opDes = leia("Digite a descricao da vara : ")
                        p1.descricao = opDes
                        opPreco = leia("Digite o preco da vara : ")
                        p1.preco = opPreco
                        opTipo = leia("Digite o tipo da vara : ")
                        p1.tipo = opTipo
                        opMarca = leia("Digite a marca da vara : ")
                        p1.marca = opMarca
                        console.log(p1.id)
                        console.log(p1.descricao)
                        console.log(p1.preco)
                        console.log(p1.tipo)
                        console.log(p1.marca)
                    } else if(op == "r"){
                        p1.retirarEstoque()
                    } else if(op == "i"){
                        p1.incluirEstoque()
                    }
                }
            }
        } while(opcao == "2")
        console.log("")
        console.log("Obrigado por comprar com a gente")
    }
}while(opcao == "n")
console.log("")
console.log("Fim do programa, até breve")
console.log("")
