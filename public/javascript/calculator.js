/*global start_time_drop_down_list*/
/*global end_time_drop_down_list*/
/*global badminton_radio_button*/
/*global futsal_radio_button*/
/*global $ */
/*global currentUserLocation*/

//Pricing control
var offPeak_futsal;
var normal_futsal;
var peak_futsal;
var superPeak_futsal;

var offPeak_badminton;
var normal_badminton;
var peak_badminton;
var superPeak_badminton;
var weekend_rate_badminton;

var badminton_saturday_price_query_array;
var badminton_sunday_price_query_array;
var badminton_price_query_array;
var futsal_price_query_array;

//API call for pricing
$(document).ready(function(){
    $.getJSON("/api/pricings/location/"+currentUserLocation)
    .then(setPrice);
});

function setPrice(price){
    offPeak_futsal = price[0].offPeak_futsal;
    normal_futsal = price[0].normal_futsal;
    peak_futsal = price[0].peak_futsal;
    superPeak_futsal = price[0].superPeak_futsal;
    offPeak_badminton = price[0].offPeak_badminton;
    normal_badminton = price[0].normal_badminton;
    peak_badminton = price[0].peak_badminton;
    superPeak_badminton = price[0].superPeak_badminton;
    weekend_rate_badminton= price[0].weekend_rate_badminton;
}

setTimeout(function(){
    badminton_saturday_price_query_array = [[weekend_rate_badminton, "8am-8.30am"],[weekend_rate_badminton, "8.30am-9am"],[weekend_rate_badminton, "9am-9.30am"],[weekend_rate_badminton, "9.30am-10am"],[weekend_rate_badminton, "10am-10.30am"],[weekend_rate_badminton, "10.30am-11am"],[weekend_rate_badminton, "11am-11.30am"],
    [weekend_rate_badminton, "11.30am-12pm"],[weekend_rate_badminton, "12pm-12.30pm"],[weekend_rate_badminton,"12.30pm-1pm"],[weekend_rate_badminton,"1pm-1.30pm"],[weekend_rate_badminton,"1.30pm-2pm"],[weekend_rate_badminton, "2pm-2.30pm"],[weekend_rate_badminton,"2.30pm-3pm"],[weekend_rate_badminton,"3pm-3.30pm"],
    [weekend_rate_badminton, "3.30pm-4pm"],[weekend_rate_badminton, "4pm-4.30pm"],[weekend_rate_badminton,"4.30pm-5pm"],[weekend_rate_badminton,"5pm-5.30pm"],[weekend_rate_badminton,"5.30pm-6pm"],[weekend_rate_badminton,"6pm-6.30pm"],[weekend_rate_badminton,"6.30pm-7pm"],[weekend_rate_badminton,"7pm-7.30pm"],
    [weekend_rate_badminton,"7.30pm-8pm"],[weekend_rate_badminton,"8pm-8.30pm"],[weekend_rate_badminton,"8.30pm-9pm"],[weekend_rate_badminton,"9pm-9.30pm"],[weekend_rate_badminton,"9.30pm-10pm"],[weekend_rate_badminton,"10pm-10.30pm"],[weekend_rate_badminton,"10.30pm-11pm"],[weekend_rate_badminton,"11pm-11.30pm"]
    ,[weekend_rate_badminton,"11.30pm-12am"],[weekend_rate_badminton,"12am-12.30am"],[weekend_rate_badminton,"12.30am-1am"],[weekend_rate_badminton,"1am-1.30am"],[weekend_rate_badminton,"1.30am-2am"],[weekend_rate_badminton,"2am-2.30am"],[weekend_rate_badminton,"2.30am-3am"]];
    
    badminton_sunday_price_query_array = [[weekend_rate_badminton, "8am-8.30am"],[weekend_rate_badminton, "8.30am-9am"],[weekend_rate_badminton, "9am-9.30am"],[weekend_rate_badminton, "9.30am-10am"],[weekend_rate_badminton, "10am-10.30am"],[weekend_rate_badminton, "10.30am-11am"],[weekend_rate_badminton, "11am-11.30am"],
    [weekend_rate_badminton, "11.30am-12pm"],[weekend_rate_badminton, "12pm-12.30pm"],[weekend_rate_badminton,"12.30pm-1pm"],[weekend_rate_badminton,"1pm-1.30pm"],[weekend_rate_badminton,"1.30pm-2pm"],[weekend_rate_badminton, "2pm-2.30pm"],[weekend_rate_badminton,"2.30pm-3pm"],[weekend_rate_badminton,"3pm-3.30pm"],
    [weekend_rate_badminton, "3.30pm-4pm"],[weekend_rate_badminton, "4pm-4.30pm"],[weekend_rate_badminton,"4.30pm-5pm"],[weekend_rate_badminton,"5pm-5.30pm"],[weekend_rate_badminton,"5.30pm-6pm"],[weekend_rate_badminton,"6pm-6.30pm"],[weekend_rate_badminton,"6.30pm-7pm"],[normal_badminton,"7pm-7.30pm"],
    [normal_badminton,"7.30pm-8pm"],[normal_badminton,"8pm-8.30pm"],[normal_badminton,"8.30pm-9pm"],[normal_badminton,"9pm-9.30pm"],[normal_badminton,"9.30pm-10pm"],[normal_badminton,"10pm-10.30pm"],[normal_badminton,"10.30pm-11pm"],[normal_badminton,"11pm-11.30pm"]
    ,[normal_badminton,"11.30pm-12am"],[normal_badminton,"12am-12.30am"],[normal_badminton,"12.30am-1am"],[normal_badminton,"1am-1.30am"],[normal_badminton,"1.30am-2am"],[normal_badminton,"2am-2.30am"],[normal_badminton,"2.30am-3am"]];
    
    badminton_price_query_array = [[offPeak_badminton, "8am-8.30am"],[offPeak_badminton, "8.30am-9am"],[offPeak_badminton, "9am-9.30am"],[offPeak_badminton, "9.30am-10am"],[normal_badminton, "10am-10.30am"],[normal_badminton, "10.30am-11am"],[normal_badminton, "11am-11.30am"],
    [normal_badminton, "11.30am-12pm"],[offPeak_badminton, "12pm-12.30pm"],[offPeak_badminton,"12.30pm-1pm"],[offPeak_badminton,"1pm-1.30pm"],[offPeak_badminton,"1.30pm-2pm"],[normal_badminton, "2pm-2.30pm"],[normal_badminton,"2.30pm-3pm"],[normal_badminton,"3pm-3.30pm"],
    [normal_badminton, "3.30pm-4pm"],[normal_badminton, "4pm-4.30pm"],[normal_badminton,"4.30pm-5pm"],[normal_badminton,"5pm-5.30pm"],[normal_badminton,"5.30pm-6pm"],[peak_badminton,"6pm-6.30pm"],[peak_badminton,"6.30pm-7pm"],[peak_badminton,"7pm-7.30pm"],
    [peak_badminton,"7.30pm-8pm"],[peak_badminton,"8pm-8.30pm"],[superPeak_badminton,"8.30pm-9pm"],[superPeak_badminton,"9pm-9.30pm"],[superPeak_badminton,"9.30pm-10pm"],[superPeak_badminton,"10pm-10.30pm"],[superPeak_badminton,"10.30pm-11pm"],[peak_badminton,"11pm-11.30pm"]
    ,[peak_badminton,"11.30pm-12am"],[peak_badminton,"12am-12.30am"],[peak_badminton,"12.30am-1am"],[normal_badminton,"1am-1.30am"],[normal_badminton,"1.30am-2am"],[normal_badminton,"2am-2.30am"],[normal_badminton,"2.30am-3am"]];
    
    futsal_price_query_array =[[offPeak_futsal, "8am-8.30am"],[offPeak_futsal, "8.30am-9am"],[offPeak_futsal, "9am-9.30am"],[offPeak_futsal, "9.30am-10am"],[normal_futsal, "10am-10.30am"],[normal_futsal, "10.30am-11am"],[normal_futsal, "11am-11.30am"],
    [normal_futsal, "11.30am-12pm"],[offPeak_futsal, "12pm-12.30pm"],[offPeak_futsal,"12.30pm-1pm"],[offPeak_futsal,"1pm-1.30pm"],[offPeak_futsal,"1.30pm-2pm"],[normal_futsal, "2pm-2.30pm"],[normal_futsal,"2.30pm-3pm"],[normal_futsal,"3pm-3.30pm"],
    [normal_futsal, "3.30pm-4pm"],[normal_futsal, "4pm-4.30pm"],[normal_futsal,"4.30pm-5pm"],[normal_futsal,"5pm-5.30pm"],[normal_futsal,"5.30pm-6pm"],[peak_futsal,"6pm-6.30pm"],[peak_futsal,"6.30pm-7pm"],[peak_futsal,"7pm-7.30pm"],
    [peak_futsal,"7.30pm-8pm"],[peak_futsal,"8pm-8.30pm"],[peak_futsal,"8.30pm-9pm"],[superPeak_futsal,"9pm-9.30pm"],[superPeak_futsal,"9.30pm-10pm"],[superPeak_futsal,"10pm-10.30pm"],[superPeak_futsal,"10.30pm-11pm"],[superPeak_futsal,"11pm-11.30pm"]
    ,[superPeak_futsal,"11.30pm-12am"],[superPeak_futsal,"12am-12.30am"],[superPeak_futsal,"12.30am-1am"], [peak_futsal, "1am-1.30am"],[peak_futsal, "1.30am-2am"],[peak_futsal, "2am-2.30am"],[peak_futsal, "2.30am-3am"]];   
}, 2000);

//Pricing Control Here
// var offPeak_futsal = 15;
// var normal_futsal = 25;
// var peak_futsal = 40;
// var superPeak_futsal = 50;

// var offPeak_badminton = 5;
// var normal_badminton = 6.5;
// var peak_badminton = 10.5;
// var superPeak_badminton = 11.5;
// var weekend_rate_badminton= 9;

// var badminton_saturday_price_query_array = [[weekend_rate_badminton, "8am-8.30am"],[weekend_rate_badminton, "8.30am-9am"],[weekend_rate_badminton, "9am-9.30am"],[weekend_rate_badminton, "9.30am-10am"],[weekend_rate_badminton, "10am-10.30am"],[weekend_rate_badminton, "10.30am-11am"],[weekend_rate_badminton, "11am-11.30am"],
// [weekend_rate_badminton, "11.30am-12pm"],[weekend_rate_badminton, "12pm-12.30pm"],[weekend_rate_badminton,"12.30pm-1pm"],[weekend_rate_badminton,"1pm-1.30pm"],[weekend_rate_badminton,"1.30pm-2pm"],[weekend_rate_badminton, "2pm-2.30pm"],[weekend_rate_badminton,"2.30pm-3pm"],[weekend_rate_badminton,"3pm-3.30pm"],
// [weekend_rate_badminton, "3.30pm-4pm"],[weekend_rate_badminton, "4pm-4.30pm"],[weekend_rate_badminton,"4.30pm-5pm"],[weekend_rate_badminton,"5pm-5.30pm"],[weekend_rate_badminton,"5.30pm-6pm"],[weekend_rate_badminton,"6pm-6.30pm"],[weekend_rate_badminton,"6.30pm-7pm"],[weekend_rate_badminton,"7pm-7.30pm"],
// [weekend_rate_badminton,"7.30pm-8pm"],[weekend_rate_badminton,"8pm-8.30pm"],[weekend_rate_badminton,"8.30pm-9pm"],[weekend_rate_badminton,"9pm-9.30pm"],[weekend_rate_badminton,"9.30pm-10pm"],[weekend_rate_badminton,"10pm-10.30pm"],[weekend_rate_badminton,"10.30pm-11pm"],[weekend_rate_badminton,"11pm-11.30pm"]
// ,[weekend_rate_badminton,"11.30pm-12am"],[weekend_rate_badminton,"12am-12.30am"],[weekend_rate_badminton,"12.30am-1am"],[weekend_rate_badminton,"1am-1.30am"],[weekend_rate_badminton,"1.30am-2am"],[weekend_rate_badminton,"2am-2.30am"],[weekend_rate_badminton,"2.30am-3am"]];

// var badminton_sunday_price_query_array = [[weekend_rate_badminton, "8am-8.30am"],[weekend_rate_badminton, "8.30am-9am"],[weekend_rate_badminton, "9am-9.30am"],[weekend_rate_badminton, "9.30am-10am"],[weekend_rate_badminton, "10am-10.30am"],[weekend_rate_badminton, "10.30am-11am"],[weekend_rate_badminton, "11am-11.30am"],
// [weekend_rate_badminton, "11.30am-12pm"],[weekend_rate_badminton, "12pm-12.30pm"],[weekend_rate_badminton,"12.30pm-1pm"],[weekend_rate_badminton,"1pm-1.30pm"],[weekend_rate_badminton,"1.30pm-2pm"],[weekend_rate_badminton, "2pm-2.30pm"],[weekend_rate_badminton,"2.30pm-3pm"],[weekend_rate_badminton,"3pm-3.30pm"],
// [weekend_rate_badminton, "3.30pm-4pm"],[weekend_rate_badminton, "4pm-4.30pm"],[weekend_rate_badminton,"4.30pm-5pm"],[weekend_rate_badminton,"5pm-5.30pm"],[weekend_rate_badminton,"5.30pm-6pm"],[weekend_rate_badminton,"6pm-6.30pm"],[weekend_rate_badminton,"6.30pm-7pm"],[normal_badminton,"7pm-7.30pm"],
// [normal_badminton,"7.30pm-8pm"],[normal_badminton,"8pm-8.30pm"],[normal_badminton,"8.30pm-9pm"],[normal_badminton,"9pm-9.30pm"],[normal_badminton,"9.30pm-10pm"],[normal_badminton,"10pm-10.30pm"],[normal_badminton,"10.30pm-11pm"],[normal_badminton,"11pm-11.30pm"]
// ,[normal_badminton,"11.30pm-12am"],[normal_badminton,"12am-12.30am"],[normal_badminton,"12.30am-1am"],[normal_badminton,"1am-1.30am"],[normal_badminton,"1.30am-2am"],[normal_badminton,"2am-2.30am"],[normal_badminton,"2.30am-3am"]];

// var badminton_price_query_array = [[offPeak_badminton, "8am-8.30am"],[offPeak_badminton, "8.30am-9am"],[offPeak_badminton, "9am-9.30am"],[offPeak_badminton, "9.30am-10am"],[normal_badminton, "10am-10.30am"],[normal_badminton, "10.30am-11am"],[normal_badminton, "11am-11.30am"],
// [normal_badminton, "11.30am-12pm"],[offPeak_badminton, "12pm-12.30pm"],[offPeak_badminton,"12.30pm-1pm"],[offPeak_badminton,"1pm-1.30pm"],[offPeak_badminton,"1.30pm-2pm"],[normal_badminton, "2pm-2.30pm"],[normal_badminton,"2.30pm-3pm"],[normal_badminton,"3pm-3.30pm"],
// [normal_badminton, "3.30pm-4pm"],[normal_badminton, "4pm-4.30pm"],[normal_badminton,"4.30pm-5pm"],[normal_badminton,"5pm-5.30pm"],[normal_badminton,"5.30pm-6pm"],[peak_badminton,"6pm-6.30pm"],[peak_badminton,"6.30pm-7pm"],[peak_badminton,"7pm-7.30pm"],
// [peak_badminton,"7.30pm-8pm"],[peak_badminton,"8pm-8.30pm"],[superPeak_badminton,"8.30pm-9pm"],[superPeak_badminton,"9pm-9.30pm"],[superPeak_badminton,"9.30pm-10pm"],[superPeak_badminton,"10pm-10.30pm"],[superPeak_badminton,"10.30pm-11pm"],[peak_badminton,"11pm-11.30pm"]
// ,[peak_badminton,"11.30pm-12am"],[peak_badminton,"12am-12.30am"],[peak_badminton,"12.30am-1am"],[normal_badminton,"1am-1.30am"],[normal_badminton,"1.30am-2am"],[normal_badminton,"2am-2.30am"],[normal_badminton,"2.30am-3am"]];

// var futsal_price_query_array =[[offPeak_futsal, "8am-8.30am"],[offPeak_futsal, "8.30am-9am"],[offPeak_futsal, "9am-9.30am"],[offPeak_futsal, "9.30am-10am"],[normal_futsal, "10am-10.30am"],[normal_futsal, "10.30am-11am"],[normal_futsal, "11am-11.30am"],
// [normal_futsal, "11.30am-12pm"],[offPeak_futsal, "12pm-12.30pm"],[offPeak_futsal,"12.30pm-1pm"],[offPeak_futsal,"1pm-1.30pm"],[offPeak_futsal,"1.30pm-2pm"],[normal_futsal, "2pm-2.30pm"],[normal_futsal,"2.30pm-3pm"],[normal_futsal,"3pm-3.30pm"],
// [normal_futsal, "3.30pm-4pm"],[normal_futsal, "4pm-4.30pm"],[normal_futsal,"4.30pm-5pm"],[normal_futsal,"5pm-5.30pm"],[normal_futsal,"5.30pm-6pm"],[peak_futsal,"6pm-6.30pm"],[peak_futsal,"6.30pm-7pm"],[peak_futsal,"7pm-7.30pm"],
// [peak_futsal,"7.30pm-8pm"],[peak_futsal,"8pm-8.30pm"],[peak_futsal,"8.30pm-9pm"],[superPeak_futsal,"9pm-9.30pm"],[superPeak_futsal,"9.30pm-10pm"],[superPeak_futsal,"10pm-10.30pm"],[superPeak_futsal,"10.30pm-11pm"],[superPeak_futsal,"11pm-11.30pm"]
// ,[superPeak_futsal,"11.30pm-12am"],[superPeak_futsal,"12am-12.30am"],[superPeak_futsal,"12.30am-1am"], [peak_futsal, "1am-1.30am"],[peak_futsal, "1.30am-2am"],[peak_futsal, "2am-2.30am"],[peak_futsal, "2.30am-3am"]];

/////////////////


var all_timing = ["8am", "8.30am","9am","9.30am", "10am", "10.30am", "11am", "11.30am", "12pm", "12.30pm", "1pm", "1.30pm", "2pm", "2.30pm", "3pm", "3.30pm", "4pm", "4.30pm", "5pm", "5.30pm", "6pm", "6.30pm", "7pm", "7.30pm", "8pm", "8.30pm", "9pm", "9.30pm", "10pm", "10.30pm", "11pm", "11.30pm", "12am", "12.30am", "1am", "1.30am", "2am", "2.30am", "3am"];

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
        
        //weekend rate
        if(getDayAccordingToUserInput()=="Saturday"){
            if(badminton_radio_button.checked){
                combined_array.forEach(function(duration){
                    for(var i3=0; i3<badminton_saturday_price_query_array.length; i3++){
                        badminton_saturday_price_query_array [i3].forEach(function(numBer){
                            if(numBer==duration){
                                price_array.push(badminton_saturday_price_query_array [i3][0]);
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
        }else if(getDayAccordingToUserInput()=="Sunday"){
            if(badminton_radio_button.checked){
                combined_array.forEach(function(duration){
                    for(var i3=0; i3<badminton_sunday_price_query_array.length; i3++){
                        badminton_sunday_price_query_array [i3].forEach(function(numBer){
                            if(numBer==duration){
                                price_array.push(badminton_sunday_price_query_array [i3][0]);
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
        //weekday rate
        }else{
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
        }
        
        console.log(price_array);
        
        var sum = price_array.reduce((a, b) => a + b, 0);
        showPrice.value= sum;
        
        deduct_deposit(sum);
        
        var solo_show_price = document.getElementsByClassName("solo_show_price");
        solo_show_price[0].innerHTML = " Price : RM "+sum;
        
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
    
    //get the length of each court timing
    var length_of_each_array=[];
    console.log(all_time_combined_array); 
    for (var x=0; x<all_time_combined_array.length; x++){
        if(all_time_combined_array[x].length!=0){
            length_of_each_array.push(all_time_combined_array[x].length);
        }
    }
    console.log(length_of_each_array);
    
    all_time_combined_array.forEach(function(durationArray){
        durationArray.forEach(function(duration){
            all_duration.push(duration); 
        });
    });
    
    console.log(all_duration); 
    
    //weekend rate
    if(getDayAccordingToUserInput()=="Saturday"){
        if(badminton_radio_button.checked){
            all_duration.forEach(function(duration){
                for(var i6=0; i6<badminton_saturday_price_query_array.length; i6++){
                    badminton_saturday_price_query_array[i6].forEach(function(numBer){
                        if(numBer==duration){
                            all_price_array.push(badminton_saturday_price_query_array [i6][0]);
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
    }else if(getDayAccordingToUserInput()=="Sunday"){
        if(badminton_radio_button.checked){
            all_duration.forEach(function(duration){
                for(var i6=0; i6<badminton_sunday_price_query_array.length; i6++){
                    badminton_sunday_price_query_array[i6].forEach(function(numBer){
                        if(numBer==duration){
                            all_price_array.push(badminton_sunday_price_query_array [i6][0]);
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
    //weekday rate
    }else{    
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
    }
    
    console.log(all_price_array);
    
    //solo payment code here
    var copy_of_all_price_array = all_price_array.slice();
    var solo_show_price = document.getElementsByClassName("solo_show_price");
    for(var x2=0 ; x2< length_of_each_array.length; x2++){
        var array_to_add = [];
        for(var x3=0 ; x3< length_of_each_array[x2]; x3++){
            array_to_add.push(copy_of_all_price_array[x3]);
        }
        console.log(array_to_add);
        var soloPayment = array_to_add.reduce((a, b) => a + b, 0);
        solo_show_price[x2].innerHTML=" Price : RM "+soloPayment;
        
        copy_of_all_price_array.splice(0, length_of_each_array[x2]);
        console.log(copy_of_all_price_array);
    }
    
    
    
    var totalPayment = all_price_array.reduce((a, b) => a + b, 0);
    
    showPrice.value= totalPayment;
    
    //if got deposit
    deduct_deposit(totalPayment);
}

function deduct_deposit(haha){
    var deposit_input_box= document.getElementById("deposit_input_box");
    var payment_radio_button = document.getElementsByClassName("payment_radio_button");
    if(payment_radio_button[2].checked){
        var after_deduct_deposit = haha - deposit_input_box.value;
        showPrice.value= after_deduct_deposit;
    }    
} 

function getDayAccordingToUserInput(){
    var chosenDate = document.getElementById("show_date").value;
    var year = chosenDate.slice(6, 10);
    var month = chosenDate.slice(3, 5);
    var day = chosenDate.slice(0, 2);
    var month2 = parseInt(month ,10)-1;
    
    var d = new Date(year, month2, day);
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[d.getDay()];
}


//format of setting new date
// var d = new Date(2018, 04, 02);

// chosenDate value = "08-08-2018"







