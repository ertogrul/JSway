

//********* TURNING OBJECT IN TO STRING

// var obj = {
// 	name: 'Michal'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


//********** TURNING STRING INTO OBJECT

// var personString = '{"name": "Michal", "age": 41}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


//*********** WRITING JSON TO FILE(AS STRING) AND DISPLAYING IT(BACK TO OBJECT)

const fs = require('fs');
var originalNote = {
	title: 'Some title',
	body: 'Some body'
};
//original noteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
// note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
