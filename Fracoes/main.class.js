export class Fraction {
    constructor(numerator = 0, denominator = 1) {
        this._numerator = numerator;
        this._denominator = denominator;
    }

    mmc(denominator1, denominator2) {
        let retorno = denominator1 * denominator2;
        if (denominator1 === denominator2) return denominator1;
        let i = denominator1 > denominator2 ? denominator1: denominator2;
        while (((i%denominator1 === 0) && (i%denominator2 === 0)) === false) {
            i++;
            retorno = i;
        }
        return retorno;
    }
    plus(fracao) {
        const newDenominator = this.mmc(this._denominator, fracao.denominator);
        const thisDivisao = newDenominator/this._denominator;
        const fracaoDivisao = newDenominator/fracao.denominator;
        const newNumerator1 = this._numerator*thisDivisao;
        const newNumerator2 = fracao.numerator*fracaoDivisao;

        return `${newNumerator1 + newNumerator2}/${newDenominator}`;
    }

    divide(fracao) {
        const newNumerator = this._numerator * fracao.denominator;
        const newDenominator = this._denominator * fracao.numerator;
        return `${newNumerator}/${newDenominator}`;
    }

    multiply(fracao) {
        const newNumerator = this._numerator * fracao.numerator;
        const newDenominator = this._denominator * fracao.denominator;
        return `${newNumerator}/${newDenominator}`;
    }

    greaterThan(fracao) {
        const thisFracao = this._numerator / this._denominator;
        const entrada = fracao.numerator / fracao.denominator;
        return thisFracao > entrada;
    }

    lessThan(fracao) {
        const thisFracao = this._numerator / this._denominator;
        const entrada = fracao.numerator / fracao.denominator;
        return thisFracao < entrada;
    }

    equals(fracao) {
        const thisFracao = this._numerator / this._denominator;
        const entrada = fracao.numerator / fracao.denominator;
        return thisFracao === entrada;
    }

    mdc(numerator, denominator) {
        let resultado = 1;
        if (numerator < denominator) {
            for (let n; n!==0;) {
                n = numerator % denominator;
                numerator = denominator;
                denominator = n;
            }
            resultado = numerator;
        } else {
            for (let n; n!==0;) {
                n = denominator % numerator;
                denominator = numerator;
                numerator = n;
            }
            resultado = denominator;
        }
        return resultado;
    }
    reduce() {
        const thisMDC = this.mdc(this._numerator, this._denominator);
        if (thisMDC !== 1) {
            this._numerator = this._numerator / thisMDC;
            this._denominator = this._denominator / thisMDC;
        } else return this.toString;
    }

    get canReduce() {
        const thisMDC = this.mdc(this._numerator, this._denominator);
        return thisMDC !== 1;
    }
    get numerator() {
        return this._numerator;
    }
    get denominator() {
        return this._denominator;
    }
    toString() {
        return `${this._numerator}/${this._denominator}`;
    }
}
