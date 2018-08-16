/* global $ */


$(document).keypress(function(event){
    var x = document.getElementsByClassName("carousel-control");
    if(event.which==91){
        x[0].click();
    }else if(event.which==93){
        x[1].click();
    }
});




