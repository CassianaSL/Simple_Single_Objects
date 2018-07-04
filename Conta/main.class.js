export class Conta {
    constructor(agencia, numero) {
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = 500.0;
    }

    sacar(saque) {
        if ((this._saldo - saque) >= 0) this._saldo = this._saldo - saque;
    }

    depositarEmCheque(deposito) {
        if (deposito <= 10000.00) this._saldo += deposito;
    }

    depositarEmDinheiro(deposito) {
        if (deposito <= 1000.00) this.depositarEmCheque(deposito);
    }

    get agencia() {
        return this._agencia;
    }

    get numero() {
        return this._numero;
    }

    get saldo() {
        return this._saldo;
    }

    toString() {
        return `ag ${this._agencia} cc ${this._numero} saldo ${this._saldo}.00`;
    }
}
