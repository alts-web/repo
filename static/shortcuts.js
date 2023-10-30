function openNewTab() {
  window.open("ht://newtab", "_blank");
}

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.keyCode === 84) {
    openNewTab();
  }
});
