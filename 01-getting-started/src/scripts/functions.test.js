import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra-large");
    expect(functions.size(101)).toBe("extra-large");
});

test('Does add work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Does subtract work?' , () => {
    expect(functions.subtract(10,5)).toBe(5);
    expect(functions.subtract(20,10)).toBe(10);
})

test('Does multiply work?' , () => {
    expect(functions.multiply(2,5)).toBe(10);
    expect(functions.multiply(10,3)).toBe(30);
});

test('Does divide work?' , () => {
    expect(functions.divide(10,2)).toBe(5);
    expect(functions.divide(14,2)).toBe(7);

})
test('Does isEven work?', () => {
    expect(functions.isEven(2)).toBe(true);
    
})

test('Does effTax work?', () => {
    expect(functions.effTax(10, 100)).toBe(10);
    expect(functions.effTax(10, 200)).toBe(5);
});
