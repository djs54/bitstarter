var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var k = fs.readFileSync('index.html','utf8');
var a = 'help me';
//response.send(a);
response.send('help meh hello worlsd');
 
//response.send(k);
   //response.send(buf.toString(k));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
