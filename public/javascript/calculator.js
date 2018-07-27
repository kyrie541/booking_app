/*global start_time_drop_down_list*/
/*global end_time_drop_down_list*/
/*global badminton_radio_button*/
/*global futsal_radio_button*/

var all_timing = ["8am", "8.30am","9am","9.30am", "10am", "10.30am", "11am", "11.30am", "12pm", "12.30pm", "1pm", "1.30pm", "2pm", "2.30pm", "3pm", "3.30pm", "4pm", "4.30pm", "5pm", "5.30pm", "6pm", "6.30pm", "7pm", "7.30pm", "8pm", "8.30pm", "9pm", "9.30pm", "10pm", "10.30pm", "11pm", "11.30pm", "12am", "12.30am", "1am", "1.30am", "2am", "2.30am", "3am"];

var offPeak = 15;
var normal = 25;
var peak = 40;
var superPeak = 50;

var badminton_price_query_array = [[5, "8am-8.30am"],[5, "8.30am-9am"],[5, "9am-9.30am"],[5, "9.30am-10am"],[6.5, "10am-10.30am"],[6.5, "10.30am-11am"],[6.5, "11am-11.30am"],
[6.5, "11.30am-12pm"],[5, "12pm-12.30pm"],[5,"12.30pm-1pm"],[5,"1pm-1.30pm"],[5,"1.30pm-2pm"],[6.5, "2pm-2.30pm"],[6.5,"2.30pm-3pm"],[6.5,"3pm-3.30pm"],
[6.5, "3.30pm-4pm"],[6.5, "4pm-4.30pm"],[6.5,"4.30pm-5pm"],[6.5,"5pm-5.30pm"],[6.5,"5.30pm-6pm"],[10.5,"6pm-6.30pm"],[10.5,"6.30pm-7pm"],[10.5,"7pm-7.30pm"],
[10.5,"7.30pm-8pm"],[10.5,"8pm-8.30pm"],[11.5,"8.30pm-9pm"],[11.5,"9pm-9.30pm"],[11.5,"9.30pm-10pm"],[11.5,"10pm-10.30pm"],[11.5,"10.30pm-11pm"],[10.5,"11pm-11.30pm"]
,[10.5,"11.30pm-12am"],[10.5,"12am-12.30am"],[10.5,"12.30am-1am"]];

var futsal_price_query_array =[[offPeak, "8am-8.30am"],[offPeak, "8.30am-9am"],[offPeak, "9am-9.30am"],[offPeak, "9.30am-10am"],[normal, "10am-10.30am"],[normal, "10.30am-11am"],[normal, "11am-11.30am"],
[normal, "11.30am-12pm"],[offPeak, "12pm-12.30pm"],[offPeak,"12.30pm-1pm"],[offPeak,"1pm-1.30pm"],[offPeak,"1.30pm-2pm"],[normal, "2pm-2.30pm"],[normal,"2.30pm-3pm"],[normal,"3pm-3.30pm"],
[normal, "3.30pm-4pm"],[normal, "4pm-4.30pm"],[normal,"4.30pm-5pm"],[normal,"5pm-5.30pm"],[normal,"5.30pm-6pm"],[peak,"6pm-6.30pm"],[peak,"6.30pm-7pm"],[peak,"7pm-7.30pm"],
[peak,"7.30pm-8pm"],[peak,"8pm-8.30pm"],[peak,"8.30pm-9pm"],[superPeak,"9pm-9.30pm"],[superPeak,"9.30pm-10pm"],[superPeak,"10pm-10.30pm"],[superPeak,"10.30pm-11pm"],[superPeak,"11pm-11.30pm"]
,[superPeak,"11.30pm-12am"],[superPeak,"12am-12.30am"],[superPeak,"12.30am-1am"], [peak, "1am-1.30am"],[peak, "1.30am-2am"],[peak, "2am-2.30am"],[peak, "2.30am-3am"]];

var showPrice = document.getElementById("showPrice");

function calculateBookingFees() {
    if (start_time_drop_down_list.length ==1){

        var startTimeExample= start_time_drop_down_list[0].value;
        var endTimeExample = end_time_drop_down_list[0].value;
        
        var indexNum_of_start_time = all_timing .findIndex(function(timing){ return timing == startTimeExample});
        var indexNum_of_end_time = all_timing .findIndex(function(timing){ return timing == endTimeExample});
        var one_point_array=[];
        var combined_array = []; 
        var price_array= [];
        
        
        for (var i=indexNum_of_start_time; i<=indexNum_of_end_time ; i++ ){
            one_point_array.push(all_timing[i]);
        }
        
        console.log(one_point_array);
        
        for (var i2=0 ; i2< one_point_array.length-1 ; i2++) {
            combined_array.push(one_point_array[i2].toString()+"-"+one_point_array[i2+1].toString()); 
        }
        
        console.log(combined_array);
        
        if(badminton_radio_button.checked){
            combined_array.forEach(function(duration){
                for(var i3=0; i3<badminton_price_query_array.length; i3++){
                    badminton_price_query_array [i3].forEach(function(numBer){
                        if(numBer==duration){
                            price_array.push(badminton_price_query_array [i3][0]);
                        }
                    });
                }
            });
        }else if(futsal_radio_button.checked){
            combined_array.forEach(function(duration){
                for(var i3=0; i3<futsal_price_query_array.length; i3++){
                    futsal_price_query_array [i3].forEach(function(numBer){
                        if(numBer==duration){
                            price_array.push(futsal_price_query_array [i3][0]);
                        }
                    });
                }
            });
        }
        
        console.log(price_array);
        
        var sum = price_array.reduce((a, b) => a + b, 0);
        showPrice.value= sum;
        
    }else{
        calculateTotalPayment();
    }

}

function calculateTotalPayment(){   
    
    var all_time_array=[];
    var all_time_one_point_array=[[],[],[],[],[]];
    var all_time_combined_array=[[],[],[],[],[]];
    var all_duration = [];
    var all_price_array = []; 
    
    for (var i=0;i<start_time_drop_down_list.length;i++){
        all_time_array.push([start_time_drop_down_list[i].value, end_time_drop_down_list[i].value]);
    }
    console.log(all_time_array);
    
    for (var i2=0 ; i2< all_time_array.length ; i2++) {
        var indexNum_of_starting_time = all_timing.findIndex(function(timing){return timing == all_time_array[i2][0]});
        var indexNum_of_ending_time = all_timing.findIndex(function(timing){return timing == all_time_array[i2][1]});
        
        for (var i3=indexNum_of_starting_time; i3<=indexNum_of_ending_time ; i3++ ){
            all_time_one_point_array[i2].push(all_timing[i3]);
        }
    }
    console.log(all_time_one_point_array);
    
    for (var i4=0 ; i4<all_time_one_point_array.length ; i4++){
        for (var i5=0; i5<all_time_one_point_array[i4].length-1; i5++) {
            all_time_combined_array[i4].push(all_time_one_point_array[i4][i5]+"-"+all_time_one_point_array[i4][i5+1]);
        }
    }
    
    console.log(all_time_combined_array);
    
    all_time_combined_array.forEach(function(durationArray){
        durationArray.forEach(function(duration){
            all_duration.push(duration); 
        });
    });
    
    console.log(all_duration); 
    
    if(badminton_radio_button.checked){
        all_duration.forEach(function(duration){
            for(var i6=0; i6<badminton_price_query_array.length; i6++){
                badminton_price_query_array[i6].forEach(function(numBer){
                    if(numBer==duration){
                        all_price_array.push(badminton_price_query_array [i6][0]);
                    }
                });
            }
        });
    }else if(futsal_radio_button.checked){
        all_duration.forEach(function(duration){
            for(var i6=0; i6<futsal_price_query_array.length; i6++){
                futsal_price_query_array[i6].forEach(function(numBer){
                    if(numBer==duration){
                        all_price_array.push(futsal_price_query_array [i6][0]);
                    }
                });
            }
        });
    }
    
    console.log(all_price_array);
    
    var totalPayment = all_price_array.reduce((a, b) => a + b, 0);
    showPrice.value= totalPayment;

}








