class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const user = new Pessoa("Letícia", 14, 1.71);
const user1 = new Pessoa("Leonardo", 16, 1.75);

console.log(user);
console.log(user1);