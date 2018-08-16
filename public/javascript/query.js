/* global $ */
/* global showBookings*/

var all_timing = ["8am", "8.30am","9am","9.30am", "10am", "10.30am", "11am", "11.30am", "12pm", "12.30pm", "1pm", "1.30pm", "2pm", "2.30pm", "3pm", "3.30pm", "4pm", "4.30pm", "5pm", "5.30pm", "6pm", "6.30pm", "7pm", "7.30pm", "8pm", "8.30pm", "9pm", "9.30pm", "10pm", "10.30pm", "11pm", "11.30pm", "12am", "12.30am", "1am", "1.30am", "2am", "2.30am", "3am"];
var badminton_table = document.getElementsByClassName("badminton_table"); 
var futsal_table = document.getElementsByClassName("futsal_table");

function request(){
    var date = document.getElementById("show_date").value;
    
    $.getJSON('/api/bookings/date/'+date)
    .then(showBookings);
}


