var recognition;
if (!('webkitSpeechRecognition' in window)) {
	alert('Cannot access the speech recognition API.  Are you using Chrome 25+ ?');
} else {
	recognition = new webkitSpeechRecognition();
	recognition.interimResults = true;
}

recognition.onresult = function(event) {
    var i;
    return $('.content p').text('" ' + ( (function() {
      var _i, _ref, _ref1, _results;
      _results = [];
      for (i = _i = _ref = event.resultIndex, _ref1 = event.results.length - 1; _i <= _ref1; i = _i += 1) {
        _results.push(event.results[i][0].transcript);
      }
      return _results;
    })()).join(''));
  };

$(document).ready(function() {
	$('.button img').click(function() {
		recognition.lang = 'id';
		recognition.start();
	});
});