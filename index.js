const express = require('express');
const app = express();
const socket = require('socket.io');

//App Setup
var expressServer = app.listen(4000, ()=> {
	console.log(`Listening on Port: 4000`);
});

//Static Files
app.use(express.static('public'));

//Socket Setup
const io = socket(expressServer);

io.on('connection', (socket) => {
	console.log('Socket Connection Made');
})