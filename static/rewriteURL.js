window.addEventListener('load', function() {
  // Get the current URL
  const currentURL = window.location.href;

  // Check if the current URL ends with "/"
  if (currentURL.endsWith('/')) {
    // Remove the trailing "/"
    const newURL = currentURL.slice(0, currentURL.length - 1);

    // Rewrite the URL
    window.location.href = newURL;
  }
