function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

console.log(Pessoa.prototype);
Pessoa.prototype.estouAqui = "hahahaha";
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

const p1 = new Pessoa("israel", 'matos', 38);
const p2 = new Pessoa("karta",'paz', 36);
console.log(p1.nomeCompleto());