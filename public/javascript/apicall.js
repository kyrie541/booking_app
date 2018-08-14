/* global $ */
/* global showBookings */
/* global getTodayDate */
/* global deleteForm */

function postRequest(){
    //   booking date
    var date = document.getElementById("show_date2").value;
    //   sport category
    var type;
    if(document.getElementById("badminton_radio_button").checked){
        type="badminton";
    }else if (document.getElementById("futsal_radio_button").checked){
        type="futsal";
    }
    
    //   court number
    var courtNum_class = document.getElementsByClassName("court_number_drop_down_list");
    var courtArray =[];
    for (var i=0; i<courtNum_class.length; i++){
        courtArray.push(courtNum_class[i].value);
    }
    var courtNum = courtArray.toString();
    
    
    //   start time
    var startTime_class = document.getElementsByClassName("start_time_drop_down_list");
    var startTimeArray =[];
    for (var i2=0; i2<startTime_class.length; i2++){
        startTimeArray.push(startTime_class[i2].value);
    }
    var startTime = startTimeArray.toString();    
    
    //   end time
    var endTime_class = document.getElementsByClassName("end_time_drop_down_list");
    var endTimeArray=[];
    for (var i3=0; i3<startTime_class.length; i3++){
        endTimeArray.push(endTime_class[i3].value);
    }
    var endTime = endTimeArray.toString();      
    
    //   name of customer
    var name = document.getElementById("name_of_customer").value;
    //   phone number
    var phNumber = document.getElementById("phNumber_of_customer").value;
    
    //   paid?
    var status;
    if(document.getElementsByClassName("payment_radio_button")[0].checked){
        status=1 ;
    }else if(document.getElementsByClassName("payment_radio_button")[1].checked){
        status=2 ;
    }else if(document.getElementsByClassName("payment_radio_button")[2].checked){
        status=3 ;
    }
    
    
    //   payment
    var price = document.getElementById("showPrice").value;
    
    $.post('/api/bookings',{
       type: type,
       date: date, 
       startTime: startTime,
       endTime: endTime, 
       name: name,
       phNumber: phNumber, 
       price: price,
       status: status,
       courtNum: courtNum 
    })
    .then(refreshTable)
    .catch(function(err){
        console.log(err);
    });
}

function refreshTable(){
    //refresh booking form
    document.getElementById("name_of_customer").value="";
    document.getElementById("phNumber_of_customer").value="";
    document.getElementsByClassName("end_time_drop_down_list")[0].value="3am";
    document.getElementById("close_form").click();
    
    
    $.getJSON("/api/bookings/date/"+getTodayDate())
    .then(showBookings);
}


function show_request(haha){
    var all_class = haha.className;
    var n = all_class.lastIndexOf('_');
    var id_number = all_class.substring(n + 1);
    console.log(id_number);
    document.getElementById("solo_show_box").innerHTML= id_number;
    
    
//     var str = "foo/bar/test.html";
// var n = str.lastIndexOf('/');
// var result = str.substring(n + 1);
}