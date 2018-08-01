/*global showPrice*/

var court_number_drop_down_list = document.getElementsByClassName("court_number_drop_down_list");
var end_time_drop_down_list = document.getElementsByClassName("end_time_drop_down_list");
var start_time_drop_down_list = document.getElementsByClassName("start_time_drop_down_list");

var full_day_timing = ["8am", "8.30am","9am","9.30am", "10am", "10.30am", "11am", "11.30am", "12pm", "12.30pm", "1pm", "1.30pm", "2pm", "2.30pm", "3pm", "3.30pm", "4pm", "4.30pm", "5pm", "5.30pm", "6pm", "6.30pm", "7pm", "7.30pm", "8pm", "8.30pm", "9pm", "9.30pm", "10pm", "10.30pm", "11pm", "11.30pm", "12am", "12.30am", "1am", "1.30am", "2am", "2.30am", "3am"];
var counter=0;

var badminton_court_option="<option value='P1'>P1</option><option value='P2'>P2</option><option value='P3'>P3</option><option value='P4'>P4</option><option value='P5'>P5</option><option value='P6'>P6</option><option value='P7'>P7</option><option value='P8'>P8</option><option value='B1'>B1</option><option value='B2'>B2</option><option value='B3'>B3</option><option value='B4'>B4</option><option value='B5'>B5</option><option value='B6'>B6</option><option value='B7'>B7</option><option value='B8'>B8</option>";
var futsal_court_option="<option value='R1'>R1</option><option value='R2'>R2</option><option value='R3'>R3</option><option value='R4'>R4</option>";

var badminton_radio_button = document.getElementById("badminton_radio_button");
var futsal_radio_button = document.getElementById("futsal_radio_button");

var badminton_court_drop_down_list_full_HTML_text="<label for='courtNum'>Court Number: </label><select name='courtNum' class='court_number_drop_down_list'>" +badminton_court_option +"</select>";
var futsal_court_drop_down_list_full_HTML_text="<label for='courtNum'>Court Number: </label><select name='courtNum' class='court_number_drop_down_list'>" +futsal_court_option +"</select>";

var start_time_drop_down_list_full_HTML_text="<br><label for='startTime'>Start Time: </label><select name='startTime' class='start_time_drop_down_list' onchange='endTimeChangeChecking()'><option value='8am'>8am</option><option value='8.30am'>8.30am</option><option value='9am'>9am</option><option value='9.30am'>9.30am</option><option value='10am'>10am</option><option value='10.30am'>10.30am</option><option value='11am'>11am</option><option value='11.30am'>11.30am</option><option value='12pm'>12pm</option><option value='12.30pm'>12.30pm</option><option value='1pm'>1pm</option><option value='1.30pm'>1.30pm</option><option value='2pm'>2pm</option><option value='2.30pm'>2.30pm</option><option value='3pm'>3pm</option><option value='3.30pm'>3.30pm</option><option value='4pm'>4pm</option><option value='4.30pm'>4.30pm</option><option value='5pm'>5pm</option><option value='5.30pm'>5.30pm</option><option value='6pm'>6pm</option><option value='6.30pm'>6.30pm</option><option value='7pm'>7pm</option><option value='7.30pm'>7.30pm</option><option value='8pm'>8pm</option><option value='8.30pm'>8.30pm</option><option value='9pm'>9pm</option><option value='9.30pm'>9.30pm</option><option value='10pm'>10pm</option><option value='10.30pm'>10.30pm</option><option value='11pm'>11pm</option><option value='11.30pm'>11.30pm</option><option value='12am'>12am</option><option value='12.30am'>12.30am</option><option value='1am'>1am</option><option value='1.30am'>1.30am</option><option value='2am'>2am</option><option value='2.30am'>2.30am</option></select>";
var end_time_drop_down_list_full_HTML_text="<br><label for='endTime'>End Time: </label><select name='endTime' class='end_time_drop_down_list' onchange='endTimeChangeChecking()'><option value='8.30am'>8.30am</option><option value='9am'>9am</option><option value='9.30am'>9.30am</option><option value='10am'>10am</option><option value='10.30am'>10.30am</option><option value='11am'>11am</option><option value='11.30am'>11.30am</option><option value='12pm'>12pm</option><option value='12.30pm'>12.30pm</option><option value='1pm'>1pm</option><option value='1.30pm'>1.30pm</option><option value='2pm'>2pm</option><option value='2.30pm'>2.30pm</option><option value='3pm'>3pm</option><option value='3.30pm'>3.30pm</option><option value='4pm'>4pm</option><option value='4.30pm'>4.30pm</option><option value='5pm'>5pm</option><option value='5.30pm'>5.30pm</option><option value='6pm'>6pm</option><option value='6.30pm'>6.30pm</option><option value='7pm'>7pm</option><option value='7.30pm'>7.30pm</option><option value='8pm'>8pm</option><option value='8.30pm'>8.30pm</option><option value='9pm'>9pm</option><option value='9.30pm'>9.30pm</option><option value='10pm'>10pm</option><option value='10.30pm'>10.30pm</option><option value='11pm'>11pm</option><option value='11.30pm'>11.30pm</option><option value='12am'>12am</option><option value='12.30am'>12.30am</option><option value='1am'>1am</option><option value='1.30am'>1.30am</option><option value='2am'>2am</option><option value='2.30am'>2.30am</option><option value='3am' selected>3am</option></select><br>";

function badmintonOption(){
    for(var i=0; i<court_number_drop_down_list.length ;i++){
      court_number_drop_down_list[i].innerHTML=badminton_court_option;
    }
    showPrice.value= "";
}

function futsalOption(){
    for(var i=0; i<court_number_drop_down_list.length ;i++){
      court_number_drop_down_list[i].innerHTML=futsal_court_option;
    }
    showPrice.value= "";
}

function endTimeChangeChecking(){
    for(var i=0 ; i< start_time_drop_down_list.length ;i++){
        var start_time_value = start_time_drop_down_list[i].value;
        var indexNum_of_start_time_value = full_day_timing.findIndex(function(timing){ return timing == start_time_value });
        
        var user_chosen_value = end_time_drop_down_list[i].value;
        var indexNum_of_user_chosen_value = full_day_timing.findIndex(function(timing){ return timing == user_chosen_value});
        
        if (indexNum_of_start_time_value >= indexNum_of_user_chosen_value){
          alert("Your can't choose ending time which is before starting time!");
          start_time_drop_down_list[i].value="8am";
        }
    }
}

function addMoreForm(){
    var addOn= document.getElementById("addOn"+counter.toString());
    var numberOfCourt = "<hr><p>" + (counter+2).toString()+ " Courts</p>";
    showPrice.value= "";
    if(badminton_radio_button.checked){
      addOn.innerHTML= numberOfCourt + badminton_court_drop_down_list_full_HTML_text+ start_time_drop_down_list_full_HTML_text+end_time_drop_down_list_full_HTML_text;
    }else if (futsal_radio_button.checked){
      addOn.innerHTML= numberOfCourt + futsal_court_drop_down_list_full_HTML_text+ start_time_drop_down_list_full_HTML_text+end_time_drop_down_list_full_HTML_text;
    }
    
    if (counter != 4){
      counter++;
    }
}  

function deleteForm(){
    var addOn= document.getElementById("addOn"+(counter-1).toString());
    
    addOn.innerHTML="_";
    showPrice.value= "";
    counter--;
}
