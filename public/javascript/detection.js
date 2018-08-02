var currentTime= document.getElementById('txt').innerHTML;  //take note: this will return nothing since alarm_code.js havent run yet, so the text will be empty
var carousel_class = document.getElementsByClassName("carousel-item") ;

var haha= new Date();
var h = haha.getHours();
if(h>=14){
    carousel_class[0].className="carousel-item";
    carousel_class[1].className="carousel-item active";
}else if(h>=20){
    carousel_class[0].className="carousel-item";
    carousel_class[2].className="carousel-item active";
}


function timeCheck(){
    if(currentTime == "Current Time: 8:00:00" || currentTime == "Current Time: 8:30:00" || currentTime == "Current Time: 9:00:00" || currentTime == "Current Time: 9:30:00" 
    || currentTime == "Current Time: 10:00:00" || currentTime == "Current Time: 10:30:00" || currentTime == "Current Time: 11:00:00" || currentTime == "Current Time: 11:30:00" 
    || currentTime == "Current Time: 12:00:00" || currentTime == "Current Time: 12:30:00" || currentTime == "Current Time: 13:00:00" || currentTime == "Current Time: 13:30:00"
    || currentTime == "Current Time: 14:00:00" || currentTime == "Current Time: 14:30:00" || currentTime == "Current Time: 15:00:00" || currentTime == "Current Time: 15:30:00"
    || currentTime == "Current Time: 16:00:00" || currentTime == "Current Time: 16:30:00" || currentTime == "Current Time: 17:00:00" || currentTime == "Current Time: 17:30:00"
    || currentTime == "Current Time: 18:00:00" || currentTime == "Current Time: 18:30:00" || currentTime == "Current Time: 19:00:00" || currentTime == "Current Time: 19:30:00"
    || currentTime == "Current Time: 20:00:00" || currentTime == "Current Time: 20:30:00" || currentTime == "Current Time: 21:00:00" || currentTime == "Current Time: 21:30:00"
    || currentTime == "Current Time: 21:00:00" || currentTime == "Current Time: 21:30:00" || currentTime == "Current Time: 22:00:00" || currentTime == "Current Time: 22:30:00"
    || currentTime == "Current Time: 23:00:00" || currentTime == "Current Time: 23:30:00" || currentTime == "Current Time: 0:00:00" || currentTime == "Current Time: 0:30:00"
    || currentTime == "Current Time: 1:00:00" || currentTime == "Current Time: 1:30:00" || currentTime == "Current Time: 2:00:00" || currentTime == "Current Time: 2:30:00")
    {return true}
}

setInterval(function(){ 
    if(timeCheck()){
        detection();
    }
}, 1000);


function detection(){
    alert("I am an alert box!");
} 