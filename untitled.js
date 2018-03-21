const fs = require('fs');
//var path = '/Users/michal.kordyzon@pl.ibm.com/_u/node-school'

const path = process.argv[2]
//const fileExtention = process.argv[3]
var filesToFilter = undefined

function readFiles(callback) {
	fs.readdir(path, function doneReading(err, files) {
		console.log("done")
		console.log(files)
		//console.log("exttetion: " + fileExtention)
		filesToFilter = files
		callback()		
	})
}

function filterFiles() {
	console.log("before sorting: " + filesToFilter)
}
readFiles(filterFiles);