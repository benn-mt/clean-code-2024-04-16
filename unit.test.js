const {Unit} = require("./unit");

describe ('Units', () => {
    test('can convert an amount to a base unit amount', () => {
        expect(new Unit().amountInBaseUnit(2)).toBe(2)
        expect(new Unit(3).amountInBaseUnit(4)).toBe(12)
    });

    test('Units with a different baseUnit are not compatible', () => {
        expect(new Unit().isCompatibleWith(new Unit())).toBe(false);
        const baseUnit1 = new Unit();
        expect(baseUnit1.isCompatibleWith(baseUnit1)).toBe(true);
        const subUnit1 = new Unit(5, baseUnit1);
        expect(baseUnit1.isCompatibleWith(subUnit1)).toBe(true);
        expect(subUnit1.isCompatibleWith(baseUnit1)).toBe(true);
        expect(subUnit1.isCompatibleWith(new Unit())).toBe(false);
        expect(new Unit().isCompatibleWith(subUnit1)).toBe(false);
    })

    test('can convert an amount to another unit amount', () => {
        const baseUnit1 = new Unit();
        expect(baseUnit1.amountInThisUnit(2, baseUnit1)).toBe(2);
        const subUnit1 = new Unit(5, baseUnit1);
        expect(baseUnit1.amountInThisUnit(5, subUnit1)).toBe(1);
        expect(baseUnit1.amountInThisUnit(15, subUnit1)).toBe(3);
        expect(subUnit1.amountInThisUnit(3, baseUnit1)).toBe(15);
    });
});