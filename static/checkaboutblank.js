function checkPopupsAndRedirects() {
  if (document.location.href !== "about:blank") {
    // If the page is not about:blank
    if (window.self === window.top) {
      // If the page is not iframed
      var popupInterval = setInterval(function() {
        if (!window.confirm("Enable popups and redirects to continue.")) {
          alert("Please enable popups and redirects to continue.");
        } else {
          clearInterval(popupInterval); // Stop showing the popup
          document.body.style.display = "block"; // Show the site content
        }
      }, 1000); // Show the popup every 1 second
      document.body.style.display = "none"; // Hide the site content
    } else {
      // If the page is iframed
      document.body.style.display = "block"; // Show the site content
    }
  } else {
    // If the page is about:blank
    document.body.style.display = "block"; // Show the site content
  }
}

var enterPressed = false;

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    enterPressed = true;
  }
});

document.addEventListener("keyup", function(event) {
  if (event.key === "Enter" && enterPressed) {
    enterPressed = false;
    checkPopupsAndRedirects();
    event.preventDefault(); // Prevent the default browser behavior when the Enter key is pressed
  }
});

document.addEventListener("DOMContentLoaded", function() {
  checkPopupsAndRedirects();
});
