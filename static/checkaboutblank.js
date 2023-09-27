function showSiteContent() {
  document.body.style.display = "block"; // Show the site content
}

function checkPopupsAndRedirects() {
  if (window.self === window.top || document.location.href === "about:blank") {
    // If the page is not iframed or is the about:blank page
    if (!localStorage.getItem('popupFlag')) {
      // Continuously show the popup until popups and redirects are enabled
      const confirmationResult = window.confirm("Enable popups and redirects, then please reload the page.");
      if (confirmationResult) {
        // Set the flag in localStorage to "true" after displaying the popup
        localStorage.setItem('popupFlag', 'true');
        // Reload the page once the user enables popups and redirects and clicks "OK"
        location.reload();
      }
    } else {
      showSiteContent();
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
