function showSiteContent() {
  document.body.style.display = "block"; // Show the site content
}

function checkPopupsAndRedirects() {
  if (window.self === window.top || document.location.href === "about:blank") {
    // If the page is not iframed or is the about:blank page
    if (!localStorage.getItem('popupFlag')) {
      if (window.confirm("Enable popups and redirects, then please reload the page.")) {
        // Set the flag in localStorage to "true" after displaying the popup
        localStorage.setItem('popupFlag', 'true');
        
        // Reload the page once the user enables popups and redirects
        reloadAfterEnablingPopups();
      } else {
        alert("Opening in about:blank...");
        setTimeout(checkPopupsAndRedirects, 1000); // Check again after 1 second
        document.body.style.display = "none";
      }
    } else {
      showSiteContent();
    }
  } else {
    // If the page is iframed
    showSiteContent();
  }
}

function reloadAfterEnablingPopups() {
  setTimeout(function() {
    location.reload();
  }, 1000); // Delay the reload for 1 second
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
