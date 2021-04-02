const criaPessoa = (_nome, _sobreNome, _idade, _time, _peso, _altura) => {
    if(typeof _idade !== 'number'){
        throw('idade precisa ser um número')
    }
    return {
        nome: _nome,
        idade:_idade,
        sobrenome:_sobreNome,
        get nomeCompleto (){
            return `${this.nome } ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            console.log(valor)
        },
        time: _time,
        fala: function(assunto){
            return `${this.nome} está a ensinar ${assunto} ele tem um ${this.peso}`;
        },
        peso:_peso,
        altura:_altura,
        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('luiz','Januario', 32,'são paulo', 85 , 1.85);
console.log(p1.time);
console.log(p1.imc);
console.log(p1.nomeCompleto);
console.log(p1.fala('sobre js'));