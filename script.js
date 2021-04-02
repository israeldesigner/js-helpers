// args rest operator
const conta = (...args) => {
/*     console.log(operador, acumulador , numeros);
    for(let num of numeros){
        acumulador += num;
    }
    console.log(acumulador); */
    console.log(args);
};

conta('+', 0, 10, 20,30,40,50);

let soma = (a,b) => a + b;
console.log(soma(4,6));


//closure funcao declarada  habilidade de acesso ao seu escopo lexico e escopo global 
// ela fecha um escop
function criaMutiplicador(mutiplicador){
    return function(n){
        return n * mutiplicador;
    }
}

const duplica = criaMutiplicador(2);
const triplica = criaMutiplicador(3);

console.log(duplica(2));
console.log(triplica(3));

//closure


//IIFE -> Immediately Invoked function expression
(function(){
    const nome = "luiz";
    console.log(nome);
})();

const nome = "otavio";
function qualquerCoisa (){
    console.log(nome);
}

qualquerCoisa();
