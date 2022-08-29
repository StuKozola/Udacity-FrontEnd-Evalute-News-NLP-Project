// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the checkForName function", () => {
    test("Testing for Picard", () => {
        const name = 'Picard'
        expect(checkForName(name)).toBe(true);
    });
    test("Testing for Janeway", () => {
        const name = 'Janeway'
        expect(checkForName(name)).toBe(true);
    });
    test("Testing for Kirk", () => {
        const name = 'Kirk'
        expect(checkForName(name)).toBe(true);
    });
    test("Testing for Archer", () => {
        const name = 'Archer'
        expect(checkForName(name)).toBe(true);
    });
    test("Testing for Georgiou", () => {
        const name = 'Georgiou'
        expect(checkForName(name)).toBe(true);
    });
    test("Testing for a non captain", () => {
        const name = 'Spock'
        expect(checkForName(name)).toBe(false);
    }); 
});