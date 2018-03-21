var fs = require('fs')
var path = require('path')

module.exports = function(folder, ext, callback) {
          fs.readdir(folder, function (err, files) { 
            if (err) {return callback(err)};
            //console.log('przed '+files);
            //console.log('ext ' + ext)
            //var mystring;
            files = files.filter(function(file) {
                  //console.log('qqq ' + path.extname(file))
                  //mystring = "xxxx";
                  //console.log('mystring typeof ' + mystring.typeOf)
                  return path.extname(file) === "." + ext;
              });
            
            //console.log('po ' + files)
            //console.log('files typeof ' + files.typeOf)
            callback(null, files)
            //console.log(files)
            
             //<====================== FUNKCJA W FILES.FILTER dostanie callback PO tym wierszu? QRFA
          })
      //callback(null, files)
}