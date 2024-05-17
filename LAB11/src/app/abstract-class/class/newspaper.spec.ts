import { Newspaper } from "./classes";

describe("Newspaper testing", () => {
    let newspaper: Newspaper;

    beforeEach(() => {
        newspaper = new Newspaper("Newspaper 1", 20, 2, 10);
    });

    it("Newspaper was created", () => {
        expect(newspaper).toBeTruthy();
    });

    it("Pages, page price, and edition must be greater than 0", () => {
        expect(() => new Newspaper("Newspaper 2", -20, 2, 10)).toThrow(new Error("Pages, page price, and edition must be greater than 0"));
    });
    
    it("Check cost", () => {
        const expectedCost = 20 * 2 * 10;
        const realCost = newspaper.getCost();
        expect(expectedCost).toBe(realCost);
    });
});
