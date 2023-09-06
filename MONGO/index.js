const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', 
{
    userNewUrlParser : true, 
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS : 10000}
);

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error') ) 

db.once('open', function()
{
    console.log("Estamos logados no mongodb")
}
);

const pessoaSchema = new mongoose.Schema( {
        nome: String,
        idade: Number,
        profissao: String
    }
);

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const marcos = new Pessoa({
     
    Nome: 'Marcos',
    Idade: 25,
    profissao: 'Programador'
    }
);


console.log(marcos.Nome);
console.log(marcos.idade);
console.log(marcos.profissao);
marcos.save();