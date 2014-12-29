var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

	  	var param = url.parse(req.url,true);
	  	var date = new Date(param.query.iso)
	
	  	if( param.pathname === '/api/parsetime'){
	  		  	res.writeHead(200, { 'Content-Type': 'application/json' });
	  			res.end(JSON.stringify({"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()}));
	  	}
	  	else if(param.pathname === '/api/unixtime'){
	  		  	res.writeHead(200, { 'Content-Type': 'application/json' });
	  			res.end(JSON.stringify({"unixtime":date.getTime()}));
	  	}
	  	else
	  {
    	res.writeHead(404);
    	res.end("{}");
	  }




});
server.listen(process.argv[2])