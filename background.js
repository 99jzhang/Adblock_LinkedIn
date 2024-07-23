chrome.webNavigation.onCommitted.addListener(function (details) {
    if (details.frameId === 0 && details.url.includes("linkedin.com")) {
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ['linkedin.js']
        });
    }
});
