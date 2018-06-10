var sound = new Howl({
  src: ["audio/dejavu.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.5,
  onend: function() {
    console.log("Finished!");
  }
});

sound.on("load", function() {
  var startButton = document.getElementsByTagName("startsong")[0];
  startButton.addEventListener("click", function() {
    if (sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  });
});
