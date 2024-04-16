const {Chance} = require("./chance");

describe ('Chance objects....', () => {
    test('can be compared for equality', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
        expect(new Chance(0.6).equals(new Chance(0.6))).toBe(true);
        expect(new Chance(0.3).equals(new Chance(0.7))).toBe(false);
        expect(new Chance(0.7).equals(new Chance(0.3))).toBe(false);
    });
});