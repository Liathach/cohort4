
const functions = {

    convertTofahrenheit: (celcius) => {
        let fahrenheit = ((celcius*9/5) + 32);
        return fahrenheit;
    },
};

export default functions;
