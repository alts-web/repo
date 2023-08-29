function checkPopupsAndRedirects() {
  if (document.location.href !== "about:blank") {
    // If the page is not about:blank
    if (window.self === window.top) {
      // If the page is not iframed
        document.body.style.display = "none"; // Hides the site content
        alert("Please enable popups and redirects to continue.");
        setTimeout(checkPopupsAndRedirects, 1000); // Check again after 1 second
        return; // Exit the function
      }
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
