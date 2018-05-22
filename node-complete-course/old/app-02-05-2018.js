console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var filteredArray = _.uniq(['Mike', 1, 'Mike', 1, 2, 3, 4]);
console.log(filteredArray);

/*
console.log(_.isString(true));
console.log(_.isString("Andrew"));
*/
/*
var res = notes.addNote();
console.log(res);
console.log("result2 is " + notes.Add(14, -5));
*/
/* add function
two arguments A, B
add them
return result
call that function from app passing two arguments
*/
/*
var user = os.userInfo();
console.log(`Hello ${user.username}! You are ${notes.age}.`); 
fs.appendFileSync('greetings3.txt', `Hello ${user.username}! You are ${notes.age}.`); 
//console.log(global);
*/





