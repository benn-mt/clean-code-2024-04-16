const {Chance} = require("./chance");

describe ('Chance objects....', () => {
    test('can be compared for equality', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
    });
});