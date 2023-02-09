import sum from "../index.js";

describe('index', () => {
    it('should return some value', () => {
        expect(sum()).toBe(2);
    })
})