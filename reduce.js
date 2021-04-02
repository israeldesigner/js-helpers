const numeracao = [10,25,33,66,70,80,90,120, 5,2,5,9,4];
const total = numeracao.reduce((acumulador, val, index, array)=>{
    if(val % 2 == 0) acumulador.push(val)
    return acumulador;
},[]);

console.log(total);