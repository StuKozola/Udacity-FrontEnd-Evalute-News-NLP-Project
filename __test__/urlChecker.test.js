// Import the js file to test
import { checkForURL } from "../src/client/js/urlChecker"

describe("Testing the checkForURL function", () => {
    test("Testing for valid url", () => {
        const url = 'https://www.google.com'
        expect(checkForURL(url)).toBe(true);
    });
    test("Testing for google.com", () => {
        const url = 'google.com'
        expect(checkForURL(url)).toBe(false);
    });

});