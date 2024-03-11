import { Magazine } from "./classes";

describe("Magazine testing", () => {
    let magazine: Magazine;

    beforeEach(() => {
        magazine = new Magazine("Magazine 1", 10, 5);
    });

    it("Magazine was created", () => {
        expect(magazine).toBeTruthy();
    });

    it("Check cost", () => {
        const expectedCost = 10 * 5;
        const realCost = magazine.getCost();
        expect(expectedCost).toBe(realCost);
    });
});
