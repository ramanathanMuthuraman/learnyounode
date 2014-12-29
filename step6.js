
 var mymodule = require('./step6module.js')
 mymodule(process.argv[2],process.argv[3],function(err,files){

if (err) throw err;
for (file in files){
	console.log(files[file]);
}
 });
