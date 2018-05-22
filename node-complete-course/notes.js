console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('getting all notes');
};

var getNote = (title) => {
	console.log('reading title:', title);
};

var removeNote = (title) => {
	console.log('removing title:', title);
};

//create getNote function that takes the title

module.exports = {
	addNote,         // 'addNote' is identical to 'addNote: addNote', the same thing applies to other lines
	getAll,
	getNote,
	removeNote
}