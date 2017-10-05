// Saves options to chrome.storage
function save_options() {
    var user = document.getElementById('user').value;
    var token = document.getElementById('token').value;
    var feed = document.getElementById('feed').value;

    chrome.storage.sync.set({
        user: user,
        token: token,
        feed: feed
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        user: '',
        token: '',
        feed: '',
    }, function(items) {
        document.getElementById('user').value = items.user;
        document.getElementById('token').value = items.token;
        document.getElementById('feed').value = items.feed;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);