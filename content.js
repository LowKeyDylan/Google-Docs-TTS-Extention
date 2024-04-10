// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "readText") {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      // Use Text-To-Speech here (See the next section)
    } else {
      // Handle the case where no text is selected
    }
  }
});
