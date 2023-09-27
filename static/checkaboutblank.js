let checkEnabled = true;

function checkPopupsAndRedirects() {
  if (!checkEnabled) {
    return;
  }

  const popupWindow = window.open("https://skydiver-web.cyclic.app", "_blank");

  setTimeout(function () {
    if (!popupWindow || popupWindow.closed || popupWindow.innerWidth === 0) {
      // Popup is blocked or closed, show the popup message
      const popupResult = window.confirm(
        "Enable popups and redirects in your browser settings, then please click 'OK' to continue."
      );
      if (popupResult) {
        // User clicked 'OK', check again
        checkEnabled = false; // Disable further checks
        checkPopupsAndRedirects();
      } else {
        // User clicked 'Cancel' or closed the popup, keep showing the popup
        setTimeout(checkPopupsAndRedirects, 1000); // Show the popup again after 1 second
      }
    }
  }, 1000); // Check after 1 second
}

checkPopupsAndRedirects();
