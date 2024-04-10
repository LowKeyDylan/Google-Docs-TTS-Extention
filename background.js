// background.js
chrome.contextMenus.create({
  id: "read-highlighted-text",
  title: "Read Aloud",
  contexts: ["selection"] // Show the menu option only for text selections
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "read-highlighted-text") {
    chrome.tabs.sendMessage(tab.id, { action: "readText" });
  }
});
