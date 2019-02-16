chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("chrome.browserAction.onClicked.addListener()");
  chrome.tabs.create({'url': chrome.extension.getURL('page.html')}, function(tab) {
    console.log("chrome.tabs.create({'url': chrome.extension.getURL('page.html')}, ...)");
  });
});
