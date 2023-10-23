// https://codepen.io/Wichian-Py/pen/abXbYwa
document.addEventListener('DOMContentLoaded',onYouTubeIframeAPIReady)
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "6EZmOM767HQ",
    playerVars: { 
      rel: 0,
      autoplay: 1, 
      controls: 0, 
      modestbranding: true, 
      color: 'white',
      showinfo: 0, 
      ecver: 2 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}


function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == done) {
    console.log("done done done");
    showChoices();//show choices    
  }
}
function stopVideo() {
  player.stopVideo();
}

function showChoices() {
  let oldPlayer = document.getElementById("player");
  iframe.style="block"
  oldPlayer.style.height = "0px";
  oldPlayer.style.padding = "0px";
}
