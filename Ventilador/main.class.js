export class Ventilator {
    constructor(potencia, marca, rotacaoMinima, rotacaoMaxima) {
        this._watts = potencia;
        this._brand = marca;
        this._minRPM = rotacaoMinima;
        this._maxRPM = rotacaoMaxima;
        this.meanRPM = (rotacaoMaxima+rotacaoMinima)/2;
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }

    slowDown() {
        if (this._velocity === 0) return;
        this._velocity--;
        if (this._velocity === 0) {
            this._rpm = 0;
            this._on = false;
        } else if (this._velocity === 1) this._rpm = this._minRPM;
        else if (this._velocity === 2) {
            this._rpm = (this._minRPM + this._maxRPM)/2;
        }
    }

    speedUp() {
        if (this.velocity === 3) return;
        this._on = true;
        this._velocity++;
        if (this._velocity === 1) this._rpm = this._minRPM;
        else if (this._velocity === 2) {
            this._rpm = (this._minRPM + this._maxRPM)/2;
        } else if (this._velocity === 3) this._rpm = this.maxRPM;
    }

    turnOff() {
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }

    get rpm() {
        return this._rpm;
    }
    get velocity() {
        return this._velocity;
    }
    get on() {
        return this._on;
    }
    get off() {
        return !this._on;
    }
    get watts() {
        return this._watts;
    }
    get brand() {
        return this._brand;
    }
    get minRPM() {
        return this._minRPM;
    }
    get maxRPM() {
        return this._maxRPM;
    }
}
