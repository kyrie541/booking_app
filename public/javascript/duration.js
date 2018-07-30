var all_timing = ["8am", "8.30am","9am","9.30am", "10am", "10.30am", "11am", "11.30am", "12pm", "12.30pm", "1pm", "1.30pm", "2pm", "2.30pm", "3pm", "3.30pm", "4pm", "4.30pm", "5pm", "5.30pm", "6pm", "6.30pm", "7pm", "7.30pm", "8pm", "8.30pm", "9pm", "9.30pm", "10pm", "10.30pm", "11pm", "11.30pm", "12am", "12.30am", "1am", "1.30am", "2am", "2.30am", "3am"];

var all_td = document.getElementsByTagName("td");

var array =[];
var counter = -1;

for(var i=3; i<all_td.length; i+=7){
    array.push([]);
    var start_timing_value = all_td[i].innerHTML;
    var end_timing_value = all_td[i+1].innerHTML;
    
    var indexNumber_of_start_timing= all_timing .findIndex(function(timing){ return timing == start_timing_value});
    var indexNumber_of_end_timing= all_timing .findIndex(function(timing){ return timing == end_timing_value}); 
    
    counter++;
    
    for(var i2=indexNumber_of_start_timing ; i2<=indexNumber_of_end_timing; i2++){
        array[counter].push(all_timing[i2]);
    }
    
    all_td[i+2].innerHTML = (array[counter].length-1)*0.5;
}






