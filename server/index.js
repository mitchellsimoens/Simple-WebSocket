var express = require('express'),
    app     = express(),
    http    = require('http').createServer(app),
    io      = require('socket.io')(http);

http.listen(3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', {
        hello : 'world'
    });

    socket.on('test', function (data) {
        io.emit('test response', {
            success  : true,
            received : data
        });
    });
});
