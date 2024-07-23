// ManifestV3 Chrome Extensions API: https://developer.chrome.com/docs/extensions/reference

// Listen for when the web navigation is committed (i.e., when the page has started loading)
chrome.webNavigation.onCommitted.addListener(function (details) {
    // Check if the navigation is for the main frame (frameId === 0) and if the URL contains "linkedin.com"
    if (details.frameId === 0 && details.url.includes("linkedin.com")) {
        // Inject the 'linkedin.js' script into the tab where the navigation occurred
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },  // Specify the target tab
            files: ['linkedin.js']  /
        });
    }
});

