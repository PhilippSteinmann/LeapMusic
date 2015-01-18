window.lHandy = 0;
window.volume = 0;


window.asdf = 1;
function toggle() {
    if (window.asdf == null) {
        window.asdf = setInterval(testFingers, 50);
        window.numfingers = 0;
        window.currnumf = 0;
        window.volume = 0;
    } else {
        window.clearInterval(window.asdf);
        window.asdf = null;
    }
    console.log("wt");
}



window.rnumf = document.getElementById("right");

window.currnumf = 0;
window.oldrnumf = 0;
// window.lnumf = document.getElementById("left");


function numFingers(fingers) {
    var thumb = fingers[0].extended;
    var index = fingers[1].extended;
    var middle = fingers[2].extended;
    var ring = fingers[3].extended;
    var pinky = fingers[4].extended;


    if (!ring && !pinky && !thumb) {
        if (index && !middle) {
            return 1;
        } else if (index && middle) {
            return 2;
        } 
    }
    else if (thumb && !ring && !pinky && !middle){
        if (!index) return 3;
        else if (index) return 4;
    } 
    else if (thumb && index && middle && ring && pinky) return 0;
    else {
      return 5;
    }
}


function testFingers() {
    if (window.lHand) {

        window.lHandy = window.lHand.palmPosition[1];

        window.volume = Math.round(((800 - window.lHandy) / 400 - .5) * 100) / 100;


        window.oldrnumf = window.currnumf;
        var  i = 0;
        var fingers = window.lHand.fingers;
        var numfingers = numFingers(fingers);
    } else {
        numfingers = 0;
        window.volume = 0;
    }

    if (window.rHand) {
        if (numFingers(window.rHand.fingers) == 0) {
            numfingers = 0;
            window.volume = 0;
        }
    }
    window.currnumf = numfingers;
    switch (numfingers) {
        case 1:
        previous();
        break;
        case 2:
        next();
        break;
        case 3:
        volumeDown();
        break;
        case 4:
        volumeUp();
        break;
        case 0:
        pausePlay();
        break;
        case 5:
        break;

    }
}

function previous() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { chrome.tabs.sendMessage(tabs[0].id, {action: "previous"}, function(response) { }); });

}
function next() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { chrome.tabs.sendMessage(tabs[0].id, {action: "play"}, function(response) { }); });

}
function volumeDown() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { chrome.tabs.sendMessage(tabs[0].id, {action: "dislike"}, function(response) { }); });

}
function volumeUp() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { chrome.tabs.sendMessage(tabs[0].id, {action: "like"}, function(response) { }); });

}
function pausePlay() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { chrome.tabs.sendMessage(tabs[0].id, {action: "pause"}, function(response) { }); });
}


// Set up the controller:
window.controller = Leap.loop({background: true}, function(frame){
    if (frame.hands.length > 0) {
        window.lHand = frame.hands[0];

        if (asdf == 1) {
            asdf = setInterval(testFingers, 50);
        }

    } 

});





    /*********************************************************
  * The rest of the code is here for visualizing the example. Feel
  * free to remove it to experiment with the API value only
  ****************************************************/

  // Adds the rigged hand and playback plugins
  // to a given controller, providing a cool demo.
//   visualizeHand = function(controller){
//     // The leap-plugin file included above gives us a number of plugins out of the box
//     // To use a plugins, we call `.use` on the controller with options for the plugin.
//     // See js.leapmotion.com/plugins for more info

//     controller.use('playback').on('riggedHand.meshAdded', function(handMesh, leapHand){
//       handMesh.material.opacity = 1;
//     });

//   var overlay = controller.plugins.playback.player.overlay;
//   overlay.style.right = 0;
//   overlay.style.left = 'auto';
//   overlay.style.top = 'auto';
//   overlay.style.padding = 0;
//   overlay.style.bottom = '13px';
//   overlay.style.width = '180px';


//   controller.use('riggedHand', {
//     scale: 1,
//     boneColors: function (boneMesh, leapHand){
//       if ((true) ) {
//           return { // edit to do color by chords.
//             hue: 0.564,
//             saturation: leapHand.confidence,
//             lightness: 0.5
//         }
//     }
// }
// });

//   var camera = controller.plugins.riggedHand.camera;
//   camera.position.set(0,20,-25);
//   camera.lookAt(new THREE.Vector3(0,3,0));
// };
// visualizeHand(Leap.loopController);