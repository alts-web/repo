function showPopup() {
  const confirmationResult = window.confirm("Enable popups and redirects, then please click 'OK' to reload the page.");
  if (confirmationResult) {
    // User clicked 'OK', enable popups and redirects
    localStorage.setItem('popupFlag', 'enabled');
    location.reload(); // Reload the page
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
  } else {
    // Popups and redirects are enabled
    // Execute the script '/aboutblank.js'
    const script = document.createElement('script');
    script.src = '/aboutblank.js'; // Replace with the correct path to your script
    document.head.appendChild(script);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  checkPopupsAndRedirects(); // Check popups and redirects when the page loads
});
