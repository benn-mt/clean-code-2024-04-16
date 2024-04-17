class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._unit.convertToBaseUnitAmount(this._amount) == 
                other._unit.convertToBaseUnitAmount(other._amount);
    }
}

module.exports = {Quantity}