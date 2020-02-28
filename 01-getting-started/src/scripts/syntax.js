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
  var cars = ["BMW", "Volvo", "Ford"];
  var motorbikes = ["Ducatti", "Yahama", "Suzuki"];
  var vehicles = cars.concat(motorbikes);
  return vehicles.length;
  },

//dictionary / objects
  myPlane:(x) => {
  var plane = {planeType: "Boeing", planeModel: 787, planeColor: "white"};
    return plane[x];
  },


//sample if/else class
//Note use of brackets and braces in if/else sections.
  idCheck:(person) => {
    if (person == "Bob") {
      return "Hello Bob!";
     } else {return "I don't know you,";
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

addFront:(name) => {
var x = ["Fred", "Peggy", "James"];
x.unshift("Bob");
return x;
},

//Add to the end
addEnd:(name) => {
  var x = ["Granite", "Gneiss", "Schist", "Dolerite"];
  x.push("Andesite");
  return x;
},

//Update values
arrayUpdate:(num) => {
  var c = [1,2,3,4,5];
  c[1] = 3;
  return c;
},

//update values
//loops 
//for
myFor:(num) => {
  for (i = 0; i < 21; i++);
  text += "Number is: " + i;
},


//for/in - steps through each element in var.
myForin:(num) => {
  var txt = "";
  var meal = {first:"haggis", second:"whisky", third:"oatcakes"}; 
  var x;
  for (x in meal) {
  txt += meal[x] + " ";
}
},
//while
myWhile:(num) => {
var text = "";
var i = 10;
while (i < 15) {
  text += "<br>The number is " + i;
  i++;
}
}
//do while
myDowhile:(num) => {

}

//forEach (with array and function)
myForeach:(num) => {
  
}

/*Objects / Dictionaries
declare object
lookup key to retrieve value
*/
}
export default functions;
