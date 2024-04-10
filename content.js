// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "readText") {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      let utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.lang = "en-US"; // Adjust the language as needed
      speechSynthesis.speak(utterance);

    } else {
      // Handle the case where no text is selected
    }
  }
});
