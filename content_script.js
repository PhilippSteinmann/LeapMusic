chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	var command = request.action;
  	console.log("Command: " + command);
  	if (command == "pausePlay")
  		pausePlay();
  });


function pausePlay() {
	alert("Pause/Play");	
}
