import { Newspaper } from "./classes";

describe("Newspaper testing", () => {
    let newspaper: Newspaper;

    beforeEach(() => {
        newspaper = new Newspaper("Newspaper 1", 20, 2, 10);
    });

    it("Newspaper was created", () => {
        expect(newspaper).toBeTruthy();
    });

    it("Check cost", () => {
        const expectedCost = 20 * 2 * 10;
        const realCost = newspaper.getCost();
        expect(expectedCost).toBe(realCost);
    });
});
