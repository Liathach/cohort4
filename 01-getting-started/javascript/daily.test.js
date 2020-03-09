import functions from "./daily.js"

test('Does convertTofahrenheit work?' , () => {
    expect(functions.convertTofahrenheit(0)).toBe(32);
    expect(functions.convertTofahrenheit(16)).toBe(60.8);
});