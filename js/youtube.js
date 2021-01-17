function loadObserver() {
    console.log("loading observer");
    let element = document.getElementsByClassName('ytp-upnext')[0];

    if (element !== undefined) {
        let observer = new MutationObserver(function (mutationsList) {
            for (let mutationRecord of mutationsList) {
                if (mutationRecord.attributeName === "style" && mutationRecord.target.className === "ytp-upnext ytp-player-content ytp-suggestion-set") {
                    mutationRecord.target.querySelector("a.ytp-upnext-autoplay-icon").click();
                }
            }
        });

        console.log(element);
        observer.observe(element, {attributes: true, subtree: true});
    }
}

setTimeout(loadObserver, 5000);

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg === "reloadObserver") {
        setTimeout(loadObserver, 5000)
    }
});
