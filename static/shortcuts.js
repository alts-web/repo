window.addEventListener("load", function() {
  // Add the keyboard listener to the current tab.
  window.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.keyCode === 84) {
      event.preventDefault();
      newTab('ht://newtab');
    }
  });
});

function newTab(url) {
  // Create a new tab.
  var tab = window.open(url, '_blank');

  // Add the keyboard listener to the new tab.
  tab.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.keyCode === 84) {
      event.preventDefault();
      newTab('ht://newtab');
    }
  });
}
