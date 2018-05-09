const express = require('express');
const app = express();

var server = app.listen(4000, ()=> {
	console.log(`Listening on Port: 4000`);
});

app.use(express.static('public'));