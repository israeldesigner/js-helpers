//constructor functions
function Pessoa(nome, sobrenome){
    const ID = 123456;
    const metodoInterno = (sobrenome) =>{
        console.log(sobrenome + 'maria');
    };

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = ()=> {
        console.log(this.nome + 'constructor');
    }
}

var p1 = new Pessoa('Luiz' , 'maria');
var p2 = new Pessoa('Luiz' , 'andarilha');
console.log(p1.nome , p2.sobrenome)
console.log(p2.metodo());

