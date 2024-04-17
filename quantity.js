class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._amount == other._amount
        && this._unit == other._unit;
    }
}

module.exports = {Quantity}