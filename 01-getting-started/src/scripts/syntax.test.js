import functions from './syntax.js'

//Test if input character is a number

test('Does isNumber work?', () => {
    expect(functions.isNumber(2)).toBe(true);
    expect(functions.isNumber(3)).toBe(true);
    
});

/* for the test below, the defineString element is what
we are using to test the function("dingo"). The toBe part is the 
input type*/

test('Does defineString work?', () => {
    expect(functions.defineString("dingo")).toBe("string");
    expect(functions.defineString("tree")).toBe("string");
});

//Boolean test

test('Does defineBoolean work?', () => {
    expect(functions.defineBoolean(true)).toBe("boolean");
    expect(functions.defineBoolean(false)).toBe("boolean");
});

//Array test

test('Does isVehicle work?' , () => {
    expect(functions.isVehicle()).toBe(6);
});

//dictionary / objects test
//Go over this in detail and break it down. Lots of lessons here.
test('Does plane work?', () => {
    expect(functions.myPlane("planeType")).toBe("Boeing");
    expect(functions.myPlane("planeModel")).toBe(787);
});

//else / if class test

test('Does idCheck work?' , () => {
    expect(functions.idCheck("Bob")).toBe("Hello Bob!");
    expect(functions.idCheck("Rita")).toBe("I don't know you");
});

//undefined test

test('Does isDefined work?', () => {
    expect(functions.isDefined("Sparps")).toBe("x is defined"); 
    expect(functions.isDefined()).toBe("x is undefined");
});

//functions test

test('Does mySum work?' , () => {
    expect(functions.mySum(2,3,5)).toBe(10);
    expect(functions.mySum(2,3,2)).toBe(7);
});

//returns test
test('Does myReturn work?', () => {
    expect(functions.myReturn(8)).toBe(9);
    expect(functions.myReturn(9)).toBe(10);
});

//unshift array  test
test('Does addFront work?' , () => {
    expect(functions.addFront("Bob",["Fred", "Peggy", "James"])).toStrictEqual(["Bob", "Fred", "Peggy", "James"]);
    expect(functions.addFront("5",["1", "2", "3"])).toStrictEqual(["5", "1", "2", "3"]);
});

//push array  test
test('Does addEnd work?' , () => {
    expect(functions.addEnd("Andesite", ["Granite", "Gneiss", "Schist", "Dolerite"])).toStrictEqual(["Granite", "Gneiss", "Schist", "Dolerite", "Andesite"]);
    expect(functions.addEnd("Basalt", ["Granite", "Gneiss", "Schist", "Dolerite"])).toStrictEqual(["Granite", "Gneiss", "Schist", "Dolerite", "Basalt"]);
});

//The test above seems pretty rigid. How do I make it more flexible?

//update values array test
test('Does arrayUpdate work?' , () => {
    expect(functions.arrayUpdate(0,15)).toEqual([15,2,3,4,5]);
    expect(functions.arrayUpdate(1,22)).toEqual([1,22,3,4,5]);
});

test('does myFor work?' , () => {
    expect(functions.myFor(35)).toBe("Number is: 34");
    expect(functions.myFor(40)).toBe("Number is: 39");
});

test('does myForin work?' , () => {

    expect(functions.myForin(({firstname: "Bob", lastname: "Brown"}))).toBe("Bob Brown ");
    expect(functions.myForin(({firstname: "Dave", lastname: "Robertson"}))).toBe("Dave Robertson ");
});

test('does myWhile work?' , () => {
    expect(functions.myWhile(5)).toBe(10);
    expect(functions.myWhile(6)).toBe(15);
})

test('does myDowhile work?' , () => {
    expect(functions.myDowhile(6)).toBe("Just right!");
    expect(functions.myDowhile(12)).toBe("Too big!");
});

//write test for forEach.
test('does sampleforEach work?' , () => {
    expect(functions.sampleforEach([1,2])).toBe(3);
    expect(functions.sampleforEach([7,9])).toBe(16);
});

// //write test for object
test('does myDog work?' , () => {
    expect(functions.myDog("breed", {breed: "labrador", name: "Ben"})).toBe("labrador");
    expect(functions.myDog("name", {breed: "labrador", name: "Ben"})).toBe("Ben");
})
