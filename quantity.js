class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._unit.amountInBaseUnit(this._amount) == 
                other._unit.amountInBaseUnit(other._amount);
    }
}

module.exports = {Quantity}