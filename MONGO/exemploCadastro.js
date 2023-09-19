//mongodb://localhost:27017

//requisitando o pacote mongoose
const mongoose = require('mongoose');
//criar a chave de conexão
mongoose.connect('mongodb://127.0.0.1:27017/escola', 
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);
//executando a conexão
const db = mongoose.connection;
//codigos de teste da conexão
db.on('error', console.error.bind(console, 'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})

//segunda - fase - usando o banco- C do CRUD

//1 - criando um Schema
const cadastroSchema = new mongoose.Schema({
    id : Number,
    nome : String,
    idade : Number,
    email : String
});

//2 - criando a model
const cadastro = mongoose.model('cadastro', cadastroSchema)
//colocar dados dentro desta collection

const Epaminondas = new cadastro({
    id : 1,
    nome : 'Epaminondas',
    idade : 17,
    email : 'epa@gmail.com'
});
 
Epaminondas.save();

const Maria = new cadastro({
    id : 2,
    nome : 'Maria',
    idade : 16,
    email : 'maria@gmail.com'
});

Maria.save();

