const {Quantity} = require("./quantity");
const {TEASPOON, TABLESPOON, OUNCE} = require("./unit");

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
        expect(new Quantity(1, TABLESPOON).equals(new Quantity(3, TEASPOON))).toBe(true);
        expect(new Quantity(1, OUNCE).equals(new Quantity(2, TABLESPOON))).toBe(true);
    });
});