import arrdictionary from './provDict.js';

test('Does the array add functions work?', () => {
    const arr1 = arrdictionary.arrayAdd([1,2],5);
    expect(arr1.length).toBe(3);
    expect(arr1[2]).toBe(5);

    const arr2 = arrdictionary.arrayAdd([3,4,5],7);
    expect(arr2.length).toBe(4);
    expect(arr2[3]).toBe(7);

    // Making sure strings can't be added to array.
    const arr3 = arrdictionary.arrayAdd([],"7");
    expect(arr3.length).toBe(1);
    expect(arr3[0]).toBe(7);
});

test('Does the array sum functions work?', () => {
    const num1 = arrdictionary.arrayTotal([1,2]);
    expect(num1).toBe(3);

    expect(arrdictionary.arrayTotal([1,2,3,4])).toBe(10);

})

test('Does the dictionary function work?', () => {
    const provCode = arrdictionary.getProvinceName('ab');
    expect(provCode).toBe("Alberta");

    expect(arrdictionary.getProvinceName('bc')).toBe("British Columbia");
});


test('Does the dictionary lookup function work?', () => {
    // const cap = arrdictionary.getCountryCapital('ca');
    // expect(cap).toBe("Ottawa");

    expect(arrdictionary.getProvinceName('nl')).toBeFalsy();

    arrdictionary.addProvinceName('nl', "Newfoundland");

    expect(arrdictionary.getProvinceName('nl')).toBe("Newfoundland");
});

