const {Quantity} = require("./quantity");

class Unit{
    constructor(ratioToRelativeUnit = 1, relativeUnit, offset = 0){
        if (relativeUnit) {
            this._baseUnit = relativeUnit._baseUnit;
            this._ratioToBaseUnit = ratioToRelativeUnit * relativeUnit._ratioToBaseUnit;
        } else {
            this._baseUnit = this;
            this._ratioToBaseUnit = ratioToRelativeUnit 
        }
        this._offset = offset;
    }

    s(amount){
        return new Quantity(amount, this);
    }

    amountInThisUnit(otherAmount, otherUnit){
        if (!this.isCompatibleWith(otherUnit)){
            throw new TypeError("Incompatible Units");
        }
        return (otherAmount - otherUnit._offset) * otherUnit._ratioToBaseUnit / this._ratioToBaseUnit;
    }

    isCompatibleWith(other){
        return this._baseUnit === other._baseUnit;
    }
}

module.exports = {Unit}