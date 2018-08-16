/* global $ */
/* global showBookings */
/* global getTodayDate */

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
    document.getElementById("close_form2").click();
    
    $.getJSON("/api/bookings/date/"+getTodayDate())
    .then(showBookings);
}


function show_request(haha){
    var all_class = haha.className;
    var n = all_class.lastIndexOf('_');
    var id_number = all_class.substring(n + 1);
    document.getElementById("solo_show_box").innerHTML = id_number;
    $.getJSON("/api/bookings/"+id_number)
    .then(showBooking);
}

function showBooking(booking){
    
    document.getElementsByClassName("modal-title")[2].innerHTML= "Category: "+ booking.type+"'s booking";
    document.getElementsByClassName("card-title")[0].innerHTML=booking.name+"'s Booking";
    document.getElementsByClassName("card-text")[0].innerHTML= "Booking Date: "+booking.date;
    document.getElementsByClassName("card-text")[1].innerHTML= "Contact Number: "+booking.phNumber;
    document.getElementsByClassName("card-text")[2].innerHTML= "Total Court: "+booking.courtNum.split(",").length;
    document.getElementsByClassName("card-text")[3].innerHTML= "Total Payment: RM "+booking.price;
    var status_show_box = document.getElementById("status_show_box");
    if(booking.status==1){
        status_show_box.innerHTML = '<p class="card-text" style="background-color:chartreuse;"><small class="text-muted">Status: Paid</small></p>';
    }else if(booking.status==2){
        status_show_box.innerHTML = '<p class="card-text" style="background-color:#feb694;"><small class="text-muted">Status: Not Paid Yet</small></p>';
    }else if(booking.status==3){
        status_show_box.innerHTML = '<p class="card-text" style="background-color:powderblue;"><small class="text-muted">Status: Advance Payment</small></p>';
    }
    
    var tbody = document.getElementById("tbody");
    // for (var i2=0; i2<tbody.childNodes.length; i2++){
    //     tbody.removeChild(tbody.childNodes[0]);
    // }
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    for(var i=0; i<booking.courtNum.split(",").length; i++){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var textnode1 = document.createTextNode(booking.courtNum.split(",")[i]);
        
        var start_end_time_text = booking.startTime.split(",")[i]+" to "+booking.endTime.split(",")[i];
        var textnode2 = document.createTextNode(start_end_time_text);
        td1.appendChild(textnode1);
        td2.appendChild(textnode2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        
    }
    
    //control edit link
    // document.getElementsByClassName("card-link")[0].setAttribute("href", "/bookings/"+ booking._id +"/edit");

}

function deleteRequest(){
    var id_number = document.getElementById("solo_show_box").innerHTML;
    var deleteUrl = '/api/bookings/' + id_number;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(refreshTable)
    .catch(function(err){
        console.log(err);
    });

}

//UPDATE BOOKING
function putRequest(){
    var id_number = document.getElementById("solo_show_box").innerHTML;
    var updateUrl = '/api/bookings/' + id_number;
    
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
    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: {
           type: type,
           date: date, 
           startTime: startTime,
           endTime: endTime, 
           name: name,
           phNumber: phNumber, 
           price: price,
           status: status,
           courtNum: courtNum 
        }       
    })
    .then(refreshTable);
}


