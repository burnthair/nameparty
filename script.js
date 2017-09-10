// Establish jQuery availabilty
$(document).ready(function() {
  function randomLetter() {
    return Math.floor(Math.random() * 22 + 1);
  };
  function randomPixel() {
    return Math.floor(Math.random() * 3 - 3) + 'px';
  };
  function randomColor() {
    var colors = ['#33658a','#86bbd8','#f6ae2d','#f26419'];
    return colors[Math.floor(Math.random() * 4)];
  };
  function applyAnimation() {
    for (var i = 1; i < 21; i = randomLetter()) {
      $(".char" + randomLetter())
        .animate({ color: randomColor() }, 400)
        .animate({ top: randomPixel(), left: randomPixel() }, 400)
        .animate({ top: randomPixel(), left: randomPixel() }, 400);
    }
  }
// Apply lettering() to the name title
  $("#name-title").lettering()
// Fade in name container and assign a random color to name title letters on hover
  function intervalTrigger(time) {
    return setInterval(applyAnimation, time);
  };
  $('#start').click(function(){
    intervalTrigger(800);
  });
  $('#stop').click(function() {
    intervalTrigger(0);
    $('span[class^="char"]').stop(true, true);
  });
});
