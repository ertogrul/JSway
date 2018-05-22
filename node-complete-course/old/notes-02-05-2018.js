console.log("Starting notes.js");

module.exports.age = 25;

//shows module object;
//console.log(module);

module.exports.addNote  = () => {
	console.log("addNote");
	return 'New note';
}

module.exports.Add = (parA, parB) => {
	console.log("Add started");
	return parA + parB
}

//console.log(module);