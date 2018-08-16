/* global $ */
/* global badmintonOption */
/* global futsalOption  */

$(document).ready(function(){
    $.getJSON("/api/bookings/date/"+getTodayDate())
    .then(showBookings);
});

function backToOriginal(haha){
    haha.style.backgroundColor="white";
    haha.style.color="white"; 
}

function hoverOverEffect(){
    var xb = document.getElementsByClassName("white");
    
    for (let ijkl=0; ijkl<xb.length; ijkl++){
        xb[ijkl].onmouseover = function() {};
        xb[ijkl].onmouseout = function() {}; 
        xb[ijkl].removeAttribute("data-toggle");
        xb[ijkl].removeAttribute("data-target");
        
        if (xb[ijkl].style.backgroundColor=="white"){
            xb[ijkl].onmouseover = function() {mouseOver(this)};
            xb[ijkl].onmouseout = function() {mouseOut(this)};
            // xb[ijkl].setAttribute("data-toggle", "modal"); 
            // xb[ijkl].setAttribute("data-target", "#exampleModalCenter2");

            xb[ijkl].onclick = function() {changeNewForm(this)};

        }
    }
}



function changeNewForm(haha){
    if(haha.style.backgroundColor == "rgb(112, 128, 144)"){
        haha.style.backgroundColor ="white";
        haha.onmouseover = function() {mouseOver(this)};
        var td = document.getElementsByClassName("white");
        var checkingArray=[];
        for (var i=0; i<td.length; i++){
            if(td[i].style.backgroundColor=="rgb(112, 128, 144)"){
                checkingArray.push(i);
            }
        }
        if(checkingArray.length==0){
            document.getElementById("bookNowButton").style.visibility = "hidden";
            var td3 = document.getElementsByClassName("white");
            for(var i3=0; i3<td3.length; i3++){
                if(td3[i3].style.backgroundColor=="white" || td3[i3].style.backgroundColor=="rgb(112, 128, 144)"){
                    td3[i3].onclick = function() {changeNewForm(this)};
                }
            }
        }
    }else{
        haha.style.backgroundColor = "#708090";
        var parentOfRow_innerHTML=haha.parentElement.childNodes[1].innerHTML;
        var td2 = document.getElementsByClassName("white");
        var colorArray=[];
        for(var i2=0; i2<td2.length; i2++){
            if(td2[i2].parentElement.childNodes[1].innerHTML != parentOfRow_innerHTML){
                td2[i2].onclick = function() {};
            }
            if(td2[i2].style.backgroundColor=="rgb(112, 128, 144)"){
                colorArray.push(i);
            }
        }
        if (colorArray.length==2){
            document.getElementById("bookNowButton").click();
            var td4 = document.getElementsByClassName("white");
            for(var i4=0; i4<td4.length; i4++){
                if(td4[i4].style.backgroundColor=="rgb(112, 128, 144)"){
                    td4[i4].style.backgroundColor="white";
                }
                if(td4[i4].style.backgroundColor=="white"){
                    td4[i4].onclick = function() {changeNewForm(this)};
                }
                
            }
        }
    }
    //control date
    var show_date = document.getElementById("show_date");
    var show_date2 = document.getElementById("show_date2");
    show_date2.value=show_date.value ;
    
    //control start time
    var start_time_value = haha.innerHTML;
    var text = start_time_value.substring(0, start_time_value.lastIndexOf('-'));
    var start_time_dropDownList = document.getElementsByClassName("start_time_drop_down_list");
    start_time_dropDownList[0].value=text;
    
    //control sport category
    
    var courtName= haha.parentElement.childNodes[1].innerHTML;
    if (courtName[0]=="P" || courtName[0]=="B"){
        document.getElementById("badminton_radio_button").checked = true;
        badmintonOption();
    }else if(courtName[0]=="R"){
        document.getElementById("futsal_radio_button").checked = true;
        futsalOption();
    }

    
    var courtNumber_show_box= document.getElementById("courtNumberID");
    courtNumber_show_box.value = courtName; 
    
}

function mouseOver(haha){
    haha.style.backgroundColor = "#D3D3D3";
    
}

function mouseOut(hehe){
    if(hehe.style.backgroundColor != "rgb(112, 128, 144)"){
        hehe.style.backgroundColor = "white";
    }else{
        hehe.onmouseover = function() {};
        document.getElementById("bookNowButton").style.visibility = "visible";
    }
}

function showBookings(bookings){
    
    //wipe all column code here
    var all_column = document.getElementsByClassName("white");
    
    //wipe table1
    for(var v=0; v<240; v+=12){
        backToOriginal(all_column[v]);
        all_column[v].innerHTML="8am-8.30am";
        // all_column[v].className ="cell";
        
        backToOriginal(all_column[v+1]);
        all_column[v+1].innerHTML="8.30am-9am";
        
        backToOriginal(all_column[v+2]);
        all_column[v+2].innerHTML="9am-9.30am";
        
        backToOriginal(all_column[v+3]);
        all_column[v+3].innerHTML="9.30am-10am";
        
        backToOriginal(all_column[v+4]);
        all_column[v+4].innerHTML="10am-10.30am";
        
        backToOriginal(all_column[v+5]);
        all_column[v+5].innerHTML="10.30am-11am";
        
        backToOriginal(all_column[v+6]);
        all_column[v+6].innerHTML="11am-11.30am";
        
        backToOriginal(all_column[v+7]);
        all_column[v+7].innerHTML="11.30am-12pm";
        
        backToOriginal(all_column[v+8]);
        all_column[v+8].innerHTML="12pm-12.30pm";
        
        backToOriginal(all_column[v+9]);
        all_column[v+9].innerHTML="12.30pm-1pm";
        
        backToOriginal(all_column[v+10]);
        all_column[v+10].innerHTML="1pm-1.30pm";
        
        backToOriginal(all_column[v+11]);
        all_column[v+11].innerHTML="1.30pm-2pm";
    }
    
    //wipe table2
    for(var v1=240; v1<480; v1+=12){
        backToOriginal(all_column[v1]);
        all_column[v1].innerHTML="2pm-2.30pm";
        
        backToOriginal(all_column[v1+1]);
        all_column[v1+1].innerHTML="2.30pm-3pm";
        
        backToOriginal(all_column[v1+2]);
        all_column[v1+2].innerHTML="3pm-3.30pm";
        
        backToOriginal(all_column[v1+3]);
        all_column[v1+3].innerHTML="3.30pm-4pm";
        
        backToOriginal(all_column[v1+4]);
        all_column[v1+4].innerHTML="4pm-4.30pm";
        
        backToOriginal(all_column[v1+5]);
        all_column[v1+5].innerHTML="4.30pm-5pm";
        
        backToOriginal(all_column[v1+6]);
        all_column[v1+6].innerHTML="5pm-5.30pm";
        
        backToOriginal(all_column[v1+7]);
        all_column[v1+7].innerHTML="5.30pm-6pm";
        
        backToOriginal(all_column[v1+8]);
        all_column[v1+8].innerHTML="6pm-6.30pm";
        
        backToOriginal(all_column[v1+9]);
        all_column[v1+9].innerHTML="6.30pm-7pm";
        
        backToOriginal(all_column[v1+10]);
        all_column[v1+10].innerHTML="7pm-7.30pm";
        
        backToOriginal(all_column[v1+11]);
        all_column[v1+11].innerHTML="7.30pm-8pm";
        
    }
    
    //wipe table3
    for(var v2=480; v2<760; v2+=14){
        backToOriginal(all_column[v2]);
        all_column[v2].innerHTML="8pm-8.30pm";
        
        backToOriginal(all_column[v2+1]);
        all_column[v2+1].innerHTML="8.30pm-9pm";
        
        backToOriginal(all_column[v2+2]);
        all_column[v2+2].innerHTML="9pm-9.30pm";
        
        backToOriginal(all_column[v2+3]);
        all_column[v2+3].innerHTML="9.30pm-10pm";
        
        backToOriginal(all_column[v2+4]);
        all_column[v2+4].innerHTML="10pm-10.30pm";
        
        backToOriginal(all_column[v2+5]);
        all_column[v2+5].innerHTML="10.30pm-11pm";
        
        backToOriginal(all_column[v2+6]);
        all_column[v2+6].innerHTML="11pm-11.30pm";
        
        backToOriginal(all_column[v2+7]);
        all_column[v2+7].innerHTML="11.30pm-12am";
        
        backToOriginal(all_column[v2+8]);
        all_column[v2+8].innerHTML="12am-12.30am";
        
        backToOriginal(all_column[v2+9]);
        all_column[v2+9].innerHTML="12.30am-1am";
        
        backToOriginal(all_column[v2+10]);
        all_column[v2+10].innerHTML="1am-1.30am";
        
        backToOriginal(all_column[v2+11]);
        all_column[v2+11].innerHTML="1.30am-2am";
        
        backToOriginal(all_column[v2+12]);
        all_column[v2+12].innerHTML="2am-2.30am";
        
        backToOriginal(all_column[v2+13]);
        all_column[v2+13].innerHTML="2.30am-3am";
        
    }

//scanning code here    
var all_timing = ["8am", "8.30am","9am","9.30am", "10am", "10.30am", "11am", "11.30am", "12pm", "12.30pm", "1pm", "1.30pm", "2pm", "2.30pm", "3pm", "3.30pm", "4pm", "4.30pm", "5pm", "5.30pm", "6pm", "6.30pm", "7pm", "7.30pm", "8pm", "8.30pm", "9pm", "9.30pm", "10pm", "10.30pm", "11pm", "11.30pm", "12am", "12.30am", "1am", "1.30am", "2am", "2.30am", "3am"];
var badminton_table = document.getElementsByClassName("badminton_table"); 
var futsal_table = document.getElementsByClassName("futsal_table");

//R1
var R1_row_of_first_table= futsal_table[0].children[0].children[1];
var R1_row_of_second_table= futsal_table[1].children[0].children[1];
var R1_row_of_third_table= futsal_table[2].children[0].children[1];

var database_R1_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("R1")){
        database_R1_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_R1_array.length; i2++){
    for(var i3=0; i3<database_R1_array[i2][1][0].split(",").length; i3++){
        if(database_R1_array[i2][1][0].split(",")[i3] =="R1"){
            var haha= database_R1_array[i2][1][0].split(",")[i3];
            database_R1_array[i2].push([database_R1_array[i2][1][1].split(",")[i3]+ "," +database_R1_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_R1_array[i2].splice(1,1);
}

for(var i4=0; i4<database_R1_array.length ;i4++){
    for(var i5=1; i5<database_R1_array[i4].length; i5++ ){
            var startTime = database_R1_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_R1_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_R1_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_R1_array.length ;i7++){
    if(Array.isArray(database_R1_array[i7][5])){
        database_R1_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_R1_array[i7][4])){
        database_R1_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_R1_array[i7][3])){
        database_R1_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_R1_array[i7][2])){
        database_R1_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_R1_array[i7][1])){
        database_R1_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_R1_array.length; i8++){
    for(var i9=1; i9<database_R1_array[i8].length; i9++){
        for(var i10=1; i10<R1_row_of_first_table.children.length; i10++){
            if(database_R1_array[i8][i9]==R1_row_of_first_table.children[i10].innerHTML){
                R1_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R1_array[i8][0].id+"' onclick='show_request(this)'>" + database_R1_array[i8][0].name + "</button><br>"+database_R1_array[i8][0].contactNum;
                R1_row_of_first_table.children[i10].style.color = "black";
                if(database_R1_array[i8][0].status==1){
                     R1_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_R1_array[i8][0].status==2){
                    R1_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_R1_array[i8][0].status==3){
                    R1_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R1_array.length; i8++){
    for(var i9=1; i9<database_R1_array[i8].length; i9++){
        for(var i10=1; i10<R1_row_of_second_table.children.length; i10++){
            if(database_R1_array[i8][i9]==R1_row_of_second_table.children[i10].innerHTML){
                R1_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R1_array[i8][0].id+"' onclick='show_request(this)'>" + database_R1_array[i8][0].name + "</button><br>"+database_R1_array[i8][0].contactNum;
                R1_row_of_second_table.children[i10].style.color = "black";
                    if(database_R1_array[i8][0].status==1){
                         R1_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_R1_array[i8][0].status==2){
                        R1_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_R1_array[i8][0].status==3){
                        R1_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R1_array.length; i8++){
    for(var i9=1; i9<database_R1_array[i8].length; i9++){
        for(var i10=1; i10<R1_row_of_third_table.children.length; i10++){
            if(database_R1_array[i8][i9]==R1_row_of_third_table.children[i10].innerHTML){
                R1_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R1_array[i8][0].id+"' onclick='show_request(this)'>" + database_R1_array[i8][0].name + "</button><br>"+database_R1_array[i8][0].contactNum;
                R1_row_of_third_table.children[i10].style.color = "black";    
                    if(database_R1_array[i8][0].status==1){
                         R1_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_R1_array[i8][0].status==2){
                        R1_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_R1_array[i8][0].status==3){
                        R1_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//R2
var R2_row_of_first_table= futsal_table[0].children[0].children[2];
var R2_row_of_second_table= futsal_table[1].children[0].children[2];
var R2_row_of_third_table= futsal_table[2].children[0].children[2];

var database_R2_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("R2")){
        database_R2_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_R2_array.length; i2++){
    for(var i3=0; i3<database_R2_array[i2][1][0].split(",").length; i3++){
        if(database_R2_array[i2][1][0].split(",")[i3] =="R2"){
            var haha= database_R2_array[i2][1][0].split(",")[i3];
            database_R2_array[i2].push([database_R2_array[i2][1][1].split(",")[i3]+ "," +database_R2_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_R2_array[i2].splice(1,1);
}

for(var i4=0; i4<database_R2_array.length ;i4++){
    for(var i5=1; i5<database_R2_array[i4].length; i5++ ){
            var startTime = database_R2_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_R2_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_R2_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_R2_array.length ;i7++){
    if(Array.isArray(database_R2_array[i7][5])){
        database_R2_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_R2_array[i7][4])){
        database_R2_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_R2_array[i7][3])){
        database_R2_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_R2_array[i7][2])){
        database_R2_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_R2_array[i7][1])){
        database_R2_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_R2_array.length; i8++){
    for(var i9=1; i9<database_R2_array[i8].length; i9++){
        for(var i10=1; i10<R2_row_of_first_table.children.length; i10++){
            if(database_R2_array[i8][i9]==R2_row_of_first_table.children[i10].innerHTML){
                R2_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R2_array[i8][0].id+"' onclick='show_request(this)'>" + database_R2_array[i8][0].name + "</button><br>"+database_R2_array[i8][0].contactNum;
                R2_row_of_first_table.children[i10].style.color = "black";
                if(database_R2_array[i8][0].status==1){
                     R2_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_R2_array[i8][0].status==2){
                    R2_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_R2_array[i8][0].status==3){
                    R2_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R2_array.length; i8++){
    for(var i9=1; i9<database_R2_array[i8].length; i9++){
        for(var i10=1; i10<R2_row_of_second_table.children.length; i10++){
            if(database_R2_array[i8][i9]==R2_row_of_second_table.children[i10].innerHTML){
                R2_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R2_array[i8][0].id+"' onclick='show_request(this)'>" + database_R2_array[i8][0].name + "</button><br>"+database_R2_array[i8][0].contactNum;
                R2_row_of_second_table.children[i10].style.color = "black";
                    if(database_R2_array[i8][0].status==1){
                         R2_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_R2_array[i8][0].status==2){
                        R2_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_R2_array[i8][0].status==3){
                        R2_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R2_array.length; i8++){
    for(var i9=1; i9<database_R2_array[i8].length; i9++){
        for(var i10=1; i10<R2_row_of_third_table.children.length; i10++){
            if(database_R2_array[i8][i9]==R2_row_of_third_table.children[i10].innerHTML){
                R2_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R2_array[i8][0].id+"' onclick='show_request(this)'>" + database_R2_array[i8][0].name + "</button><br>"+database_R2_array[i8][0].contactNum;
                R2_row_of_third_table.children[i10].style.color = "black";    
                    if(database_R2_array[i8][0].status==1){
                         R2_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_R2_array[i8][0].status==2){
                        R2_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_R2_array[i8][0].status==3){
                        R2_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//R3
var R3_row_of_first_table= futsal_table[0].children[0].children[3];
var R3_row_of_second_table= futsal_table[1].children[0].children[3];
var R3_row_of_third_table= futsal_table[2].children[0].children[3];

var database_R3_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("R3")){
        database_R3_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_R3_array.length; i2++){
    for(var i3=0; i3<database_R3_array[i2][1][0].split(",").length; i3++){
        if(database_R3_array[i2][1][0].split(",")[i3] =="R3"){
            var haha= database_R3_array[i2][1][0].split(",")[i3];
            database_R3_array[i2].push([database_R3_array[i2][1][1].split(",")[i3]+ "," +database_R3_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_R3_array[i2].splice(1,1);
}

for(var i4=0; i4<database_R3_array.length ;i4++){
    for(var i5=1; i5<database_R3_array[i4].length; i5++ ){
            var startTime = database_R3_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_R3_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_R3_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_R3_array.length ;i7++){
    if(Array.isArray(database_R3_array[i7][5])){
        database_R3_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_R3_array[i7][4])){
        database_R3_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_R3_array[i7][3])){
        database_R3_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_R3_array[i7][2])){
        database_R3_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_R3_array[i7][1])){
        database_R3_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_R3_array.length; i8++){
    for(var i9=1; i9<database_R3_array[i8].length; i9++){
        for(var i10=1; i10<R3_row_of_first_table.children.length; i10++){
            if(database_R3_array[i8][i9]==R3_row_of_first_table.children[i10].innerHTML){
                R3_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R3_array[i8][0].id+"' onclick='show_request(this)'>" + database_R3_array[i8][0].name + "</button><br>"+database_R3_array[i8][0].contactNum;
                R3_row_of_first_table.children[i10].style.color = "black";
                if(database_R3_array[i8][0].status==1){
                     R3_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_R3_array[i8][0].status==2){
                    R3_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_R3_array[i8][0].status==3){
                    R3_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R3_array.length; i8++){
    for(var i9=1; i9<database_R3_array[i8].length; i9++){
        for(var i10=1; i10<R3_row_of_second_table.children.length; i10++){
            if(database_R3_array[i8][i9]==R3_row_of_second_table.children[i10].innerHTML){
                R3_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R3_array[i8][0].id+"' onclick='show_request(this)'>" + database_R3_array[i8][0].name + "</button><br>"+database_R3_array[i8][0].contactNum;
                R3_row_of_second_table.children[i10].style.color = "black";
                    if(database_R3_array[i8][0].status==1){
                         R3_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_R3_array[i8][0].status==2){
                        R3_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_R3_array[i8][0].status==3){
                        R3_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R3_array.length; i8++){
    for(var i9=1; i9<database_R3_array[i8].length; i9++){
        for(var i10=1; i10<R3_row_of_third_table.children.length; i10++){
            if(database_R3_array[i8][i9]==R3_row_of_third_table.children[i10].innerHTML){
                R3_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R3_array[i8][0].id+"' onclick='show_request(this)'>" + database_R3_array[i8][0].name + "</button><br>"+database_R3_array[i8][0].contactNum;
                R3_row_of_third_table.children[i10].style.color = "black";    
                    if(database_R3_array[i8][0].status==1){
                         R3_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_R3_array[i8][0].status==2){
                        R3_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_R3_array[i8][0].status==3){
                        R3_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//R4
var R4_row_of_first_table= futsal_table[0].children[0].children[4];
var R4_row_of_second_table= futsal_table[1].children[0].children[4];
var R4_row_of_third_table= futsal_table[2].children[0].children[4];

var database_R4_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("R4")){
        database_R4_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_R4_array.length; i2++){
    for(var i3=0; i3<database_R4_array[i2][1][0].split(",").length; i3++){
        if(database_R4_array[i2][1][0].split(",")[i3] =="R4"){
            var haha= database_R4_array[i2][1][0].split(",")[i3];
            database_R4_array[i2].push([database_R4_array[i2][1][1].split(",")[i3]+ "," +database_R4_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_R4_array[i2].splice(1,1);
}

for(var i4=0; i4<database_R4_array.length ;i4++){
    for(var i5=1; i5<database_R4_array[i4].length; i5++ ){
            var startTime = database_R4_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_R4_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_R4_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_R4_array.length ;i7++){
    if(Array.isArray(database_R4_array[i7][5])){
        database_R4_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_R4_array[i7][4])){
        database_R4_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_R4_array[i7][3])){
        database_R4_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_R4_array[i7][2])){
        database_R4_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_R4_array[i7][1])){
        database_R4_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_R4_array.length; i8++){
    for(var i9=1; i9<database_R4_array[i8].length; i9++){
        for(var i10=1; i10<R4_row_of_first_table.children.length; i10++){
            if(database_R4_array[i8][i9]==R4_row_of_first_table.children[i10].innerHTML){
                R4_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R4_array[i8][0].id+"' onclick='show_request(this)'>" + database_R4_array[i8][0].name + "</button><br>"+database_R4_array[i8][0].contactNum;
                R4_row_of_first_table.children[i10].style.color = "black";
                if(database_R4_array[i8][0].status==1){
                     R4_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_R4_array[i8][0].status==2){
                    R4_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_R4_array[i8][0].status==3){
                    R4_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R4_array.length; i8++){
    for(var i9=1; i9<database_R4_array[i8].length; i9++){
        for(var i10=1; i10<R4_row_of_second_table.children.length; i10++){
            if(database_R4_array[i8][i9]==R4_row_of_second_table.children[i10].innerHTML){
                R4_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R4_array[i8][0].id+"' onclick='show_request(this)'>" + database_R4_array[i8][0].name + "</button><br>"+database_R4_array[i8][0].contactNum;
                R4_row_of_second_table.children[i10].style.color = "black";
                    if(database_R4_array[i8][0].status==1){
                         R4_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_R4_array[i8][0].status==2){
                        R4_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_R4_array[i8][0].status==3){
                        R4_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_R4_array.length; i8++){
    for(var i9=1; i9<database_R4_array[i8].length; i9++){
        for(var i10=1; i10<R4_row_of_third_table.children.length; i10++){
            if(database_R4_array[i8][i9]==R4_row_of_third_table.children[i10].innerHTML){
                R4_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_R4_array[i8][0].id+"' onclick='show_request(this)'>" + database_R4_array[i8][0].name + "</button><br>"+database_R4_array[i8][0].contactNum;
                R4_row_of_third_table.children[i10].style.color = "black";    
                    if(database_R4_array[i8][0].status==1){
                         R4_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_R4_array[i8][0].status==2){
                        R4_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_R4_array[i8][0].status==3){
                        R4_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P1
var P1_row_of_first_table= badminton_table[0].children[0].children[1];
var P1_row_of_second_table= badminton_table[1].children[0].children[1];
var P1_row_of_third_table= badminton_table[2].children[0].children[1];

var database_P1_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P1")){
        database_P1_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P1_array.length; i2++){
    for(var i3=0; i3<database_P1_array[i2][1][0].split(",").length; i3++){
        if(database_P1_array[i2][1][0].split(",")[i3] =="P1"){
            var haha= database_P1_array[i2][1][0].split(",")[i3];
            database_P1_array[i2].push([database_P1_array[i2][1][1].split(",")[i3]+ "," +database_P1_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P1_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P1_array.length ;i4++){
    for(var i5=1; i5<database_P1_array[i4].length; i5++ ){
            var startTime = database_P1_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P1_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P1_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P1_array.length ;i7++){
    if(Array.isArray(database_P1_array[i7][5])){
        database_P1_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P1_array[i7][4])){
        database_P1_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P1_array[i7][3])){
        database_P1_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P1_array[i7][2])){
        database_P1_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P1_array[i7][1])){
        database_P1_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P1_array.length; i8++){
    for(var i9=1; i9<database_P1_array[i8].length; i9++){
        for(var i10=1; i10<P1_row_of_first_table.children.length; i10++){
            if(database_P1_array[i8][i9]==P1_row_of_first_table.children[i10].innerHTML){
                P1_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P1_array[i8][0].id+"' onclick='show_request(this)'>" + database_P1_array[i8][0].name + "</button><br>"+database_P1_array[i8][0].contactNum;
                P1_row_of_first_table.children[i10].style.color = "black";
                if(database_P1_array[i8][0].status==1){
                     P1_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P1_array[i8][0].status==2){
                    P1_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P1_array[i8][0].status==3){
                    P1_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P1_array.length; i8++){
    for(var i9=1; i9<database_P1_array[i8].length; i9++){
        for(var i10=1; i10<P1_row_of_second_table.children.length; i10++){
            if(database_P1_array[i8][i9]==P1_row_of_second_table.children[i10].innerHTML){
                P1_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P1_array[i8][0].id+"' onclick='show_request(this)'>" + database_P1_array[i8][0].name + "</button><br>"+database_P1_array[i8][0].contactNum;
                P1_row_of_second_table.children[i10].style.color = "black";
                    if(database_P1_array[i8][0].status==1){
                         P1_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P1_array[i8][0].status==2){
                        P1_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P1_array[i8][0].status==3){
                        P1_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P1_array.length; i8++){
    for(var i9=1; i9<database_P1_array[i8].length; i9++){
        for(var i10=1; i10<P1_row_of_third_table.children.length; i10++){
            if(database_P1_array[i8][i9]==P1_row_of_third_table.children[i10].innerHTML){
                P1_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P1_array[i8][0].id+"' onclick='show_request(this)'>" + database_P1_array[i8][0].name + "</button><br>"+database_P1_array[i8][0].contactNum;
                P1_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P1_array[i8][0].status==1){
                         P1_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P1_array[i8][0].status==2){
                        P1_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P1_array[i8][0].status==3){
                        P1_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P2
var P2_row_of_first_table= badminton_table[0].children[0].children[2];
var P2_row_of_second_table= badminton_table[1].children[0].children[2];
var P2_row_of_third_table= badminton_table[2].children[0].children[2];

var database_P2_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P2")){
        database_P2_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P2_array.length; i2++){
    for(var i3=0; i3<database_P2_array[i2][1][0].split(",").length; i3++){
        if(database_P2_array[i2][1][0].split(",")[i3] =="P2"){
            var haha= database_P2_array[i2][1][0].split(",")[i3];
            database_P2_array[i2].push([database_P2_array[i2][1][1].split(",")[i3]+ "," +database_P2_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P2_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P2_array.length ;i4++){
    for(var i5=1; i5<database_P2_array[i4].length; i5++ ){
            var startTime = database_P2_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P2_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P2_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P2_array.length ;i7++){
    if(Array.isArray(database_P2_array[i7][5])){
        database_P2_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P2_array[i7][4])){
        database_P2_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P2_array[i7][3])){
        database_P2_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P2_array[i7][2])){
        database_P2_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P2_array[i7][1])){
        database_P2_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P2_array.length; i8++){
    for(var i9=1; i9<database_P2_array[i8].length; i9++){
        for(var i10=1; i10<P2_row_of_first_table.children.length; i10++){
            if(database_P2_array[i8][i9]==P2_row_of_first_table.children[i10].innerHTML){
                P2_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P2_array[i8][0].id+"' onclick='show_request(this)'>" + database_P2_array[i8][0].name + "</button><br>"+database_P2_array[i8][0].contactNum;
                P2_row_of_first_table.children[i10].style.color = "black";
                if(database_P2_array[i8][0].status==1){
                     P2_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P2_array[i8][0].status==2){
                    P2_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P2_array[i8][0].status==3){
                    P2_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P2_array.length; i8++){
    for(var i9=1; i9<database_P2_array[i8].length; i9++){
        for(var i10=1; i10<P2_row_of_second_table.children.length; i10++){
            if(database_P2_array[i8][i9]==P2_row_of_second_table.children[i10].innerHTML){
                P2_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P2_array[i8][0].id+"' onclick='show_request(this)'>" + database_P2_array[i8][0].name + "</button><br>"+database_P2_array[i8][0].contactNum;
                P2_row_of_second_table.children[i10].style.color = "black";
                    if(database_P2_array[i8][0].status==1){
                         P2_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P2_array[i8][0].status==2){
                        P2_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P2_array[i8][0].status==3){
                        P2_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P2_array.length; i8++){
    for(var i9=1; i9<database_P2_array[i8].length; i9++){
        for(var i10=1; i10<P2_row_of_third_table.children.length; i10++){
            if(database_P2_array[i8][i9]==P2_row_of_third_table.children[i10].innerHTML){
                P2_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P2_array[i8][0].id+"' onclick='show_request(this)'>" + database_P2_array[i8][0].name + "</button><br>"+database_P2_array[i8][0].contactNum;
                P2_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P2_array[i8][0].status==1){
                         P2_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P2_array[i8][0].status==2){
                        P2_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P2_array[i8][0].status==3){
                        P2_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P3
var P3_row_of_first_table= badminton_table[0].children[0].children[3];
var P3_row_of_second_table= badminton_table[1].children[0].children[3];
var P3_row_of_third_table= badminton_table[2].children[0].children[3];

var database_P3_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P3")){
        database_P3_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P3_array.length; i2++){
    for(var i3=0; i3<database_P3_array[i2][1][0].split(",").length; i3++){
        if(database_P3_array[i2][1][0].split(",")[i3] =="P3"){
            var haha= database_P3_array[i2][1][0].split(",")[i3];
            database_P3_array[i2].push([database_P3_array[i2][1][1].split(",")[i3]+ "," +database_P3_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P3_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P3_array.length ;i4++){
    for(var i5=1; i5<database_P3_array[i4].length; i5++ ){
            var startTime = database_P3_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P3_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P3_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P3_array.length ;i7++){
    if(Array.isArray(database_P3_array[i7][5])){
        database_P3_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P3_array[i7][4])){
        database_P3_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P3_array[i7][3])){
        database_P3_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P3_array[i7][2])){
        database_P3_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P3_array[i7][1])){
        database_P3_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P3_array.length; i8++){
    for(var i9=1; i9<database_P3_array[i8].length; i9++){
        for(var i10=1; i10<P3_row_of_first_table.children.length; i10++){
            if(database_P3_array[i8][i9]==P3_row_of_first_table.children[i10].innerHTML){
                P3_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P3_array[i8][0].id+"' onclick='show_request(this)'>" + database_P3_array[i8][0].name + "</button><br>"+database_P3_array[i8][0].contactNum;
                P3_row_of_first_table.children[i10].style.color = "black";
                if(database_P3_array[i8][0].status==1){
                     P3_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P3_array[i8][0].status==2){
                    P3_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P3_array[i8][0].status==3){
                    P3_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P3_array.length; i8++){
    for(var i9=1; i9<database_P3_array[i8].length; i9++){
        for(var i10=1; i10<P3_row_of_second_table.children.length; i10++){
            if(database_P3_array[i8][i9]==P3_row_of_second_table.children[i10].innerHTML){
                P3_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P3_array[i8][0].id+"' onclick='show_request(this)'>" + database_P3_array[i8][0].name + "</button><br>"+database_P3_array[i8][0].contactNum;
                P3_row_of_second_table.children[i10].style.color = "black";
                    if(database_P3_array[i8][0].status==1){
                         P3_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P3_array[i8][0].status==2){
                        P3_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P3_array[i8][0].status==3){
                        P3_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P3_array.length; i8++){
    for(var i9=1; i9<database_P3_array[i8].length; i9++){
        for(var i10=1; i10<P3_row_of_third_table.children.length; i10++){
            if(database_P3_array[i8][i9]==P3_row_of_third_table.children[i10].innerHTML){
                P3_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P3_array[i8][0].id+"' onclick='show_request(this)'>" + database_P3_array[i8][0].name + "</button><br>"+database_P3_array[i8][0].contactNum;
                P3_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P3_array[i8][0].status==1){
                         P3_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P3_array[i8][0].status==2){
                        P3_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P3_array[i8][0].status==3){
                        P3_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P4
var P4_row_of_first_table= badminton_table[0].children[0].children[4];
var P4_row_of_second_table= badminton_table[1].children[0].children[4];
var P4_row_of_third_table= badminton_table[2].children[0].children[4];

var database_P4_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P4")){
        database_P4_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P4_array.length; i2++){
    for(var i3=0; i3<database_P4_array[i2][1][0].split(",").length; i3++){
        if(database_P4_array[i2][1][0].split(",")[i3] =="P4"){
            var haha= database_P4_array[i2][1][0].split(",")[i3];
            database_P4_array[i2].push([database_P4_array[i2][1][1].split(",")[i3]+ "," +database_P4_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P4_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P4_array.length ;i4++){
    for(var i5=1; i5<database_P4_array[i4].length; i5++ ){
            var startTime = database_P4_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P4_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P4_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P4_array.length ;i7++){
    if(Array.isArray(database_P4_array[i7][5])){
        database_P4_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P4_array[i7][4])){
        database_P4_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P4_array[i7][3])){
        database_P4_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P4_array[i7][2])){
        database_P4_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P4_array[i7][1])){
        database_P4_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P4_array.length; i8++){
    for(var i9=1; i9<database_P4_array[i8].length; i9++){
        for(var i10=1; i10<P4_row_of_first_table.children.length; i10++){
            if(database_P4_array[i8][i9]==P4_row_of_first_table.children[i10].innerHTML){
                P4_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P4_array[i8][0].id+"' onclick='show_request(this)'>" + database_P4_array[i8][0].name + "</button><br>"+database_P4_array[i8][0].contactNum;
                P4_row_of_first_table.children[i10].style.color = "black";
                if(database_P4_array[i8][0].status==1){
                     P4_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P4_array[i8][0].status==2){
                    P4_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P4_array[i8][0].status==3){
                    P4_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P4_array.length; i8++){
    for(var i9=1; i9<database_P4_array[i8].length; i9++){
        for(var i10=1; i10<P4_row_of_second_table.children.length; i10++){
            if(database_P4_array[i8][i9]==P4_row_of_second_table.children[i10].innerHTML){
                P4_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P4_array[i8][0].id+"' onclick='show_request(this)'>" + database_P4_array[i8][0].name + "</button><br>"+database_P4_array[i8][0].contactNum;
                P4_row_of_second_table.children[i10].style.color = "black";
                    if(database_P4_array[i8][0].status==1){
                         P4_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P4_array[i8][0].status==2){
                        P4_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P4_array[i8][0].status==3){
                        P4_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P4_array.length; i8++){
    for(var i9=1; i9<database_P4_array[i8].length; i9++){
        for(var i10=1; i10<P4_row_of_third_table.children.length; i10++){
            if(database_P4_array[i8][i9]==P4_row_of_third_table.children[i10].innerHTML){
                P4_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P4_array[i8][0].id+"' onclick='show_request(this)'>" + database_P4_array[i8][0].name + "</button><br>"+database_P4_array[i8][0].contactNum;
                P4_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P4_array[i8][0].status==1){
                         P4_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P4_array[i8][0].status==2){
                        P4_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P4_array[i8][0].status==3){
                        P4_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P5
var P5_row_of_first_table= badminton_table[0].children[0].children[5];
var P5_row_of_second_table= badminton_table[1].children[0].children[5];
var P5_row_of_third_table= badminton_table[2].children[0].children[5];

var database_P5_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P5")){
        database_P5_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P5_array.length; i2++){
    for(var i3=0; i3<database_P5_array[i2][1][0].split(",").length; i3++){
        if(database_P5_array[i2][1][0].split(",")[i3] =="P5"){
            var haha= database_P5_array[i2][1][0].split(",")[i3];
            database_P5_array[i2].push([database_P5_array[i2][1][1].split(",")[i3]+ "," +database_P5_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P5_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P5_array.length ;i4++){
    for(var i5=1; i5<database_P5_array[i4].length; i5++ ){
            var startTime = database_P5_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P5_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P5_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P5_array.length ;i7++){
    if(Array.isArray(database_P5_array[i7][5])){
        database_P5_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P5_array[i7][4])){
        database_P5_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P5_array[i7][3])){
        database_P5_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P5_array[i7][2])){
        database_P5_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P5_array[i7][1])){
        database_P5_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P5_array.length; i8++){
    for(var i9=1; i9<database_P5_array[i8].length; i9++){
        for(var i10=1; i10<P5_row_of_first_table.children.length; i10++){
            if(database_P5_array[i8][i9]==P5_row_of_first_table.children[i10].innerHTML){
                P5_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P5_array[i8][0].id+"' onclick='show_request(this)'>" + database_P5_array[i8][0].name + "</button><br>"+database_P5_array[i8][0].contactNum;
                P5_row_of_first_table.children[i10].style.color = "black";
                if(database_P5_array[i8][0].status==1){
                     P5_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P5_array[i8][0].status==2){
                    P5_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P5_array[i8][0].status==3){
                    P5_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P5_array.length; i8++){
    for(var i9=1; i9<database_P5_array[i8].length; i9++){
        for(var i10=1; i10<P5_row_of_second_table.children.length; i10++){
            if(database_P5_array[i8][i9]==P5_row_of_second_table.children[i10].innerHTML){
                P5_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P5_array[i8][0].id+"' onclick='show_request(this)'>" + database_P5_array[i8][0].name + "</button><br>"+database_P5_array[i8][0].contactNum;
                P5_row_of_second_table.children[i10].style.color = "black";  
                    if(database_P5_array[i8][0].status==1){
                         P5_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P5_array[i8][0].status==2){
                        P5_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P5_array[i8][0].status==3){
                        P5_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P5_array.length; i8++){
    for(var i9=1; i9<database_P5_array[i8].length; i9++){
        for(var i10=1; i10<P5_row_of_third_table.children.length; i10++){
            if(database_P5_array[i8][i9]==P5_row_of_third_table.children[i10].innerHTML){
                P5_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P5_array[i8][0].id+"' onclick='show_request(this)'>" + database_P5_array[i8][0].name + "</button><br>"+database_P5_array[i8][0].contactNum;
                P5_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P5_array[i8][0].status==1){
                         P5_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P5_array[i8][0].status==2){
                        P5_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P5_array[i8][0].status==3){
                        P5_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P6
var P6_row_of_first_table= badminton_table[0].children[0].children[6];
var P6_row_of_second_table= badminton_table[1].children[0].children[6];
var P6_row_of_third_table= badminton_table[2].children[0].children[6];

var database_P6_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P6")){
        database_P6_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P6_array.length; i2++){
    for(var i3=0; i3<database_P6_array[i2][1][0].split(",").length; i3++){
        if(database_P6_array[i2][1][0].split(",")[i3] =="P6"){
            var haha= database_P6_array[i2][1][0].split(",")[i3];
            database_P6_array[i2].push([database_P6_array[i2][1][1].split(",")[i3]+ "," +database_P6_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P6_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P6_array.length ;i4++){
    for(var i5=1; i5<database_P6_array[i4].length; i5++ ){
            var startTime = database_P6_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P6_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P6_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P6_array.length ;i7++){
    if(Array.isArray(database_P6_array[i7][5])){
        database_P6_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P6_array[i7][4])){
        database_P6_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P6_array[i7][3])){
        database_P6_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P6_array[i7][2])){
        database_P6_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P6_array[i7][1])){
        database_P6_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P6_array.length; i8++){
    for(var i9=1; i9<database_P6_array[i8].length; i9++){
        for(var i10=1; i10<P6_row_of_first_table.children.length; i10++){
            if(database_P6_array[i8][i9]==P6_row_of_first_table.children[i10].innerHTML){
                P6_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P6_array[i8][0].id+"' onclick='show_request(this)'>" + database_P6_array[i8][0].name + "</button><br>"+database_P6_array[i8][0].contactNum;
                P6_row_of_first_table.children[i10].style.color = "black";
                if(database_P6_array[i8][0].status==1){
                     P6_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P6_array[i8][0].status==2){
                    P6_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P6_array[i8][0].status==3){
                    P6_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P6_array.length; i8++){
    for(var i9=1; i9<database_P6_array[i8].length; i9++){
        for(var i10=1; i10<P6_row_of_second_table.children.length; i10++){
            if(database_P6_array[i8][i9]==P6_row_of_second_table.children[i10].innerHTML){
                P6_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P6_array[i8][0].id+"' onclick='show_request(this)'>" + database_P6_array[i8][0].name + "</button><br>"+database_P6_array[i8][0].contactNum;
                P6_row_of_second_table.children[i10].style.color = "black";
                    if(database_P6_array[i8][0].status==1){
                         P6_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P6_array[i8][0].status==2){
                        P6_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P6_array[i8][0].status==3){
                        P6_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P6_array.length; i8++){
    for(var i9=1; i9<database_P6_array[i8].length; i9++){
        for(var i10=1; i10<P6_row_of_third_table.children.length; i10++){
            if(database_P6_array[i8][i9]==P6_row_of_third_table.children[i10].innerHTML){
                P6_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P6_array[i8][0].id+"' onclick='show_request(this)'>" + database_P6_array[i8][0].name + "</button><br>"+database_P6_array[i8][0].contactNum;
                P6_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P6_array[i8][0].status==1){
                         P6_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P6_array[i8][0].status==2){
                        P6_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P6_array[i8][0].status==3){
                        P6_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P7
var P7_row_of_first_table= badminton_table[0].children[0].children[7];
var P7_row_of_second_table= badminton_table[1].children[0].children[7];
var P7_row_of_third_table= badminton_table[2].children[0].children[7];

var database_P7_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P7")){
        database_P7_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P7_array.length; i2++){
    for(var i3=0; i3<database_P7_array[i2][1][0].split(",").length; i3++){
        if(database_P7_array[i2][1][0].split(",")[i3] =="P7"){
            var haha= database_P7_array[i2][1][0].split(",")[i3];
            database_P7_array[i2].push([database_P7_array[i2][1][1].split(",")[i3]+ "," +database_P7_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P7_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P7_array.length ;i4++){
    for(var i5=1; i5<database_P7_array[i4].length; i5++ ){
            var startTime = database_P7_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P7_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P7_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P7_array.length ;i7++){
    if(Array.isArray(database_P7_array[i7][5])){
        database_P7_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P7_array[i7][4])){
        database_P7_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P7_array[i7][3])){
        database_P7_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P7_array[i7][2])){
        database_P7_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P7_array[i7][1])){
        database_P7_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P7_array.length; i8++){
    for(var i9=1; i9<database_P7_array[i8].length; i9++){
        for(var i10=1; i10<P7_row_of_first_table.children.length; i10++){
            if(database_P7_array[i8][i9]==P7_row_of_first_table.children[i10].innerHTML){
                P7_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P7_array[i8][0].id+"' onclick='show_request(this)'>" + database_P7_array[i8][0].name + "</button><br>"+database_P7_array[i8][0].contactNum;
                P7_row_of_first_table.children[i10].style.color = "black";
                if(database_P7_array[i8][0].status==1){
                     P7_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P7_array[i8][0].status==2){
                    P7_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P7_array[i8][0].status==3){
                    P7_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P7_array.length; i8++){
    for(var i9=1; i9<database_P7_array[i8].length; i9++){
        for(var i10=1; i10<P7_row_of_second_table.children.length; i10++){
            if(database_P7_array[i8][i9]==P7_row_of_second_table.children[i10].innerHTML){
                P7_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P7_array[i8][0].id+"' onclick='show_request(this)'>" + database_P7_array[i8][0].name + "</button><br>"+database_P7_array[i8][0].contactNum;
                P7_row_of_second_table.children[i10].style.color = "black";
                    if(database_P7_array[i8][0].status==1){
                         P7_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P7_array[i8][0].status==2){
                        P7_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P7_array[i8][0].status==3){
                        P7_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P7_array.length; i8++){
    for(var i9=1; i9<database_P7_array[i8].length; i9++){
        for(var i10=1; i10<P7_row_of_third_table.children.length; i10++){
            if(database_P7_array[i8][i9]==P7_row_of_third_table.children[i10].innerHTML){
                P7_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P7_array[i8][0].id+"' onclick='show_request(this)'>" + database_P7_array[i8][0].name + "</button><br>"+database_P7_array[i8][0].contactNum;
                P7_row_of_third_table.children[i10].style.color = "black";    
                    if(database_P7_array[i8][0].status==1){
                         P7_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P7_array[i8][0].status==2){
                        P7_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P7_array[i8][0].status==3){
                        P7_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//P8
var P8_row_of_first_table= badminton_table[0].children[0].children[8];
var P8_row_of_second_table= badminton_table[1].children[0].children[8];
var P8_row_of_third_table= badminton_table[2].children[0].children[8];

var database_P8_array = []; 

 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("P8")){
        database_P8_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_P8_array.length; i2++){
    for(var i3=0; i3<database_P8_array[i2][1][0].split(",").length; i3++){
        if(database_P8_array[i2][1][0].split(",")[i3] =="P8"){
            var haha= database_P8_array[i2][1][0].split(",")[i3];
            database_P8_array[i2].push([database_P8_array[i2][1][1].split(",")[i3]+ "," +database_P8_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_P8_array[i2].splice(1,1);
}

for(var i4=0; i4<database_P8_array.length ;i4++){
    for(var i5=1; i5<database_P8_array[i4].length; i5++ ){
            var startTime = database_P8_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_P8_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_P8_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

for(var i7=0 ; i7<database_P8_array.length ;i7++){
    if(Array.isArray(database_P8_array[i7][5])){
        database_P8_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_P8_array[i7][4])){
        database_P8_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_P8_array[i7][3])){
        database_P8_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_P8_array[i7][2])){
        database_P8_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_P8_array[i7][1])){
        database_P8_array[i7].splice(1, 1);
    }
}

for(var i8=0; i8<database_P8_array.length; i8++){
    for(var i9=1; i9<database_P8_array[i8].length; i9++){
        for(var i10=1; i10<P8_row_of_first_table.children.length; i10++){
            if(database_P8_array[i8][i9]==P8_row_of_first_table.children[i10].innerHTML){
                P8_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P8_array[i8][0].id+"' onclick='show_request(this)'>" + database_P8_array[i8][0].name + "</button><br>"+database_P8_array[i8][0].contactNum;
                P8_row_of_first_table.children[i10].style.color = "black";
                if(database_P8_array[i8][0].status==1){
                     P8_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_P8_array[i8][0].status==2){
                    P8_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_P8_array[i8][0].status==3){
                    P8_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P8_array.length; i8++){
    for(var i9=1; i9<database_P8_array[i8].length; i9++){
        for(var i10=1; i10<P8_row_of_second_table.children.length; i10++){
            if(database_P8_array[i8][i9]==P8_row_of_second_table.children[i10].innerHTML){
                P8_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P8_array[i8][0].id+"' onclick='show_request(this)'>" + database_P8_array[i8][0].name + "</button><br>"+database_P8_array[i8][0].contactNum;
                P8_row_of_second_table.children[i10].style.color = "black";
                    if(database_P8_array[i8][0].status==1){
                         P8_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_P8_array[i8][0].status==2){
                        P8_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_P8_array[i8][0].status==3){
                        P8_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

for(var i8=0; i8<database_P8_array.length; i8++){
    for(var i9=1; i9<database_P8_array[i8].length; i9++){
        for(var i10=1; i10<P8_row_of_third_table.children.length; i10++){
            if(database_P8_array[i8][i9]==P8_row_of_third_table.children[i10].innerHTML){
                P8_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_P8_array[i8][0].id+"' onclick='show_request(this)'>" + database_P8_array[i8][0].name + "</button><br>"+database_P8_array[i8][0].contactNum;
                P8_row_of_third_table.children[i10].style.color = "black";   
                    if(database_P8_array[i8][0].status==1){
                         P8_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_P8_array[i8][0].status==2){
                        P8_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_P8_array[i8][0].status==3){
                        P8_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B1
var B1_row_of_first_table= badminton_table[0].children[0].children[9];
var B1_row_of_second_table= badminton_table[1].children[0].children[9];
var B1_row_of_third_table= badminton_table[2].children[0].children[9];

var database_B1_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B1")){
        database_B1_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B1_array.length; i2++){
    for(var i3=0; i3<database_B1_array[i2][1][0].split(",").length; i3++){
        if(database_B1_array[i2][1][0].split(",")[i3] =="B1"){
            var haha= database_B1_array[i2][1][0].split(",")[i3];
            database_B1_array[i2].push([database_B1_array[i2][1][1].split(",")[i3]+ "," +database_B1_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B1_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B1_array.length ;i4++){
    for(var i5=1; i5<database_B1_array[i4].length; i5++ ){
            var startTime = database_B1_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B1_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B1_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B1_array.length ;i7++){
    if(Array.isArray(database_B1_array[i7][5])){
        database_B1_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B1_array[i7][4])){
        database_B1_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B1_array[i7][3])){
        database_B1_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B1_array[i7][2])){
        database_B1_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B1_array[i7][1])){
        database_B1_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B1_array.length; i8++){
    for(var i9=1; i9<database_B1_array[i8].length; i9++){
        for(var i10=1; i10<B1_row_of_first_table.children.length; i10++){
            if(database_B1_array[i8][i9]==B1_row_of_first_table.children[i10].innerHTML){
                B1_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B1_array[i8][0].id+"' onclick='show_request(this)'>" + database_B1_array[i8][0].name + "</button><br>"+database_B1_array[i8][0].contactNum;
                B1_row_of_first_table.children[i10].style.color = "black";
                if(database_B1_array[i8][0].status==1){
                     B1_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B1_array[i8][0].status==2){
                    B1_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_B1_array[i8][0].status==3){
                    B1_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B1_array.length; i8++){
    for(var i9=1; i9<database_B1_array[i8].length; i9++){
        for(var i10=1; i10<B1_row_of_second_table.children.length; i10++){
            if(database_B1_array[i8][i9]==B1_row_of_second_table.children[i10].innerHTML){
                B1_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B1_array[i8][0].id+"' onclick='show_request(this)'>" + database_B1_array[i8][0].name + "</button><br>"+database_B1_array[i8][0].contactNum;
                B1_row_of_second_table.children[i10].style.color = "black";
                    if(database_B1_array[i8][0].status==1){
                         B1_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B1_array[i8][0].status==2){
                        B1_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_B1_array[i8][0].status==3){
                        B1_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B1_array.length; i8++){
    for(var i9=1; i9<database_B1_array[i8].length; i9++){
        for(var i10=1; i10<B1_row_of_third_table.children.length; i10++){
            if(database_B1_array[i8][i9]==B1_row_of_third_table.children[i10].innerHTML){
                B1_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B1_array[i8][0].id+"' onclick='show_request(this)'>" + database_B1_array[i8][0].name + "</button><br>"+database_B1_array[i8][0].contactNum;
                B1_row_of_third_table.children[i10].style.color = "black";    
                    if(database_B1_array[i8][0].status==1){
                         B1_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B1_array[i8][0].status==2){
                        B1_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_B1_array[i8][0].status==3){
                        B1_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B2
var B2_row_of_first_table= badminton_table[0].children[0].children[10];
var B2_row_of_second_table= badminton_table[1].children[0].children[10];
var B2_row_of_third_table= badminton_table[2].children[0].children[10];

var database_B2_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B2")){
        database_B2_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B2_array.length; i2++){
    for(var i3=0; i3<database_B2_array[i2][1][0].split(",").length; i3++){
        if(database_B2_array[i2][1][0].split(",")[i3] =="B2"){
            var haha= database_B2_array[i2][1][0].split(",")[i3];
            database_B2_array[i2].push([database_B2_array[i2][1][1].split(",")[i3]+ "," +database_B2_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B2_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B2_array.length ;i4++){
    for(var i5=1; i5<database_B2_array[i4].length; i5++ ){
            var startTime = database_B2_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B2_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B2_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B2_array.length ;i7++){
    if(Array.isArray(database_B2_array[i7][5])){
        database_B2_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B2_array[i7][4])){
        database_B2_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B2_array[i7][3])){
        database_B2_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B2_array[i7][2])){
        database_B2_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B2_array[i7][1])){
        database_B2_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B2_array.length; i8++){
    for(var i9=1; i9<database_B2_array[i8].length; i9++){
        for(var i10=1; i10<B2_row_of_first_table.children.length; i10++){
            if(database_B2_array[i8][i9]==B2_row_of_first_table.children[i10].innerHTML){
                B2_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B2_array[i8][0].id+"' onclick='show_request(this)'>" + database_B2_array[i8][0].name + "</button><br>"+database_B2_array[i8][0].contactNum;
                B2_row_of_first_table.children[i10].style.color = "black";
                if(database_B2_array[i8][0].status==1){
                     B2_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B2_array[i8][0].status==2){
                    B2_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_B2_array[i8][0].status==3){
                    B2_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B2_array.length; i8++){
    for(var i9=1; i9<database_B2_array[i8].length; i9++){
        for(var i10=1; i10<B2_row_of_second_table.children.length; i10++){
            if(database_B2_array[i8][i9]==B2_row_of_second_table.children[i10].innerHTML){
                B2_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B2_array[i8][0].id+"' onclick='show_request(this)'>" + database_B2_array[i8][0].name + "</button><br>"+database_B2_array[i8][0].contactNum;
                B2_row_of_second_table.children[i10].style.color = "black";
                    if(database_B2_array[i8][0].status==1){
                         B2_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B2_array[i8][0].status==2){
                        B2_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_B2_array[i8][0].status==3){
                        B2_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B2_array.length; i8++){
    for(var i9=1; i9<database_B2_array[i8].length; i9++){
        for(var i10=1; i10<B2_row_of_third_table.children.length; i10++){
            if(database_B2_array[i8][i9]==B2_row_of_third_table.children[i10].innerHTML){
                B2_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B2_array[i8][0].id+"' onclick='show_request(this)'>" + database_B2_array[i8][0].name + "</button><br>"+database_B2_array[i8][0].contactNum;
                B2_row_of_third_table.children[i10].style.color = "black";    
                    if(database_B2_array[i8][0].status==1){
                         B2_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B2_array[i8][0].status==2){
                        B2_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_B2_array[i8][0].status==3){
                        B2_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B3
var B3_row_of_first_table= badminton_table[0].children[0].children[11];
var B3_row_of_second_table= badminton_table[1].children[0].children[11];
var B3_row_of_third_table= badminton_table[2].children[0].children[11];

var database_B3_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B3")){
        database_B3_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B3_array.length; i2++){
    for(var i3=0; i3<database_B3_array[i2][1][0].split(",").length; i3++){
        if(database_B3_array[i2][1][0].split(",")[i3] =="B3"){
            var haha= database_B3_array[i2][1][0].split(",")[i3];
            database_B3_array[i2].push([database_B3_array[i2][1][1].split(",")[i3]+ "," +database_B3_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B3_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B3_array.length ;i4++){
    for(var i5=1; i5<database_B3_array[i4].length; i5++ ){
            var startTime = database_B3_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B3_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B3_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B3_array.length ;i7++){
    if(Array.isArray(database_B3_array[i7][5])){
        database_B3_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B3_array[i7][4])){
        database_B3_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B3_array[i7][3])){
        database_B3_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B3_array[i7][2])){
        database_B3_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B3_array[i7][1])){
        database_B3_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B3_array.length; i8++){
    for(var i9=1; i9<database_B3_array[i8].length; i9++){
        for(var i10=1; i10<B3_row_of_first_table.children.length; i10++){
            if(database_B3_array[i8][i9]==B3_row_of_first_table.children[i10].innerHTML){
                B3_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B3_array[i8][0].id+"' onclick='show_request(this)'>" + database_B3_array[i8][0].name + "</button><br>"+database_B3_array[i8][0].contactNum;
                B3_row_of_first_table.children[i10].style.color = "black";
                if(database_B3_array[i8][0].status==1){
                     B3_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B3_array[i8][0].status==2){
                    B3_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_B3_array[i8][0].status==3){
                    B3_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B3_array.length; i8++){
    for(var i9=1; i9<database_B3_array[i8].length; i9++){
        for(var i10=1; i10<B3_row_of_second_table.children.length; i10++){
            if(database_B3_array[i8][i9]==B3_row_of_second_table.children[i10].innerHTML){
                B3_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B3_array[i8][0].id+"' onclick='show_request(this)'>" + database_B3_array[i8][0].name + "</button><br>"+database_B3_array[i8][0].contactNum;
                B3_row_of_second_table.children[i10].style.color = "black";
                    if(database_B3_array[i8][0].status==1){
                         B3_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B3_array[i8][0].status==2){
                        B3_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_B3_array[i8][0].status==3){
                        B3_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B3_array.length; i8++){
    for(var i9=1; i9<database_B3_array[i8].length; i9++){
        for(var i10=1; i10<B3_row_of_third_table.children.length; i10++){
            if(database_B3_array[i8][i9]==B3_row_of_third_table.children[i10].innerHTML){
                B3_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B3_array[i8][0].id+"' onclick='show_request(this)'>" + database_B3_array[i8][0].name + "</button><br>"+database_B3_array[i8][0].contactNum;
                B3_row_of_third_table.children[i10].style.color = "black";    
                    if(database_B3_array[i8][0].status==1){
                         B3_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B3_array[i8][0].status==2){
                        B3_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_B3_array[i8][0].status==3){
                        B3_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B4
var B4_row_of_first_table= badminton_table[0].children[0].children[12];
var B4_row_of_second_table= badminton_table[1].children[0].children[12];
var B4_row_of_third_table= badminton_table[2].children[0].children[12];

var database_B4_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B4")){
        database_B4_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B4_array.length; i2++){
    for(var i3=0; i3<database_B4_array[i2][1][0].split(",").length; i3++){
        if(database_B4_array[i2][1][0].split(",")[i3] =="B4"){
            var haha= database_B4_array[i2][1][0].split(",")[i3];
            database_B4_array[i2].push([database_B4_array[i2][1][1].split(",")[i3]+ "," +database_B4_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B4_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B4_array.length ;i4++){
    for(var i5=1; i5<database_B4_array[i4].length; i5++ ){
            var startTime = database_B4_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B4_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B4_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B4_array.length ;i7++){
    if(Array.isArray(database_B4_array[i7][5])){
        database_B4_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B4_array[i7][4])){
        database_B4_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B4_array[i7][3])){
        database_B4_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B4_array[i7][2])){
        database_B4_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B4_array[i7][1])){
        database_B4_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B4_array.length; i8++){
    for(var i9=1; i9<database_B4_array[i8].length; i9++){
        for(var i10=1; i10<B4_row_of_first_table.children.length; i10++){
            if(database_B4_array[i8][i9]==B4_row_of_first_table.children[i10].innerHTML){
                B4_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B4_array[i8][0].id+"' onclick='show_request(this)'>" + database_B4_array[i8][0].name + "</button><br>"+database_B4_array[i8][0].contactNum;
                B4_row_of_first_table.children[i10].style.color = "black";
                if(database_B4_array[i8][0].status==1){
                     B4_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B4_array[i8][0].status==2){
                    B4_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_B4_array[i8][0].status==3){
                    B4_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B4_array.length; i8++){
    for(var i9=1; i9<database_B4_array[i8].length; i9++){
        for(var i10=1; i10<B4_row_of_second_table.children.length; i10++){
            if(database_B4_array[i8][i9]==B4_row_of_second_table.children[i10].innerHTML){
                B4_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B4_array[i8][0].id+"' onclick='show_request(this)'>" + database_B4_array[i8][0].name + "</button><br>"+database_B4_array[i8][0].contactNum;
                B4_row_of_second_table.children[i10].style.color = "black";
                    if(database_B4_array[i8][0].status==1){
                         B4_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B4_array[i8][0].status==2){
                        B4_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_B4_array[i8][0].status==3){
                        B4_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B4_array.length; i8++){
    for(var i9=1; i9<database_B4_array[i8].length; i9++){
        for(var i10=1; i10<B4_row_of_third_table.children.length; i10++){
            if(database_B4_array[i8][i9]==B4_row_of_third_table.children[i10].innerHTML){
                B4_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B4_array[i8][0].id+"' onclick='show_request(this)'>" + database_B4_array[i8][0].name + "</button><br>"+database_B4_array[i8][0].contactNum;
                B4_row_of_third_table.children[i10].style.color = "black";   
                    if(database_B4_array[i8][0].status==1){
                         B4_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B4_array[i8][0].status==2){
                        B4_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_B4_array[i8][0].status==3){
                        B4_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B5
var B5_row_of_first_table= badminton_table[0].children[0].children[13];
var B5_row_of_second_table= badminton_table[1].children[0].children[13];
var B5_row_of_third_table= badminton_table[2].children[0].children[13];

var database_B5_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B5")){
        database_B5_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B5_array.length; i2++){
    for(var i3=0; i3<database_B5_array[i2][1][0].split(",").length; i3++){
        if(database_B5_array[i2][1][0].split(",")[i3] =="B5"){
            var haha= database_B5_array[i2][1][0].split(",")[i3];
            database_B5_array[i2].push([database_B5_array[i2][1][1].split(",")[i3]+ "," +database_B5_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B5_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B5_array.length ;i4++){
    for(var i5=1; i5<database_B5_array[i4].length; i5++ ){
            var startTime = database_B5_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B5_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B5_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B5_array.length ;i7++){
    if(Array.isArray(database_B5_array[i7][5])){
        database_B5_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B5_array[i7][4])){
        database_B5_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B5_array[i7][3])){
        database_B5_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B5_array[i7][2])){
        database_B5_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B5_array[i7][1])){
        database_B5_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B5_array.length; i8++){
    for(var i9=1; i9<database_B5_array[i8].length; i9++){
        for(var i10=1; i10<B5_row_of_first_table.children.length; i10++){
            if(database_B5_array[i8][i9]==B5_row_of_first_table.children[i10].innerHTML){
                B5_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B5_array[i8][0].id+"' onclick='show_request(this)'>" + database_B5_array[i8][0].name + "</button><br>"+database_B5_array[i8][0].contactNum;
                B5_row_of_first_table.children[i10].style.color = "black";
                if(database_B5_array[i8][0].status==1){
                     B5_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B5_array[i8][0].status==2){
                    B5_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_B5_array[i8][0].status==3){
                    B5_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B5_array.length; i8++){
    for(var i9=1; i9<database_B5_array[i8].length; i9++){
        for(var i10=1; i10<B5_row_of_second_table.children.length; i10++){
            if(database_B5_array[i8][i9]==B5_row_of_second_table.children[i10].innerHTML){
                B5_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B5_array[i8][0].id+"' onclick='show_request(this)'>" + database_B5_array[i8][0].name + "</button><br>"+database_B5_array[i8][0].contactNum;
                B5_row_of_second_table.children[i10].style.color = "black";
                    if(database_B5_array[i8][0].status==1){
                         B5_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B5_array[i8][0].status==2){
                        B5_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_B5_array[i8][0].status==3){
                        B5_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B5_array.length; i8++){
    for(var i9=1; i9<database_B5_array[i8].length; i9++){
        for(var i10=1; i10<B5_row_of_third_table.children.length; i10++){
            if(database_B5_array[i8][i9]==B5_row_of_third_table.children[i10].innerHTML){
                B5_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B5_array[i8][0].id+"' onclick='show_request(this)'>" + database_B5_array[i8][0].name + "</button><br>"+database_B5_array[i8][0].contactNum;
                B5_row_of_third_table.children[i10].style.color = "black";   
                    if(database_B5_array[i8][0].status==1){
                         B5_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B5_array[i8][0].status==2){
                        B5_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_B5_array[i8][0].status==3){
                        B5_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B6
var B6_row_of_first_table= badminton_table[0].children[0].children[14];
var B6_row_of_second_table= badminton_table[1].children[0].children[14];
var B6_row_of_third_table= badminton_table[2].children[0].children[14];

var database_B6_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B6")){
        database_B6_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B6_array.length; i2++){
    for(var i3=0; i3<database_B6_array[i2][1][0].split(",").length; i3++){
        if(database_B6_array[i2][1][0].split(",")[i3] =="B6"){
            var haha= database_B6_array[i2][1][0].split(",")[i3];
            database_B6_array[i2].push([database_B6_array[i2][1][1].split(",")[i3]+ "," +database_B6_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B6_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B6_array.length ;i4++){
    for(var i5=1; i5<database_B6_array[i4].length; i5++ ){
            var startTime = database_B6_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B6_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B6_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B6_array.length ;i7++){
    if(Array.isArray(database_B6_array[i7][5])){
        database_B6_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B6_array[i7][4])){
        database_B6_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B6_array[i7][3])){
        database_B6_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B6_array[i7][2])){
        database_B6_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B6_array[i7][1])){
        database_B6_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B6_array.length; i8++){
    for(var i9=1; i9<database_B6_array[i8].length; i9++){
        for(var i10=1; i10<B6_row_of_first_table.children.length; i10++){
            if(database_B6_array[i8][i9]==B6_row_of_first_table.children[i10].innerHTML){
                B6_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B6_array[i8][0].id+"' onclick='show_request(this)'>" + database_B6_array[i8][0].name + "</button><br>"+database_B6_array[i8][0].contactNum;
                B6_row_of_first_table.children[i10].style.color = "black";
                if(database_B6_array[i8][0].status==1){
                     B6_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B6_array[i8][0].status==2){
                    B6_row_of_first_table.children[i10].style.background="#feb694";
                }else if(database_B6_array[i8][0].status==3){
                    B6_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B6_array.length; i8++){
    for(var i9=1; i9<database_B6_array[i8].length; i9++){
        for(var i10=1; i10<B6_row_of_second_table.children.length; i10++){
            if(database_B6_array[i8][i9]==B6_row_of_second_table.children[i10].innerHTML){
                B6_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B6_array[i8][0].id+"' onclick='show_request(this)'>" + database_B6_array[i8][0].name + "</button><br>"+database_B6_array[i8][0].contactNum;
                B6_row_of_second_table.children[i10].style.color = "black";
                    if(database_B6_array[i8][0].status==1){
                         B6_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B6_array[i8][0].status==2){
                        B6_row_of_second_table.children[i10].style.background="#feb694";
                    }else if(database_B6_array[i8][0].status==3){
                        B6_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B6_array.length; i8++){
    for(var i9=1; i9<database_B6_array[i8].length; i9++){
        for(var i10=1; i10<B6_row_of_third_table.children.length; i10++){
            if(database_B6_array[i8][i9]==B6_row_of_third_table.children[i10].innerHTML){
                B6_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B6_array[i8][0].id+"' onclick='show_request(this)'>" + database_B6_array[i8][0].name + "</button><br>"+database_B6_array[i8][0].contactNum;
                B6_row_of_third_table.children[i10].style.color = "black";   
                    if(database_B6_array[i8][0].status==1){
                         B6_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B6_array[i8][0].status==2){
                        B6_row_of_third_table.children[i10].style.background="#feb694";
                    }else if(database_B6_array[i8][0].status==3){
                        B6_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B7
var B7_row_of_first_table= badminton_table[0].children[0].children[15];
var B7_row_of_second_table= badminton_table[1].children[0].children[15];
var B7_row_of_third_table= badminton_table[2].children[0].children[15];

var database_B7_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B7")){
        database_B7_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B7_array.length; i2++){
    for(var i3=0; i3<database_B7_array[i2][1][0].split(",").length; i3++){
        if(database_B7_array[i2][1][0].split(",")[i3] =="B7"){
            var haha= database_B7_array[i2][1][0].split(",")[i3];
            database_B7_array[i2].push([database_B7_array[i2][1][1].split(",")[i3]+ "," +database_B7_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B7_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B7_array.length ;i4++){
    for(var i5=1; i5<database_B7_array[i4].length; i5++ ){
            var startTime = database_B7_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B7_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B7_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B7_array.length ;i7++){
    if(Array.isArray(database_B7_array[i7][5])){
        database_B7_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B7_array[i7][4])){
        database_B7_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B7_array[i7][3])){
        database_B7_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B7_array[i7][2])){
        database_B7_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B7_array[i7][1])){
        database_B7_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B7_array.length; i8++){
    for(var i9=1; i9<database_B7_array[i8].length; i9++){
        for(var i10=1; i10<B7_row_of_first_table.children.length; i10++){
            if(database_B7_array[i8][i9]==B7_row_of_first_table.children[i10].innerHTML){
                B7_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B7_array[i8][0].id+"' onclick='show_request(this)'>" + database_B7_array[i8][0].name + "</button><br>"+database_B7_array[i8][0].contactNum;
                B7_row_of_first_table.children[i10].style.color = "black";
                if(database_B7_array[i8][0].status==1){
                     B7_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B7_array[i8][0].status==2){
                    B7_row_of_first_table.children[i10].style.background="#feB794";
                }else if(database_B7_array[i8][0].status==3){
                    B7_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B7_array.length; i8++){
    for(var i9=1; i9<database_B7_array[i8].length; i9++){
        for(var i10=1; i10<B7_row_of_second_table.children.length; i10++){
            if(database_B7_array[i8][i9]==B7_row_of_second_table.children[i10].innerHTML){
                B7_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B7_array[i8][0].id+"' onclick='show_request(this)'>" + database_B7_array[i8][0].name + "</button><br>"+database_B7_array[i8][0].contactNum;
                B7_row_of_second_table.children[i10].style.color = "black";
                    if(database_B7_array[i8][0].status==1){
                         B7_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B7_array[i8][0].status==2){
                        B7_row_of_second_table.children[i10].style.background="#feB794";
                    }else if(database_B7_array[i8][0].status==3){
                        B7_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B7_array.length; i8++){
    for(var i9=1; i9<database_B7_array[i8].length; i9++){
        for(var i10=1; i10<B7_row_of_third_table.children.length; i10++){
            if(database_B7_array[i8][i9]==B7_row_of_third_table.children[i10].innerHTML){
                B7_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B7_array[i8][0].id+"' onclick='show_request(this)'>" + database_B7_array[i8][0].name + "</button><br>"+database_B7_array[i8][0].contactNum;
                B7_row_of_third_table.children[i10].style.color = "black";    
                    if(database_B7_array[i8][0].status==1){
                         B7_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B7_array[i8][0].status==2){
                        B7_row_of_third_table.children[i10].style.background="#feB794";
                    }else if(database_B7_array[i8][0].status==3){
                        B7_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}

//B8
var B8_row_of_first_table= badminton_table[0].children[0].children[16];
var B8_row_of_second_table= badminton_table[1].children[0].children[16];
var B8_row_of_third_table= badminton_table[2].children[0].children[16];

var database_B8_array = []; 

//get the necessary data from database and convert to array
 bookings.forEach(function(booking){ 
    var courtNumString =  booking.courtNum ;
    if(courtNumString.split(",").includes("B8")){
        database_B8_array.push([{name: booking.name .substring(0, 8),contactNum: booking.phNumber ,status: booking.status ,id: booking._id },[ booking.courtNum ,  booking.startTime , booking.endTime ]]);
    }
 }); 

for (var i2=0; i2<database_B8_array.length; i2++){
    for(var i3=0; i3<database_B8_array[i2][1][0].split(",").length; i3++){
        if(database_B8_array[i2][1][0].split(",")[i3] =="B8"){
            var haha= database_B8_array[i2][1][0].split(",")[i3];
            database_B8_array[i2].push([database_B8_array[i2][1][1].split(",")[i3]+ "," +database_B8_array[i2][1][2].split(",")[i3]]);
        }   
    }
    database_B8_array[i2].splice(1,1);
}
//convert to combined array
for(var i4=0; i4<database_B8_array.length ;i4++){
    for(var i5=1; i5<database_B8_array[i4].length; i5++ ){
            var startTime = database_B8_array[i4][i5][0].split(",")[0];  //"11pm"
            var endTime = database_B8_array[i4][i5][0].split(",")[1];    //"1am"
            
            var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTime});
            var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTime});
            var one_point_array =[];
            for (var i7=indexNum_of_start_time; i7<=indexNum_of_end_time ; i7++ ){
                one_point_array.push(all_timing[i7]);
            }
            for (var i6=0 ; i6< one_point_array.length-1 ; i6++) {
                database_B8_array[i4].push(one_point_array[i6].toString()+"-"+one_point_array[i6+1].toString()); 
            }
    }
}

//clear the redundant array
for(var i7=0 ; i7<database_B8_array.length ;i7++){
    if(Array.isArray(database_B8_array[i7][5])){
        database_B8_array[i7].splice(1, 5);
    }
    if(Array.isArray(database_B8_array[i7][4])){
        database_B8_array[i7].splice(1, 4);
    }
    if(Array.isArray(database_B8_array[i7][3])){
        database_B8_array[i7].splice(1, 3);
    }
    if(Array.isArray(database_B8_array[i7][2])){
        database_B8_array[i7].splice(1, 2);
    }
    if(Array.isArray(database_B8_array[i7][1])){
        database_B8_array[i7].splice(1, 1);
    }
}

//first table for loop
for(var i8=0; i8<database_B8_array.length; i8++){
    for(var i9=1; i9<database_B8_array[i8].length; i9++){
        for(var i10=1; i10<B8_row_of_first_table.children.length; i10++){
            if(database_B8_array[i8][i9]==B8_row_of_first_table.children[i10].innerHTML){
                B8_row_of_first_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B8_array[i8][0].id+"' onclick='show_request(this)'>" + database_B8_array[i8][0].name + "</button><br>"+database_B8_array[i8][0].contactNum;
                B8_row_of_first_table.children[i10].style.color = "black";
                if(database_B8_array[i8][0].status==1){
                     B8_row_of_first_table.children[i10].style.background="chartreuse";
                }else if(database_B8_array[i8][0].status==2){
                    B8_row_of_first_table.children[i10].style.background="#feB894";
                }else if(database_B8_array[i8][0].status==3){
                    B8_row_of_first_table.children[i10].style.background="powderblue";
                }
                
            }; 
        }
    }
}

//second table for loop
for(var i8=0; i8<database_B8_array.length; i8++){
    for(var i9=1; i9<database_B8_array[i8].length; i9++){
        for(var i10=1; i10<B8_row_of_second_table.children.length; i10++){
            if(database_B8_array[i8][i9]==B8_row_of_second_table.children[i10].innerHTML){
                B8_row_of_second_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B8_array[i8][0].id+"' onclick='show_request(this)'>" + database_B8_array[i8][0].name + "</button><br>"+database_B8_array[i8][0].contactNum;
                B8_row_of_second_table.children[i10].style.color = "black";
                    if(database_B8_array[i8][0].status==1){
                         B8_row_of_second_table.children[i10].style.background="chartreuse";
                    }else if(database_B8_array[i8][0].status==2){
                        B8_row_of_second_table.children[i10].style.background="#feB894";
                    }else if(database_B8_array[i8][0].status==3){
                        B8_row_of_second_table.children[i10].style.background="powderblue";
                    }    
                
            }; 
        }
    }
}

//third table for loop
for(var i8=0; i8<database_B8_array.length; i8++){
    for(var i9=1; i9<database_B8_array[i8].length; i9++){
        for(var i10=1; i10<B8_row_of_third_table.children.length; i10++){
            if(database_B8_array[i8][i9]==B8_row_of_third_table.children[i10].innerHTML){
                B8_row_of_third_table.children[i10].innerHTML="<button data-toggle='modal' data-target='#exampleModalCenter3' class='btn-link _"+database_B8_array[i8][0].id+"' onclick='show_request(this)'>" + database_B8_array[i8][0].name + "</button><br>"+database_B8_array[i8][0].contactNum;
                B8_row_of_third_table.children[i10].style.color = "black";    
                    if(database_B8_array[i8][0].status==1){
                         B8_row_of_third_table.children[i10].style.background="chartreuse";
                    }else if(database_B8_array[i8][0].status==2){
                        B8_row_of_third_table.children[i10].style.background="#feB894";
                    }else if(database_B8_array[i8][0].status==3){
                        B8_row_of_third_table.children[i10].style.background="powderblue";
                    }             
                    
            }; 
        }
    }
}
hoverOverEffect();
}


function getTodayDate(){
//   var today = new Date();
//   var day= today.getDate();
//   var month= today.getMonth()+1;
//   day = checkDate(day);
//   month = checkDate(month);
  
//   var year= today.getFullYear();
//   var fullDate = day + "-" + month + "-" + year;
//   return fullDate;
    var show_date_value = document.getElementById("show_date").value; 
    return show_date_value;
}

function checkDate(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}