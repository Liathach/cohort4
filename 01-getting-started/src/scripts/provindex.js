import provdict from './provDict.js';

console.log('Hello world from provindex.js');
//This code all works so far, so I have commented it out to concentrate on the dictionary code
console.log(idArrayAdd);

let arr = [];

idArrayAdd.addEventListener("click", e => {
    console.log(arr,idArrayInput.value);
    
    arr = provdict.arrayAdd(arr,idArrayInput.value);
    
    console.log(arr);
    console.log("Inside event listener.");
});

idArrayTotal.addEventListener("click", e => {
    let total = provdict.arrayTotal(arr);
    console.log(total);

});
// This part now works!
idCodeLookup.addEventListener("click", e => {
    console.log(idCodeInput);
    let result = provdict.getProvinceName(idCodeInput.value);
    console.log(result);
});

idDictEntry.addEventListener("click", e => {
    let result = provdict.addProvinceName(idProvinceInput.value,idProvCodeInput.value);
    console.log(result);
});

document.body.addEventListener("click", e => {
    console.log("You clicked", e.target.nodeName);
});
