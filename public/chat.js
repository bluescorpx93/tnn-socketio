//Make Connection
var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message');
var username = document.getElementById('username');
var sendBtn = document.getElementById('sendBtn');
var outputDiv = document.getElementById('output');
var feedbackDiv = document.getElementById('feedback');



//Emit Events
sendBtn.addEventListener('click', function(){
	socket.emit('chat', {
		message: message.value,
		username: username.value
	});
});

message.addEventListener('keypress', function(){
	socket.emit('typing', username.value);
});

//Listen for events
socket.on('chat', function(data){
	feedbackDiv.innerHTML = "";
	outputDiv.innerHTML += `<p> <strong> ${data.username} </strong> : ${data.message}`;
});

socket.on('typing', function(data){
	feedbackDiv.innerHTML = `<p> <em> ${data} </em> is typing ...</p>`;
});


