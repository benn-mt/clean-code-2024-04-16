const {Quantity} = require("./quantity");
const {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON} = require("./volumes");
const {INCH, FOOT} = require("./lengths");

describe ('Measurements....', () => {
    test('can be compared for equality', () => {
        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(true);
        expect(new Quantity(1, TEASPOON).equals(new Quantity(2, TEASPOON))).toBe(false);
        expect(new Quantity(2, TEASPOON).equals(new Quantity(1, TEASPOON))).toBe(false);
        expect(new Quantity(1, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(false);
        expect(new Quantity(3, TEASPOON).equals(new Quantity(1, TABLESPOON))).toBe(true);
        expect(new Quantity(2, TABLESPOON).equals(new Quantity(6, TEASPOON))).toBe(true);

        expect(new Quantity(2, OUNCE).equals(new Quantity(1, FOOT))).toBe(false);
    });

    test('Compatible quantities can be added together', () => {
        expect(new Quantity(1, TEASPOON).add(new Quantity(0, TEASPOON)).equals(new Quantity(1, TEASPOON))).toBe(true);
        expect(new Quantity(1, TEASPOON).add(new Quantity(1, TEASPOON)).equals(new Quantity(2, TEASPOON))).toBe(true);
    })
});