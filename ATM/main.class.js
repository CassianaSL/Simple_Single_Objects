export class ATM {
    constructor(numeroSerie) {
        this._numeroSerie = numeroSerie;
        this._valor = 0;
        this._cedulas = [0, 0, 0, 0, 0];
    }

    cedulas(nota) {
        let retorno = 0;
        if (nota === 100) retorno = this._cedulas[0]/100;
        else if (nota === 50) retorno = this._cedulas[1]/50;
        else if (nota === 20) retorno = this._cedulas[2]/20;
        else if (nota === 10) retorno = this._cedulas[3]/10;
        else if (nota === 5) retorno = this._cedulas[4]/5;
        return retorno;
    }

    abastecer(quantidade, nota) {
        if (nota === 100) {
            if (this.cedulas(100) <= 100) {
                this._cedulas[0] += 100 * quantidade;
                this._valor += 100 * quantidade;
            }
        } else if (nota === 50) {
            if (this.cedulas(50) <= 100) {
                this._cedulas[1] += 50 * quantidade;
                this._valor += 50 * quantidade;
            }
        } else if (nota === 20) {
            if (this.cedulas(20) <= 100) {
                this._cedulas[2] += 20 * quantidade;
                this._valor += 20 * quantidade;
            }
        } else if (nota === 10) {
            if (this.cedulas(10) <= 100) {
                this._cedulas[3] += 10 * quantidade;
                this._valor += 10 * quantidade;
            }
        } else if (nota === 5) {
            if (this.cedulas(5) <= 100) {
                this._cedulas[4] += 5 * quantidade;
                this._valor += 5*quantidade;
            }
        }
    }

    pseudoRetirar(pseudoValor) {
        if (pseudoValor%100 !== pseudoValor && this._cedulas[0] >= parseInt(pseudoValor/100) * 100) {
            pseudoValor -= parseInt(pseudoValor/100) * 100;
        }

        if (pseudoValor%50 !== pseudoValor && this._cedulas[1] >= parseInt(pseudoValor/50) * 50) {
            pseudoValor -= parseInt(pseudoValor/50) * 50;
        }

        if (pseudoValor%20 !== pseudoValor && this._cedulas[2] >= parseInt(pseudoValor/20) * 20) {
            pseudoValor -= parseInt(pseudoValor/20) * 20;
        }

        if (pseudoValor%10 !== pseudoValor && this._cedulas[3] >= parseInt(pseudoValor/10) * 10) {
            pseudoValor -= parseInt(pseudoValor/10) * 10;
        }

        if (pseudoValor%5 !== pseudoValor && this._cedulas[4] >= parseInt(pseudoValor/5) * 5) {
            pseudoValor -= parseInt(pseudoValor/5) * 5;
        }

        return pseudoValor;
    }

    retirar(valor) {
        if (valor > this._valor) return;

        let pseudoValor = valor;

        if (pseudoValor%100 !== pseudoValor && this._cedulas[0] >= parseInt(pseudoValor/100) * 100) {
            pseudoValor -= parseInt(pseudoValor/100) * 100;
        }

        if (pseudoValor%50 !== pseudoValor && this._cedulas[1] >= parseInt(pseudoValor/50) * 50) {
            pseudoValor -= parseInt(pseudoValor/50) * 50;
        }

        if (pseudoValor%20 !== pseudoValor && this._cedulas[2] >= parseInt(pseudoValor/20) * 20) {
            pseudoValor -= parseInt(pseudoValor/20) * 20;
        }

        if (pseudoValor%10 !== pseudoValor && this._cedulas[3] >= parseInt(pseudoValor/10) * 10) {
            pseudoValor -= parseInt(pseudoValor/10) * 10;
        }

        if (pseudoValor%5 !== pseudoValor && this._cedulas[4] >= parseInt(pseudoValor/5) * 5) {
            pseudoValor -= parseInt(pseudoValor/5) * 5;
        }

        if (pseudoValor === 0) {
            if (valor%100 !== valor && this._cedulas[0] >= parseInt(valor/100)) {
                this._cedulas[0] -= parseInt(valor/100) * 100;
                valor -= parseInt(valor/100) * 100;
            }
            if (valor%50 !== valor && this._cedulas[1] >= parseInt(valor/50)) {
                this._cedulas[1] -= parseInt(valor/50) * 50;
                valor -= parseInt(valor/50) * 50;
            }
            if (valor%20 !== valor && this._cedulas[2] >= parseInt(valor/20)) {
                this._cedulas[2] -= parseInt(valor/20) * 20;
                valor -= parseInt(valor/20) *20;
            }
            if (valor%10 !== valor && this._cedulas[3] >= parseInt(valor/10)) {
                this._cedulas[3] -= parseInt(valor/10) * 10;
                valor -= parseInt(valor/10) * 10;
            }
            if (valor%5 !== valor && this._cedulas[4] >= parseInt(valor/5)) {
                this._cedulas[4] -= parseInt(valor/5) * 5;
                valor -= parseInt(valor/5) * 5;
            }
        }
    }

    get valor() {
        let valor = 0;
        for (const i of this._cedulas) valor += i;
        return valor;
    }

    get numeroSerie() {
        return this._numeroSerie;
    }
}
