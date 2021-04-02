// const _saldo = Symbol('saldo');
class Banco{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo;
    }

    get saldo(){
        return this.saldo;
    }


    depositar (valor){
        return this.saldo + valor;
    }

    sacar(valor){
        return this.saldo - valor;
    }
}

const itauCorrente = new Banco("Israel");
console.log(itauCorrente.depositar(50));
console.log(itauCorrente);