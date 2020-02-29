import functions from './syntax.js'

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

//Boolean test

test('Does defineBoolean work?', () => {
    expect(functions.defineBoolean(true)).toBe("boolean");
});

//Array test

test('Does isVehicle work?' , () => {
    expect(functions.isVehicle()).toBe(6);
});

//dictionary / objects test
//Go over this in detail and break it down. Lots of lessons here.
test('Does plane work?', () => {
    expect(functions.myPlane("planeType")).toBe("Boeing");
});

//else / if class test

test('Does idCheck work?' , () => {
    expect(functions.idCheck("Bob")).toBe("Hello Bob!");
});

//undefined test

test('Does isDefined work?', () => {
    expect(functions.isDefined("Sparps")).toBe("x is defined"); 
});

//functions test

test('Does mySum work?' , () => {
    expect(functions.mySum(2,3,5)).toBe(10);
});

//returns test
test('Does myReturn work?', () => {
    expect(functions.myReturn(8)).toBe(9);
});

//unshift array  test
test('Does addFront work?' , () => {
    expect(functions.addFront()).toStrictEqual(["Bob", "Fred", "Peggy", "James"]);
});

//push array  test
test('Does addEnd work?' , () => {
    expect(functions.addEnd()).toStrictEqual(["Granite", "Gneiss", "Schist", "Dolerite", "Andesite"]);
});

//The test above seems pretty rigid. How do I make it more flexible?

//update values array test
test('Does arrayUpdate work?' , () => {
    expect(functions.arrayUpdate(c[1])).toBe(3);
});

test('does myFor work?' , () => {
    expect(functions.myFor(35)).toBe("Number is: 34");
})

test('does myForin work?' , () => {
    expect(functions.myForin().toBe("haggis whisky oatcakes"));
})

test('does myDowhile work?' , () => {
    expect(functions.myDowhile(6)).toBe("Just right!");
})

test('does myForeach work?' , () => {
    expect(functions.myForeach)
})

//write test for forEach.
