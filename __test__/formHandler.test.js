/**
 * @jest-environment jsdom
 */
import { sentiment } from "../src/client/js/formHandler"

describe("Testing the sentiment functionality", () => {
    document.body.innerHTML = 
        '<p id="results"></p>' +
        '<p id="score"></p>' +
        '<p id="subjectivity"></p>' +
        '<p id="confidence"></p>' +
        '<p id="irony"></p>' +
        '<p id="text"></p>';
        
    test("Testing the P+ case", () => {
        const tag = 'P+';
        expect(sentiment(tag)).toBe('P+ (Strong positive)');
    })

    test("Testing the P case", () => {
        const tag = 'P';
        expect(sentiment(tag)).toBe('P (Positive)');
    })

    test("Testing the NEU case", () => {
        const tag = 'NEU';
        expect(sentiment(tag)).toBe('NEU (Neutral)');
    })

    test("Testing the N+ case", () => {
        const tag = 'N+';
        expect(sentiment(tag)).toBe('N+ (Strong negative)');
    })

    test("Testing the N case", () => {
        const tag = 'N';
        expect(sentiment(tag)).toBe('N (Negative)');
    })

    test("Testing the NONE case", () => {
        const tag = 'NONE';
        expect(sentiment(tag)).toBe('NONE (Without sentiment)');
    })

    test("Testing the empty case", () => {
        const tag = '';
        expect(sentiment(tag)).toBe('No data');
    })
});