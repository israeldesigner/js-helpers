function Produto(_nome, _preco, _estoque){
    this.nome = _nome;
    this.preco = _preco;

    let estoquePrivate = _estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable:true, //mostra a chave
        //value:_estoque,  // valor
        //writable:true, // pode alterar
        configurable:true, //configuravel,
        get: () =>{
            return _estoque;
        },
        set: (val) =>{
            if(typeof val !== 'number'){
                throw new TypeError('mensagem');
                return;
            }
            estoquePrivate = val;
        }
    });
}

const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 600;
console.log(p1.estoque);

const criaProduto = (_nome) => {
    return{
        get nome(){
            return _nome
        },
        set nome(val){
            val = val.replace("coisa","mutante");
            nome = val;
        }
    }
}

const p2 = criaProduto('camisete');
p2.nome = "qualquer coisa";
console.log(p2);

const camisa = {
    nome:"ck marcas",
    preco:1.8
}
const outraCoisa = { 
    ...camisa,
    material: 'linho'
};
outraCoisa.nome = 'outr nome';
outraCoisa.preco = 2.5;
console.log(camisa);
console.log(outraCoisa);