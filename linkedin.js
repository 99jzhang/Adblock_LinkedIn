function removeAds() {
    // Get all 'span' elements on the page
    let spans = document.getElementsByTagName("span");

    // Loop through all 'span' elements
    for (let i = 0; i < spans.length; ++i) {
        // Check if the 'span' element contains the text 'Promoted'
        if (spans[i].innerHTML === "Promoted") {
            // Get the closest parent element with class 'feed-shared-update-v2' (the ad container)
            let card = spans[i].closest(".feed-shared-update-v2");

            // If the closest parent element is not found, traverse up to 6 levels of parent nodes
            if (card === null) {
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }

            // Hide the ad container by setting its display style to 'none'
            card.setAttribute("style", "display: none !important;");
        }
    }
}

// Initial call to remove ads present when the script first runs
removeAds();

// Set up an interval to call the removeAds function every 100 milliseconds
// This ensures that ads appearing as the user scrolls down the feed are also removed
setInterval(function () {
    removeAds();
}, 100);
