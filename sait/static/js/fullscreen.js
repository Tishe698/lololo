document.addEventListener('DOMContentLoaded', function() {
  var fullscreenLink = document.getElementById('fullscreen-link');

  if (fullscreenLink) {
    fullscreenLink.addEventListener('click', function(event) {
      event.preventDefault();

      // Check if the Fullscreen API is supported by the browser
      if (document.documentElement.requestFullscreen) {
        // Open the page in fullscreen mode
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer and Edge
        document.documentElement.msRequestFullscreen();
      }
    });
  }
});
