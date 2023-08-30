   function showSiteContent() {
  document.body.style.display = "block"; // Show the site content
}

function checkPopupsAndRedirects() {
  if ((window.self === window.top || document.location.href === "about:blank") && !window.localStorage.getItem("popupShown")) {
    // If the page is not iframed or is the about:blank page, and the popup has not been shown before
    if (!window.confirm("Enable popups and redirects to continue.")) {
      alert("Please enable popups and redirects to continue.");
      window.localStorage.setItem("popupShown", true); // Mark the popup as shown
      setTimeout(checkPopupsAndRedirects, 1000); // Check again after 1 second
      document.body.style.display = "none";
    } else {
      showSiteContent();
    }
  } else {
    // If the page is iframed or the popup has been shown before
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
  checkPopupsAndRedirects();
});
