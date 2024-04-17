class Unit{
    constructor(ratioToBaseUnit = 1){
        this._ratioToBaseUnit = ratioToBaseUnit;
    }

    convertToBaseUnitAmount(amount){
        return amount * this._ratioToBaseUnit;
    }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit();

module.exports = {Unit, TEASPOON, TABLESPOON}