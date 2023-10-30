function openNewTab() {
  const newTab = window.open("ht://newtab", "_blank");

  if (newTab === null) {
    return;
  }

  newTab.focus();
}

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.keyCode === 84) {
    openNewTab();
  }
});
