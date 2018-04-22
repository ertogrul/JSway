// THIS - BASIC CONTEXT
// WHAT WILL BE DISPLAYED?
// WINDOW OBJECT
var myFunction = function () {
    console.log(this);
  };
  
  // call it
  myFunction();



// ARRAY LITERAL VS NORMAL ARRAY
/*
Array = function(id) {
    this.id = id;
   }
   
   var a = new Array(33);
   var b = [];
   
   console.log(a.hasOwnProperty("id")); // true
   console.log(b.hasOwnProperty("id")); // false
   
   console.log(a.push); // false, push doesn't exist on a
   console.log(b.push); // true,  but it does on b
   
   //a.push(5);
   b.push(2);
   console.log("a: "+a.id); // outputs [2]
   console.log("b: "+b); // outputs [2]

*/


////// SET() DATA STRUCTURE
/*
var dataId = new Set();

dataId.add(1)
dataId.add(2)
dataId.add(3)

console.log(dataId);
*/