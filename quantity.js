class Quantity{
    constructor(amount, unit){
        this._amount = amount;
        this._unit = unit;
    }

    equals(other){
        return this._unitsAreCompatible(other) &&
               this._amountsInBaseUnitAreEqual(other);
    }

    add(other){
        if (!this._unit.isCompatibleWith(other._unit)){
            throw new TypeError("Incompatible Units");
        }
        return new Quantity(this._amount +
            this._unit.amountInThisUnit(other._amount, other._unit), this._unit);
    }

    _amountsInBaseUnitAreEqual(other) {
        return this._unit.amountInBaseUnit(this._amount) ==
            other._unit.amountInBaseUnit(other._amount);
    }

    _unitsAreCompatible(other) {
        return this._unit.isCompatibleWith(other._unit);
    }
}

module.exports = {Quantity}