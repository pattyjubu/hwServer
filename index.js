var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.get('/api/book', function(req, res){
	var books = [
		{title: 'Angular', price: 800},
		{title: 'Nodejs', price: 500},
		{title: 'CSS', price: 200},
	];
	res.send(books);
})
 
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})