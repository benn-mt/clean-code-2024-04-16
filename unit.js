class Unit{
    constructor(ratioToBaseUnit = 1){
        this._ratioToBaseUnit = ratioToBaseUnit;
    }

    convertToBaseUnitAmount(amount){
        return amount * this._ratioToBaseUnit;
    }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3);

module.exports = {Unit, TEASPOON, TABLESPOON}