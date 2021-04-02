const numeracao = [10,25,33,66,70,80,90,120,-5,2,5,9,4];
const numerosFilter = numeracao.filter( val => val > 100);
/* const numerosFilter = numeracao.filter((val, index, array) =>{
    console.log(val , index , array);
    return val > 10;
}); */
//console.log(numerosFilter);

const pessoas =[
    { nome:'luiz',idade:62},
    { nome:'maria',idade:35},
    { nome:'daniela',idade:32},
    { nome:'alivia',idade:22},
    { nome:'joao',idade:80},
]

const pessoasComNome = pessoas.filter((obj) => obj.nome.length >= 5 && obj.idade > 30);
const letraA = pessoas.filter((obj)=>{
    return obj.nome.toLocaleLowerCase().endsWith('a');
})
console.log(pessoasComNome);
console.log(letraA);