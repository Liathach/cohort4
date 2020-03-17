
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
  },

    //Band 1 tax function

    band_1_tax:(total_income) => {
    let total_tax = 0;
    let band_1_tax = ((total_income * 0.15));
    total_tax = band_1_tax;
    return total_tax;
    },
   
   //Band 2 tax function
  
    band_2_tax:(total_income) => {  
    let total_tax=0;
    let band_1_tax = 7280.15;
    let band_2_tax = ((total_income-48535) * 0.205);
    total_tax = (band_1_tax+band_2_tax);
      return total_tax;
   },
  
  //Band 3 tax function
  
    band_3_tax:(total_income) => {  
    let total_tax=0;
    let band_1_tax = 7280.15;
    let band_2_tax = 9949.47;
    let band_3_tax = ((total_income-97069) * 0.26);
    total_tax = (band_1_tax+band_2_tax+band_3_tax);
      return total_tax;
    },
  
    //Band 4 tax function
  
    band_4_tax:(total_income) => {  
    let total_tax=0;
    let band_1_tax = 7280.15;
    let band_2_tax = 9949.47;
    let band_3_tax = 13885.04;
    let band_4_tax = ((total_income-150473) * 0.29);
    total_tax = (band_1_tax+band_2_tax+band_3_tax+band_4_tax);
      return total_tax;
    },
   //Band 5 tax function
  
    band_5_tax:(total_income) => {  
    let total_tax=0;
    let band_1_tax = 7280.15;
    let band_2_tax = 9949.47;
    let band_3_tax = 13885.04;
    let band_4_tax = 18529.55;
    let band_5_tax = ((total_income-214368) * 0.33);
    total_tax = (band_1_tax+band_2_tax+band_3_tax+band_4_tax+band_5_tax);
      return total_tax;
    },
   
        taxCalc:(total_income) => {
            if (total_income > 214368) return functions.band_5_tax(total_income);
                else if (total_income > 150473) return functions.band_4_tax(total_income);
                else if (total_income > 97069) return functions.band_3_tax(total_income);
                    else if (total_income > 48535) return functions.band_2_tax(total_income);
                        else return functions.band_1_tax(total_income);
    },
  
  //   effectiveTax:(total_tax, total_income) => {
  //   let eff_Tax = ((total_tax / total_income)*100);
  //   return eff_Tax;
  // },

  //Write a function to add to an array

  arrayAdd: () => {
    
  }
  };


export default functions;
