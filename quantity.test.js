const {Quantity} = require("./quantity");
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes");

describe ('Measurements....', () => {
    test('can be compared for equality', () => {
        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(true);
        expect(new Quantity(1, TEASPOON).equals(new Quantity(2, TEASPOON))).toBe(false);
        expect(new Quantity(2, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(false);
        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(false);
        expect(new Quantity(3, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(true);
        expect(new Quantity(2, TABLESPOON).equals(new Quantity(6, TEASPOON))).toBe(true);
    });

    test('Board conversions', () => {
        expect(TABLESPOON.s(1).equals(TEASPOON.s(3))).toBe(true);
        expect(OUNCE.s(1).equals(TABLESPOON.s(2))).toBe(true);
        expect(CUP.s(1).equals(OUNCE.s(8))).toBe(true);
        expect(PINT.s(1).equals(CUP.s(2))).toBe(true);
        expect(QUART.s(1).equals(PINT.s(2))).toBe(true);
        expect(GALLON.s(1).equals(QUART.s(4))).toBe(true);
    });
});