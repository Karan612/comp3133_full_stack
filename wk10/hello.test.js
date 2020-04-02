describe("First Passing Test With Jest", () => {
    test("adds 1 + 2 equals 3", () => {
        expect(1 + 2).toBe(3);
    });
});

describe("First Failing Test With Jest", () => {
    test("adds 1 + 1 to not equal to 3", () => {
        expect(1 + 1).toBe(3);
    });
});