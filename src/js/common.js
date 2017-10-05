function getUser(cb) {
    chrome.storage.sync.get({
        user: '',
        token: '',
        feed: ''
    }, cb);
}