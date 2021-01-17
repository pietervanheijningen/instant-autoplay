function loadObserver() {
    let element = document.getElementsByClassName('ytp-upnext')[0];

    let observer = new MutationObserver(function (mutationsList) {
        for (let mutationRecord of mutationsList) {
            if (mutationRecord.attributeName === "style" && mutationRecord.target.className === "ytp-upnext ytp-player-content ytp-suggestion-set") {
                mutationRecord.target.querySelector("a.ytp-upnext-autoplay-icon").click();
            }
        }
    });

    observer.observe(element, {attributes: true, subtree: true});
}

loadObserver();

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg === "reloadObserver") {
        setTimeout(loadObserver, 1000)
    }
});
