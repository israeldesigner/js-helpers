const numeracao = [10,25,33,66,70,80,90,120,-5,2,5,9,4];

const numMap = numeracao.map((val)=> val * 2);
console.log(numMap);

const pessoas =[
    { nome:'luiz',idade:62},
    { nome:'maria',idade:35},
    { nome:'daniela',idade:32},
    { nome:'alivia',idade:22},
    { nome:'joao',idade:80},
]

const pessoasMap = pessoas.map((obj) => obj.nome );
const removeNome = pessoas.map(obj => ({idade:obj.idade}));
const criaId= pessoas.map((obj,index)=>{
    const newObj = { ...obj };
    newObj.id = (index + 1) * 32;
    return newObj;
    //obj.id = (index + 1) * 10;
    //return obj
})

console.log(pessoasMap);
console.log(removeNome);
console.log(criaId);