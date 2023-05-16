class Animal {
    constructor(raca,peso,porte,anoNascimento){
        this.raca = raca;
        this.peso = peso;
        this.porte = porte;
        this.anoNascimento = anoNascimento;




    }

    fazBarulho(){
        console.log("Fazendo barulho...")
    }

    voltaIdade(AnoAtual){
        
        return (AnoAtual - this.anoNascimento)

    }
}


let bicho1 = new Animal("Tigre",200,"grande",2000)
let bicho2 = new Animal("Galinha",2,"pequeno",2022)

bicho1.fazBarulho()

console.log(bicho1.raca)

let idade = bicho1.voltaIdade(2023)
console.log(idade)
console.log(bicho1.voltaIdade(2025))