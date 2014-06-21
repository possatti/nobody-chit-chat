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
	log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	// get the user address and log it
	var address = socket.handshake.address;
    log("Nobody joined from " + address.address + ":" + address.port);

	// when the client emits 'new message', this listens and executes
	socket.on('new message', function (message) {
		// log the message
		log("Nobody sad " + message);

		// we tell the clients to execute 'new message'
		io.emit('new message', message);
	});

	// when the client disconnects
	socket.on('disconnect', function () {
		// log who is leaving
		log("Nobody left from " + address.address + ":" + address.port);
	});
});
