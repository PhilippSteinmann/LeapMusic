chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	var command = request.action;
  	if (command == "pausePlay")
  		pausePlay();
  });

alert("Pause/Play");
