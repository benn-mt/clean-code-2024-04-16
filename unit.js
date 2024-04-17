class Unit{
    constructor(ratioToBaseUnit = 1){
        this._ratioToBaseUnit = ratioToBaseUnit;
    }

    amountInBaseUnit(amount){
        return amount * this._ratioToBaseUnit;
    }
}

const TEASPOON = new Unit();
const TABLESPOON = new Unit(3);
const OUNCE = new Unit(3*2)
const CUP = new Unit(3*2*8);

module.exports = {Unit, TEASPOON, TABLESPOON, OUNCE, CUP}