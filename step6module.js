 var fs = require('fs');
var path = require('path');
 module.exports = function (dir,type,callback) { 

fs.readdir(dir,function(err,files){
	var result = [];
if (err) return callback(err);
for (file in files){

if(path.extname(files[file]) === "."+type){
	result.push(files[file]);
	
}

}
callback(null,result)
});

 }
