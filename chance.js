class Chance{
    constructor(likelihood){
        this._likelihood = likelihood;
    }

    equals(other){
        return this._likelihood == other._likelihood;
    }

    not(){
        return new Chance(1.0 - this._likelihood);
    }

    and(other){
        return this;
    }
}

const FIFTY_FIFTY = new Chance(0.5);
const CERTAIN = new Chance(1.0);
const IMPOSSIBLE = new Chance(0.0);

module.exports = {Chance, FIFTY_FIFTY, CERTAIN, IMPOSSIBLE}