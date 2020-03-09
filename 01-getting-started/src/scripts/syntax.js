/*
define attributes / variables */

//number
 const functions={
 isNumber:(num) =>{
     const x = typeof(num);
        if (x == "number") return true;
         else return false;
 },

//string
 defineString:(num) =>  {
      const x = typeof(num);
       return (x);
  },

//boolean

 defineBoolean:(num) =>  {
      const x = typeof(num);
         return (x);
   },

   //array
  isVehicle:() => {
  let cars = ["BMW", "Volvo", "Ford"];
  let motorbikes = ["Ducatti", "Yahama", "Suzuki"];
  let vehicles = cars.concat(motorbikes);
  return vehicles.length;
  },

//dictionary / objects
  myPlane:(x) => {
  let plane = {planeType: "Boeing", planeModel: 787, planeColor: "white"};
    return plane[x];
  },


//sample if/else class
//Note use of brackets and braces in if/else sections.
  idCheck:(person) => {
    if (person == "Bob") {
      return "Hello Bob!";
     } else {return "I don't know you";
  }
  },

//undefined

isDefined:(input) => {
    if (input == undefined) {
      return "x is undefined";
      }  else {return "x is defined";
}
},

//functions
mySum:(a,b,c) => {
  return a + b + c; // function returns sum of 3 values
},


//returns

myReturn:(num) => {
  var x = (Number(num) + 1);
    return x;
},

//arrays
//Add to the front

addFront:(name, arr) => {
arr.unshift(name);
return arr;
},

//Add to the end
addEnd:(name, arr) => {
  arr.push(name);
  return arr;
},

//Update values
arrayUpdate:(position, value) => {
    let c = [1,2,3,4,5];
    c[position] = value;
  return c;
},

//update values
//loops 
//for
myFor:(num) => {
  let text = "";
  for (let i = 10; i < num; i++) {
  text = "Number is: " + i };
  return text;
},


//for/in - steps through each element in var. Returns three elements.

myForin:(object) => {
  let string = "";
  let x=0;
  for (x in object) {
    string += object[x] + " ";
  }
    console.log(string);
    return string;
  
 
},

//while
myWhile:(num) => {
let sum = 0;
let i = 0;
while (i < num) {
sum = sum +i;
  i++;
}
return sum;
},

//do while
myDowhile:(x) => {
 if (x > 10) return "Too big!";
  while (x<10) return "Just right!";
},

//forEach (with array and function)
sampleforEach:(number_arrays) =>{
let sum=0;
number_arrays.forEach(myfunction);

function myfunction(item) {
  
   sum+=item;
 
}; return (sum);
},

// /*Objects / Dictionaries
// declare object
myDog:(key, object) => {
  console.log(object[key]);
  return (object[key]);
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
 
  taxCalc:(num1) => {
    if (num1 > 214368) return functions.band_5_tax(num1);
      else if (num1 > 150473) return functions.band_4_tax(num1);
        else if (num1 > 97069) return functions.band_3_tax(num1);
          else if (num1 > 48535) return functions.band_2_tax(num1);
            else return functions.band_1_tax(num1);
  }
};
export default functions;
