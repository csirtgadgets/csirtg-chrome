

chrome.contextMenus.create({"title": "Search",
    "contexts":['selection'],
    "onclick": function(info, tab){
        chrome.tabs.create({
            url: "https://csirtg.io/search?q=" + info['selectionText']
        });
    }
});

chrome.contextMenus.create({"title": "Submit",
   "contexts":['selection'],
   "onclick": function(info, tab){
       chrome.tabs.create({
           url: chrome.extension.getURL('html/submit.html'),
           active: false
       }, function(tab) {
           // After the tab has been created, open a window to inject the tab
           chrome.windows.create({
               tabId: tab.id,
               type: 'popup',
               focused: true,
               width: 625,
               height: 575
               // incognito, top, left, ...
           });
           chrome.tabs.sendMessage(tab.id, info['selectionText']);
       });
   }
});

chrome.omnibox.onInputEntered.addListener(
    function(text) {
        chrome.tabs.create({ url: 'https://csirtg.io/search?q=' + text})
    }
);