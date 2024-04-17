const {INCH, FOOT} = require("./lengths");

describe ('Volumes....', () => {
    test('Board conversions', () => {
        expect(INCH.s(12).equals(FOOT.s(1))).toBe(true);
    });
});