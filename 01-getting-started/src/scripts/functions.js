
const functions = {
    
    size: (num) => {
        if (num < 10 && num >=-1) return "small";
        else if (num >= 10 && num <= 19) return "medium";
        else if (num > 19 && num < 101) return "large";
        else if (num >= 101) return "extra-large";

        
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },
    
    isEven: (num1) => {
        var x = num1 % 2;
        if (x = 0);
            return true;
    },

    onButtonClicked:() => {
        let num1 = document.getElementById("myInput1").value;
        let num2 = document.getElementById("myInput2").value;
        let oper = document.getElementById()
    }
};

export default functions;
