import functions from './syntax'

//Test if input character is a number

test('Does isNumber work?', () => {
    expect(functions.isNumber(2)).toBe(true);
    
});

/* for the test below, the defineString element is what
we are using to test the function("dingo"). The toBe part is the 
input type*/

test('Does defineString work?', () => {
    expect(functions.defineString("dingo")).toBe("string");
    
});