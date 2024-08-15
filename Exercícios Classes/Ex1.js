class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e tenho ${this.altura} de altura, muito prazer em conhece-los :)`);
        
    }
}

const user = new Pessoa("Letícia", 14, 1.71);
const user1 = new Pessoa("Leonardo", 16, 1.75);

user.seApresentar();

//console.log(user);
//console.log(user1);