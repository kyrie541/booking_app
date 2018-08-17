/* global $ */
/* global addMoreForm */
/* global badmintonOption $ */
/* global futsalOption $ */
/* global showPrice $ */
/* global counter */
/* global deleteForm */
/* global calculateBookingFees */

$(document).keypress(function(event){
    var x = document.getElementsByClassName("carousel-control");
    if(event.which==91){
        x[0].click();
    }else if(event.which==93){
        x[1].click();
    }
});

function activate_deposit(){
  var payment_radio_button = document.getElementsByClassName("payment_radio_button");
  var deposit_input_box= document.getElementById("deposit_input_box");
  if(payment_radio_button[2].checked){
    deposit_input_box.disabled = false;
  }else{
    deposit_input_box.disabled = true;
    deposit_input_box.value="";
  }
}


function editFormRequest(){
    document.getElementById("close_form2").click();
    document.getElementById("updateButton").style.visibility = "visible";
    document.getElementById("createButton").style.visibility = "hidden";
    
    setTimeout(function(){ document.getElementById("bookNowButton").click(); }, 500);
    
    //Solo APi call
    var id = document.getElementById("solo_show_box").innerHTML;
    $.getJSON("/api/bookings/"+id)
    .then(hehe);
    //control edit form code
    //check sport category code
    
    function hehe(booking){
        document.getElementById("show_date2").value= booking.date;
        document.getElementById("name_of_customer").value= booking.name;
        document.getElementById("phNumber_of_customer").value= booking.phNumber;
        document.getElementById("showPrice").value= booking.price;
        
      var badminton_radio_button = document.getElementById("badminton_radio_button");
      var futsal_radio_button = document.getElementById("futsal_radio_button");
      if( booking.type =="badminton"){
        badminton_radio_button.checked = true;
        badmintonOption();
        showPrice.value=  booking.price ;
      }else if( booking.type =="futsal"){
        futsal_radio_button.checked = true;
        futsalOption();
        showPrice.value=  booking.price ;
      }
    
    //status's radio button code
      var status_checkBox = document.getElementsByClassName("payment_radio_button");
      if( booking.status ==1){
        status_checkBox[0].checked = true;
      }else if( booking.status ==2){
        status_checkBox[1].checked = true;
      }else if( booking.status ==3){
        var deposit_input_box= document.getElementById("deposit_input_box");
        status_checkBox[2].checked = true;
        deposit_input_box.value=  booking.deposit ;
      }
      activate_deposit();
      
    //check how many booking then add form
    
        while (counter > 0) {
            deleteForm(); 
        }
      var number_of_form =  booking.courtNum.split(",").length ;
      if(number_of_form==2){
        addMoreForm();
        showPrice.value=  booking.price ;
      }else if(number_of_form==3){
        addMoreForm();
        addMoreForm();
        showPrice.value=  booking.price ;
      }else if(number_of_form==4){
        addMoreForm();
        addMoreForm();
        addMoreForm();
        showPrice.value=  booking.price ;
      }else if(number_of_form==5){
        addMoreForm();
        addMoreForm();
        addMoreForm();
        addMoreForm();
        showPrice.value=  booking.price ;
      }
    
      //put data into the form
      var first_booking_array=[];
      first_booking_array.push( booking.courtNum.split(",")[0] );
      first_booking_array.push( booking.startTime.split(",")[0] );
      first_booking_array.push( booking.endTime.split(",")[0] );
      
      var second_booking_array=[];
      second_booking_array.push( booking.courtNum.split(",")[1] );
      second_booking_array.push( booking.startTime.split(",")[1] );
      second_booking_array.push( booking.endTime.split(",")[1] );
      
      var third_booking_array=[];
      third_booking_array.push( booking.courtNum.split(",")[2] );
      third_booking_array.push( booking.startTime.split(",")[2] );
      third_booking_array.push( booking.endTime.split(",")[2] );
      
      var forth_booking_array=[];
      forth_booking_array.push( booking.courtNum.split(",")[3] );
      forth_booking_array.push( booking.startTime.split(",")[3] );
      forth_booking_array.push( booking.endTime.split(",")[3] );
      
      var fifth_booking_array=[];
      fifth_booking_array.push( booking.courtNum.split(",")[4] );
      fifth_booking_array.push( booking.startTime.split(",")[4] );
      fifth_booking_array.push( booking.endTime.split(",")[4] );
      
      var court_number_drop_down_list = document.getElementsByClassName("court_number_drop_down_list");
      var end_time_drop_down_list = document.getElementsByClassName("end_time_drop_down_list");
      var start_time_drop_down_list = document.getElementsByClassName("start_time_drop_down_list");
      

      if(first_booking_array[0]!=undefined){
        court_number_drop_down_list[0].value=first_booking_array[0];
        start_time_drop_down_list[0].value=first_booking_array[1];
        end_time_drop_down_list[0].value=first_booking_array[2];
      }
      
     
      if(second_booking_array[0]!=undefined){
        court_number_drop_down_list[1].value=second_booking_array[0];
        start_time_drop_down_list[1].value=second_booking_array[1];
        end_time_drop_down_list[1].value=second_booking_array[2];
      }
      
    
      if(third_booking_array[0]!=undefined){
        court_number_drop_down_list[2].value=third_booking_array[0];
        start_time_drop_down_list[2].value=third_booking_array[1];
        end_time_drop_down_list[2].value=third_booking_array[2];
      }
      

      if(forth_booking_array[0]!=undefined){
        court_number_drop_down_list[3].value=forth_booking_array[0];
        start_time_drop_down_list[3].value=forth_booking_array[1];
        end_time_drop_down_list[3].value=forth_booking_array[2];
      }
      
      
      if(fifth_booking_array[0]!=undefined){
        court_number_drop_down_list[4].value=fifth_booking_array[0];
        start_time_drop_down_list[4].value=fifth_booking_array[1];
        end_time_drop_down_list[4].value=fifth_booking_array[2];
      }
      calculateBookingFees();
    }
    
    
}

