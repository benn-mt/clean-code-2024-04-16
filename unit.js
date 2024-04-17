const {Quantity} = require("./quantity");

class Unit{
    constructor(ratioToBaseUnit = 1, baseUnit){
        this._ratioToBaseUnit = ratioToBaseUnit 
        if (baseUnit) {
            this._ratioToBaseUnit = this._ratioToBaseUnit * baseUnit._ratioToBaseUnit;
        }
    }

    s(amount){
        return new Quantity(amount, this);
    }

    amountInBaseUnit(amount){
        return amount * this._ratioToBaseUnit;
    }
}

module.exports = {Unit}