function loadSiteInBackground() {
  const iframe = document.createElement('iframe');
  iframe.src = "https://skydiver-web.cyclic.app"; // Replace with your site's URL
  iframe.style.display = "none"; // Hide the iframe
  document.body.appendChild(iframe);

  iframe.addEventListener("load", function () {
    // When the iframe is fully loaded, it means the site has loaded in the background
    document.body.removeChild(iframe); // Remove the hidden iframe
  });
}

function showPopup() {
  const confirmationResult = window.confirm("Enable popups and redirects, then please click 'OK' to continue.");
  if (confirmationResult) {
    // User clicked 'OK', enable popups and redirects
    localStorage.setItem('popupFlag', 'enabled');
    // You can load the site in the background here
    loadSiteInBackground();
  } else {
    // User clicked 'Cancel' or closed the popup, keep showing the popup
    setTimeout(showPopup, 1000); // Show the popup again after 1 second
  }
}

function checkPopupsAndRedirects() {
  const popupFlag = localStorage.getItem('popupFlag');
  if (!popupFlag) {
    // Popups and redirects are not enabled, show the popup
    showPopup();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  checkPopupsAndRedirects(); // Check popups and redirects when the page loads
});
