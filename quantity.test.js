const {Quantity, TEASPOON} = require("./quantity");

describe ('Measurements....', () => {
    test('can be compared for equality', () => {
        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(true);
        expect(new Quantity(1, TEASPOON).equals(new Quantity(2, TEASPOON))).toBe(false);
        expect(new Quantity(2, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(false);
    });
});