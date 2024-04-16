const {Chance} = require("./chance");

const FIFTY_FIFTY = new Chance(0.5);

describe ('Chance objects....', () => {
    test('can be compared for equality', () => {
        expect(FIFTY_FIFTY.equals(FIFTY_FIFTY)).toBe(true);
        expect(new Chance(0.6).equals(new Chance(0.6))).toBe(true);
        expect(new Chance(0.3).equals(new Chance(0.7))).toBe(false);
        expect(new Chance(0.7).equals(new Chance(0.3))).toBe(false);
    });

    test('can be inverted', () => {
        expect(FIFTY_FIFTY.not().equals(FIFTY_FIFTY)).toBe(true);
    })
});