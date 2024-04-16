const {Chance} = require("./chance");

describe ('Chance objects....', () => {
    test('are equal when likelihood matches', () => {
        expect(new Chance(0.5).equals(new Chance(0.5))).toBe(true);
    });
});