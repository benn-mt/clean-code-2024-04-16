class Quantity{
    constructor(amount, unit){
        this._amount = amount;
    }

    equals(other){
        return this._amount == other._amount;
    }
}

const TEASPOON = new Object();

module.exports = {Quantity, TEASPOON}