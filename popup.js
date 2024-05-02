document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', function() {
        // 向 content script 發送消息
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'start'}, function(response) {
                console.log(response);
            });
        });
    });
});
