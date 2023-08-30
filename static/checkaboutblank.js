function showSiteContent() {
  document.body.style.display = "block"; // Show the site content
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
    }
  } else {
    // If the page is iframed
    showSiteContent();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(checkPopupsAndRedirects, 1000); // Repeat the check every second
});

