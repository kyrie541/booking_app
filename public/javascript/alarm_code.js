var currentTime;

//time checking code
function timeCheck(){
    currentTime= document.getElementById('txt').innerHTML;
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

//alarm Code
var x = document.getElementById("myAudio"); 
setInterval(function(){ 
    if(timeCheck()){
        x.loop = true;
        x.play();
    }
}, 1000);


function pauseAudio() { 
    x.pause(); 
}

//Clock Code
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    "Current Time: " + h + ":" + m + ":" + s;
    
    var day= today.getDate();
    var month= today.getMonth()+1;
    day = checkTime(day);
    month = checkTime(month);
    
    var year= today.getFullYear();
    document.getElementById('date').innerHTML =
    "Date: " + day + "-" + month + "-" + year;
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}