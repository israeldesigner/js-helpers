const rand = (min = 0, max = 3) => {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

const esperaAi = (msg, tempo) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject(new Error("Erro js local errado"));
                return;
            };
            resolve(msg.toUpperCase() + 'pasei na promises')
        }, tempo)
    });
}



// esperaAi('buscando dados na base...', rand(1,3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Encontrado value 1', rand(1,3));
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('45', rand(1,3))
//     }).then(resposta => {
//         console.log(resposta)
//     })
//     .catch( e=>{
//         console.log('erro',e)
//     });

// const promises = [
//     esperaAi('promise 1', rand(1,5)),
//     esperaAi('promise 2', rand(1,5)),
//     esperaAi('promise 3', rand(1,5)),
//     esperaAi(4000, 2000))
// ]

// Promise.race(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })

async function executa() {

    try{
        const fase1 = await esperaAi('Fase 1', rand());
        console.log('terminamos na fase', fase1)
    
        const fase2 = await esperaAi(5, rand());
        console.log('terminamos na fase', fase2)
        
        const fase3 = await esperaAi('Fase 3', rand());
        console.log('terminamos na fase', fase3)
    }catch(e){
        console.log(e);
    }
}

executa();

/*

*/