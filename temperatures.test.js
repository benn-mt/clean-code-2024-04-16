const { CELCIUS, FARENHEIGHT } = require("./temperatures");

describe("Temperatures...", () =>{
    test("Can be checked for equality", () => {
        expect(CELCIUS.s(0).equals(FARENHEIGHT.s(32))).toBe(true);
        expect(CELCIUS.s(100).equals(FARENHEIGHT.s(212))).toBe(true);
        expect(CELCIUS.s(10).equals(FARENHEIGHT.s(50))).toBe(true);
        expect(CELCIUS.s(-40).equals(FARENHEIGHT.s(-40))).toBe(true);
    });
});