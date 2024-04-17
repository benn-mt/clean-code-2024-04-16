const {Unit} = require("./unit");

describe ('Units', () => {
    test('can convert an amount to a base unit amount', () => {
        expect(new Unit().convertToBaseUnitAmount(2)).toBe(2)
        expect(new Unit(3).convertToBaseUnitAmount(4)).toBe(12)
    });
});