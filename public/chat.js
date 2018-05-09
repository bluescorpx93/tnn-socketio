//Make Connection
var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message');
var username = document.getElementById('username');
var sendBtn = document.getElementById('sendBtn');
var outputDiv = document.getElementById('output');


function emitData(){
	socket.emit('chat', {
		message: message.value,
		username: username.value
	});
}

//Emit Events
sendBtn.addEventListener('click', emitData);

message.addEventListener('keypress', function(event){
	var keyCodeVal = event.which || event.keyCode;
	if (keyCodeVal==13) {
		emitData();
	}
})

//Listen for events
socket.on('chat', function(data){
	outputDiv.innerHTML += `<p> <strong> ${data.username} </strong> : ${data.message}`;
	console.log(data);
});


