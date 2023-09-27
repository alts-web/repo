function checkPopupsAndRedirects() {
  const popupFlag = localStorage.getItem('popupFlag');
  const popupsEnabled = (window.innerWidth > 0) || (window.innerHeight > 0);

  if (!popupFlag) {
    if (popupsEnabled) {
      // Popups are enabled, set the flag and reload the page
      localStorage.setItem('popupFlag', 'enabled');
      location.reload();
    } else {
      // User hasn't enabled popups and redirects yet, show the popup
      const popupResult = window.confirm("Enable popups and redirects in your browser settings, then please click 'OK' to continue.");
      if (!popupResult) {
        // User clicked 'Cancel' or closed the popup, keep showing the popup
        setTimeout(checkPopupsAndRedirects, 1000); // Show the popup again after 1 second
      }
    }
  }
}

const popupFlag = localStorage.getItem('popupFlag');
if (!popupFlag) {
  // Popups and redirects are not enabled, show the popup continuously
  checkPopupsAndRedirects();
}
