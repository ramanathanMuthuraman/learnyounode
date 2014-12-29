var http = require('http');
var result=[];
var count =0;
function api(index){
http.get(process.argv[2+index], function(response) {
	var str="";
	 response.setEncoding('utf8');
   response.on('data', function (chunk) {
     str += chunk;
  });

  response.on('end', function () {
 result[index] = str;
 count++;
    if(count === 3){
      for (var i = 0; i < 3; i++){
      console.log(result[i])
    }
    }
  
  });

});
}
for(var j=0;j<=2;j++){
api(j)
}