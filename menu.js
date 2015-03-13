var id = chrome.contextMenus.create({"title": "Search WhiteFace for '%s'",
    "contexts":['selection'],
    "onclick": function(info, tab){
        chrome.tabs.create({
            url: "https://whiteface.csirtgadgets.com/search?q=" + info['selectionText']
        });
    }
});
//
//var id1 = chrome.contextMenus.create({"title": "Submit '%s'",
//    "contexts":['selection'],
//    "onclick": function(info, tab){
//        chrome.tabs.create({
//            url: "https://whiteface.csirtgadgets.com/search?q=" + info['selectionText']
//        });
//    }
//});

chrome.omnibox.onInputEntered.addListener(
    function(text) {
        chrome.tabs.create({ url: 'https://whiteface.csirtgadgets.com/search?q=' + text})
    }
);