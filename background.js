chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.extension.getBackgroundPage().console.log("chrome.browserAction.onClicked.addListener()");
  chrome.tabs.create({'url': chrome.extension.getURL('page.html')}, function(tab) {
    chrome.extension.getBackgroundPage().console.log("chrome.tabs.create({'url': chrome.extension.getURL('page.html')}, ...)");
    chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
      chrome.extension.getBackgroundPage().console.log("chrome.tabs.executeScript(null, { file: 'jquery.min.js' }, ...)");
      chrome.tabs.executeScript(null, { file: "content.js" });
    });
  });
});
