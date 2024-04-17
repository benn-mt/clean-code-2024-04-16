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
        return new Quantity(this._unit.amountInBaseUnit(this._amount) +
        other._unit.amountInBaseUnit(other._amount), this._unit._baseUnit);
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