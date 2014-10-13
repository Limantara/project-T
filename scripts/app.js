var recognition;
if (!('webkitSpeechRecognition' in window)) {
	alert('Cannot access the speech recognition API.  Are you using Chrome 25+ ?');
} else {
	recognition = new webkitSpeechRecognition();
	recognition.interimResults = true;
}

$(document).ready(function() {
	$('.button img').click(function() {
		recognition.lang = 'en-US';
		recognition.start();
	});
});