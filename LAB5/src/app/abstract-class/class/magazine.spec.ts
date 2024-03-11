import { Magazine } from "./classes";

describe("Magazine testing", () => {
    let magazine: Magazine;

    beforeEach(() => {
        magazine = new Magazine("Magazine 1", 10, 5);
    });

    it("Magazine was created", () => {
        expect(magazine).toBeTruthy();
    });
    it("Edition and price must be greater than 0", () => {
        expect(() => new Magazine("Magazine 2", -10, 5)).toThrow(new Error("Edition and price must be greater than 0"));
    });
    it("Check cost", () => {
        const expectedCost = 10 * 5;
        const realCost = magazine.getCost();
        expect(expectedCost).toBe(realCost);
    });
});
