// shortcuts.js
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.keyCode === 84) {
    event.preventDefault();
    newTab('ht://newtab');
  }
});
