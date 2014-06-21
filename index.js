// Setup server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

// Log the data recieved from parameter
function log(logmessage) {
	console.log(logmessage);
}

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// Current number of nobodies connected
var nobodyCount = 0;

io.on('connection', function (socket) {
	// Increase the number of nobodies connected
	++nobodyCount;

	// log info for the new connection
	log("Nobody joined. " + nobodyCount + " online");

	// when the client emits 'new message', this listens and executes
	socket.on('new message', function (message) {
		// log the message recieved
		log("Nobody said " + message);

		// we tell the clients to execute 'new message'
		io.emit('new message', message);
	});

	// when the client disconnects
	socket.on('disconnect', function () {
		// Reduces the number of nobodies connected
		--nobodyCount;

		// log info for the nobody leaving
		log("Nobody left. " + nobodyCount + " online");
	});
});
