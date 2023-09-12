function falarDepoisDE(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000
        )
    })
}

falarDepoisDE(3,"Oi Turma")
.then(frase => frase.concat(' ?!?'))
.then(outraFrase = console.log(outraFrase))