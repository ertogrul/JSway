/*
const fs = require('fs');
const path = require('path')

const myPath = process.argv[2]
const fileExtention = process.argv[3]

var filesToFilter = [];
var filteredFiles = [];

function readFiles(callback) {
	fs.readdir(myPath, function doneReading(err, files) {
		filesToFilter = files.slice();
		callback()		
	})
}

function filterFiles() {
	for (var x = 0; x < filesToFilter.length; x++) {
		if ( "."+fileExtention == (path.extname(filesToFilter[x]))) {
			filteredFiles.push(filesToFilter[x])
		}
	}
	//console.log(filteredFiles)
	console.log(filteredFiles.join('\r\n'))
}
readFiles(filterFiles);
*/

//-------------
const fs = require('fs'),
    path = require('path'), 
  folder = process.argv[2],
     ext = process.argv[3]



fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
		if (path.extname(file) === '.' + ext) {
      		console.log(file)
    	}
  })
})


