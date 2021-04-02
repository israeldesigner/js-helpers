// let num = 9.45787;
// let num1 = Math.round(num);
// console.log(num1);
// console.log(Math.min(1,2,3,4,5,8,150,-50));
// console.log(Math.round(Math.random() * (10 - 5) + 5));

// let varA ='a'; 
// let varB ='b'; 
// let varC ='c'; 

// console.log(varA , varB, varC);
// [varA , varB , varC] = [varB, varC, varA];
// console.log(varA , varB, varC);

// let umaString = "Um texto";s
// console.log("teste")
// console.log(`${umaString} em um lindo dia `);
// console.log(umaString.match(/[a-z]/));

//rest  operator
// const numeros = [1,2,3,4,5,6,7,8,9];

// const [primeiroNumero, segundoNumero, , quartoNumero, , quintoNumero, ...resto] = numeros
// console.log(primeiroNumero , segundoNumero , quartoNumero , quintoNumero);
// resto.push(10);
// console.log(resto);

// const alunos = ['Luiz','maria', 'joão', true, null, 25, {
//     a: 'obj a',
//     b: 'obj c'
// }];

// const criaPessoa = (_nome, _sobrenome, _idade ) =>{
//     return {
//         nome: _nome,
//         sobrenome: _sobrenome,
//         idade: _idade,
//         fala(){
//             console.log(`${this.nome} ${this.sobrenome} sou o melhor`)
//         }
//     }
// }

// const atacante  = criaPessoa('luiz','suarez',35);
// const meioCampo = criaPessoa('Dimitri','Payet',25);
// const defesa    = criaPessoa('alessandro ','nesta',49);
// console.log(atacante.fala());

// const pessoa ={
//     nome:"luiz",
//     sobrenome:"miranda",
//     idade:30,
//     endereco:{
//         rua:'av brasil',
//         numero:30
//     }
// }
// const { nome: n , sobrenome , idade} = pessoa
// const { 
//     endereco: {
//         rua, 
//         numero}
//     } = pessoa
// console.log(n , sobrenome);
// console.log(rua , numero);

// const { nome , ...restoObjeto } = pessoa;
// console.log(nome , restoObjeto);

// const frutas = ['maça', 'pera','uva'];
// for (let i = 0; i < frutas.length; i++) {
//         console.log(frutas[i]);
// }







