chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	alert(request.action)
  	if (request.action == "pause")
  		pause();
  	if (request.action == "play")
  		play();
  	if (request.action == "like")
  		like();
  	if (request.action == "unlike")
  		unlike();
  	if (request.action == "skip")
  		skip();
  });

var unlike = function(){
$(".thumbDownButton").click()
}

var like = function(){
$(".thumbUpButton").click()
}

var pause = function() {
$(".pauseButton").click()
}

var play = function(){
$(".playButton").click()
}

var skip = function(){
$(".skipButton").click()
}