/*
var filteredFiles = [];
filteredFiles.push("aaaaaa");
filteredFiles.push("bbbbbb");
filteredFiles.push("cccccc");
filteredFiles.push("dddddd");

console.log(filteredFiles);
*/

var fruits = ["one", "two", "threee"]
console.log(fruits.toString());


/*
const fs = require('fs')
const path = require('path')

const pathName = process.argv[2]
const ext = "." + process.argv[3]

fs.readdir(pathName, function (err, listOfFiles) {
	if (err) return console.error(err)
	listOfFiles.forEach(function (i) {
		if (path.extname(i) == ext) {
			console.log(i)
		}
	})
})*/