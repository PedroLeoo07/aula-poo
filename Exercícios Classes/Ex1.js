class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

const user = new Pessoa("Letícia", 14, 1.71);

console.log(user);