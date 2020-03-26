const functions = {

    caps : {
        'CA' : "Ottawa",
        'US' : "Washington",
        'DE' : "Berlin",
        'FR' : "Paris",
        'UK' : "London",
        'GR' : "Athens",
        'NO' : "Oslo",
        'SW' : "Stockholm",
        'IR' : "Dublin",
        'SP' : "Madrid",
        'JA' : "Tokyo",
        'RU' : "Moscow",
    },

    arrayAdd(arr, num) {
        arr.push(Number(num));
        return arr;
    },

    arrayTotal(arr) {
        let tot=0;
        for(let i=0; i < arr.length; i++) {
            tot += arr[i];
        }
        return tot;
    },

    getCountryCapital(code) {
        return functions.caps(code);
    },

    addCountryCapital(code, value) {
        functions.caps(code) = value;
    }
}

export default functions;