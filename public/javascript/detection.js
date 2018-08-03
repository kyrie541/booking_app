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

var y = document.getElementById("myAudio"); 

setInterval(function(){ 
    if(timeCheck()){
        y.loop = true;
        y.play();
        detection();
    }
}, 1000);

// function detection(){
//     var hehe= new Date();
//     var hours = hehe.getHours();
//     var minutes = hehe.getMinutes(); 
//     minutes = checkTime(minutes);
//     var hours_minutes = hours.toString()+minutes.toString();
//     var selected_column = document.getElementsByClassName(hours_minutes);
    
//     var hehe2 = new Date();
//     hehe2.setMinutes(hehe2.getMinutes()-30);
//     var hours2 = hehe2.getHours();
//     var minutes2 = hehe2.getMinutes();
//     minutes2 = checkTime(minutes2);
//     var hours_minutes2 = hours2.toString()+minutes2.toString();
//     var previous_column = document.getElementsByClassName(hours_minutes2);
    
//     var courtNum_array=["P1","P2","P3","P4","P5","P6","P7","P8","B1","B2","B3","B4","B5","B6","B7","B8","R1","R2","R3","R4"];
//     var on_array=[];
//     var off_array=[];
//     var on_off_array=[];
    
//     for(var i=0; i<selected_column.length ; i++){
//         //for on
//         if(selected_column[i].style.backgroundColor=="chartreuse" || selected_column[i].style.backgroundColor=="powderblue" ){
//             if(previous_column[i].style.backgroundColor=="#feb694" || previous_column[i].style.backgroundColor=="" ){
//                 var chosen_court = courtNum_array[i];
//                 on_array.push(chosen_court);
//             } 
//             else{
//                 //check name
//                 if(selected_column[i].innerHTML != previous_column[i].innerHTML ){
//                     var chosen_court3 = courtNum_array[i];
//                     on_off_array.push(chosen_court3);
//                 }
                
//             }
//         }
//         //for off
//         else if(selected_column[i].style.backgroundColor=="#feb694" || selected_column[i].style.backgroundColor==""){
//             if(previous_column[i].style.backgroundColor=="chartreuse" || previous_column[i].style.backgroundColor=="powderblue" ){
//                 var chosen_court2 = courtNum_array[i];
//                 off_array.push(chosen_court2);
//             }
//         }
//     }
    
//     var on_string=on_array.join(", ");
//     var off_string=off_array.join(", ");
//     var on_off_string=on_off_array.join(", ");
    
//     alert("On: " + on_string+ "\nOff: " + off_string + "\nOn and Off: "+on_off_string);
// } 

function detection (){
    
    var hehe= new Date();
    var hours = hehe.getHours();
    var minutes = hehe.getMinutes(); 
    minutes = checkTime(minutes);
    var hours_minutes = hours.toString()+minutes.toString();
    
    //take note: hours_minutes is string type
    var ori_minute = hours_minutes[hours_minutes.length -2]+hours_minutes[hours_minutes.length -1];
    var int_ori_minute = parseInt(ori_minute,10);
    var ori_hour;
    var previous_column_string;
    var selected_column_string;
    
    if(int_ori_minute<30){      
        if(hours_minutes[hours_minutes.length -4]==undefined){
            ori_hour = hours_minutes[hours_minutes.length -3];
        }else{
            ori_hour = hours_minutes[hours_minutes.length -4]+hours_minutes[hours_minutes.length -3];
        }
        var int_ori_hour = parseInt(ori_hour,10);
        var new_hour = int_ori_hour-1;
        previous_column_string = new_hour.toString() + "30";
        selected_column_string = ori_hour + "00";
        
    }else{
        if(hours_minutes[hours_minutes.length -4]==undefined){
            ori_hour = hours_minutes[hours_minutes.length -3];
        }else{
            ori_hour = hours_minutes[hours_minutes.length -4]+hours_minutes[hours_minutes.length -3];
        }
        previous_column_string =ori_hour + "00";
        selected_column_string = ori_hour + "30";
    }
    
    var selected_column = document.getElementsByClassName(selected_column_string);
    
    var previous_column = document.getElementsByClassName(previous_column_string);

    var courtNum_array=["P1","P2","P3","P4","P5","P6","P7","P8","B1","B2","B3","B4","B5","B6","B7","B8","R1","R2","R3","R4"];
    var on_array=[];
    var off_array=[];
    var on_off_array=[];
    
    for(var i=0; i<selected_column.length ; i++){
        //for on
        if(selected_column[i].style.backgroundColor=="chartreuse" || selected_column[i].style.backgroundColor=="powderblue" ){
            if(previous_column[i].style.backgroundColor=="#feb694" || previous_column[i].style.backgroundColor=="" ){
                var chosen_court = courtNum_array[i];
                on_array.push(chosen_court);
            } 
            else{
                //check name
                if(selected_column[i].innerHTML != previous_column[i].innerHTML ){
                    var chosen_court3 = courtNum_array[i];
                    on_off_array.push(chosen_court3);
                }
            }
        }
        //for off
        else if(selected_column[i].style.backgroundColor=="#feb694" || selected_column[i].style.backgroundColor==""){
            if(previous_column[i].style.backgroundColor=="chartreuse" || previous_column[i].style.backgroundColor=="powderblue" ){
                var chosen_court2 = courtNum_array[i];
                off_array.push(chosen_court2);
            }
        }
    }
    
    var on_string=on_array.join(", ");
    var off_string=off_array.join(", ");
    var on_off_string=on_off_array.join(", ");
    
    var modal_show = document.getElementsByClassName("modal-body");
    modal_show[0].innerHTML = "On: " + on_string+ "<br>Off: " + off_string + "<br>On and Off: "+on_off_string;
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;  // add zero in front of numbers < 10
    } 
    return i;
}




