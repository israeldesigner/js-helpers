// decalração função
falaOi('valor', 45, 25, true, null)
function falaOi(){
    console.log(arguments);
}

//funcao expression
const souDado = function(){
    console.log("sou um dado");
}
souDado();

function funcaoSoma( a, b ){
    b = b || 0;
    return (a + b);
}

console.log(funcaoSoma(2));


const arrowFunction = () => console.log("arrow function");
arrowFunction();
const arrowSoma = (a,b) => a + b;
console.log(arrowSoma(4,5));
