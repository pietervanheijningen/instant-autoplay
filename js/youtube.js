function loadObserver() {
    let element = document.getElementsByClassName('ytp-autonav-endscreen-countdown-container')[0];

    if (element !== undefined) {
        let observer = new MutationObserver(function (mutationsList) {
            for (let mutationRecord of mutationsList) {
                if (mutationRecord.attributeName === "style") {
                    if (mutationRecord.target.className === "ytp-autonav-endscreen-button-container") {
                        mutationRecord.target.querySelector("a.ytp-autonav-endscreen-upnext-play-button").click();
                    }
                }
            }
        });

        console.log(element);
        observer.observe(element, {attributes: true, subtree: true});
    }
}

setTimeout(loadObserver, 3000);

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg === "reloadObserver") {
        setTimeout(loadObserver, 3000)
    }
});
