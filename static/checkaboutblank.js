function showPopup() {
  const confirmationResult = window.confirm("Enable popups and redirects in your browser settings, then please click 'OK' to continue.");
  if (confirmationResult) {
    // User clicked 'OK', check if popups and redirects are enabled
    const popupsEnabled = (window.innerWidth > 0) || (window.innerHeight > 0);
    if (popupsEnabled) {
      // Popups are enabled, remove the popup and reload the page
      localStorage.setItem('popupFlag', 'enabled');
      document.body.removeChild(popup);
      location.reload();
    } else {
      // Popups are still not enabled, keep showing the popup
      setTimeout(showPopup, 1000); // Show the popup again after 1 second
    }
  } else {
    // User clicked 'Cancel' or closed the popup, keep showing the popup
    setTimeout(showPopup, 1000); // Show the popup again after 1 second
  }
}

const popupFlag = localStorage.getItem('popupFlag');
if (!popupFlag) {
  // Popups and redirects are not enabled, show the popup
  const popup = document.createElement('div');
  popup.textContent = "Please enable popups and redirects in your browser settings.";
  document.body.appendChild(popup);
  showPopup();
}
