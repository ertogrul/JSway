/*var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]).toString().split("\n");
var counter = 0;
//var res = bufStr.split("\n");
for (var x = 0; x < buf.length; x++) {
	counter++;
}
console.log(counter-1);
*/

var fs = require('fs')
    
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines)