function showSiteContent() {
  document.body.style.display = "none"; // Show the site content
}

function checkPopupsAndRedirects() {
  if (window.self === window.top || document.location.href === "about:blank") {
    // If the page is not iframed or is the about:blank page
    if (!window.confirm("Enable popups and redirects to continue.")) {
      alert("Please enable popups and redirects to continue.");
      setTimeout(checkPopupsAndRedirects, 1000); // Check again after 1 second
      document.body.style.display = "none";
    } else {
      showSiteContent();
      location.reload(); // Reload the website once the user enables popups and redirects
    }
  } else {
    // If the page is iframed
    showSiteContent();
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
  setInterval(checkPopupsAndRedirects, 1000); // Repeat the check every second
});
