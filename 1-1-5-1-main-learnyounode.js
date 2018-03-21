var mymod = require('./1-1-5-2-module-learnyounode');
var folder = process.argv[2];
var ext = process.argv[3];
//console.log(folder)
mymod (folder, ext, function(err, files) {
	if (err) {
		console.log(err);
		return;
	}
	files.forEach(function(file) {
		console.log(file);
	});
});