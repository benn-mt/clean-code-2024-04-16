describe("Temperatures...", () =>{
    test("Can be checked for equality", () => {
        expect(CELCIUS.s(0).equals(FARENHEIGHT.s(32)));
    });
});