

getUser(function(items){
    feeds = CSIRTG.feeds({token: items.token, user: items.user, success: function(data){
        var select = document.getElementById("feeds");
        var feed_default = items.feed;

        for(var i = 0; i < data.length; i++) {
            option = document.createElement("option");
            option.value = data[i].name;
            if(feed_default != '' && data[i].name == feed_default){
                option.selected = true;
            }
            option.innerHTML = data[i].name;
            select.appendChild(option);
        }
    }});
});



function objectifyForm(formArray) {//serialize data function

    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}


$( "#indicator_form" ).on( "submit", function( event ) {
    event.preventDefault();
    a = $( this ).serializeArray();
    a = objectifyForm(a);
    var e = document.getElementById("feeds");
    var feed = e.options[e.selectedIndex].text;

    getUser(function(items){
        CSIRTG.submit(
            {
                token: items.token, user: items.user, feed: feed, data: a,
                success: function(data, textStatus, xhr){
                    $("#results").html(
                        '<div class="alert alert-success">Successfully submitted ' + a.indicator + '</div>'
                    ).fadeOut(10000);
                },
                error: function(data, textStatus, xhr) {
                    $("#results").html(
                        '<div class="alert alert-danger">Submission Failed: ' + textStatus + '</div>'
                    ).fadeOut(10000);
                }
            }
        )
    });

});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Handle message.
    // In this example, message === 'whatever value; String, object, whatever'
    document.getElementById("indicator").value = message;
});


// Ajax activity indicator bound to ajax start/stop document events
$(document).ajaxStart(function(){
    $('#ajaxBusy').show();
}).ajaxStop(function(){
    $('#ajaxBusy').hide();
});