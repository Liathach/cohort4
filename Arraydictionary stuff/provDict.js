
const functions = {

    provs : {
        'ab' : "Alberta",
        'bc' : "British Columbia",
        'sk' : "Saskatchewan",
        'on' : "Ontario"
    },

    arrayAdd(arr, num) {
        arr.push(Number(num));
        return arr;
    },

    arrayTotal(arr) {
        let tot = 0;
        for(let i = 0; i < arr.length; i++) {
            tot += arr[i];
        }
        return tot;
    },

    getProvinceName(code) {
        return functions.provs[code];
    },

    addProvinceName(code, value) {
        functions.provs[code] = value;
    }
}

export default functions;