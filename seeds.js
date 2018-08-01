var mongoose = require("mongoose");
var Booking = require("./models/booking");

var data = [
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "8am,4pm,8pm",
        endTime: "10am,5pm,10pm",
        name: "Kohxxxxxxxxxxxxxxxxxxxx",
        phNumber: "999",
        price: 78,
        status: 1,
        courtNum: "P1,P5,P6"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "9am,10pm",
        endTime: "10am,12am",
        name: "Koh2",
        phNumber: "01612345678",
        price: 44,
        status: 2,
        courtNum: "P2,B6"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "10am,9.30pm",
        endTime: "12pm,11pm",
        name: "Koh3",
        phNumber: "016-12345678",
        price: 60.5,
        status: 1,
        courtNum: "P3,P6"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "12pm",
        endTime: "1pm",
        name: "Koh4",
        phNumber: "01612345678",
        price: 13,
        status: 1,
        courtNum: "P4"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "3pm",
        endTime: "5pm",
        name: "Koh6",
        phNumber: "99942453",
        price: 26,
        status: 1,
        courtNum: "B8"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "3pm,1.30pm",
        endTime: "5pm,2.30pm",
        name: "Koh5",
        phNumber: "01612345678",
        price: 37.5,
        status: 1,
        courtNum: "P1,P1"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "11pm,6pm",
        endTime: "1am,8pm",
        name: "Koh9",
        phNumber: "888",
        price: 84,
        status: 2,
        courtNum: "P1,B1"
    },
    {
        type:"badminton",
        date: getTodayDate(),
        startTime: "10am,6pm",
        endTime: "12pm,8pm",
        name: "Kyrie",
        phNumber: "963852",
        price: 42,
        status: 3,
        courtNum: "P1,P6"
    },
    {
        type:"futsal",
        date: getTodayDate(),
        startTime: "9pm,4pm",
        endTime: "11pm,6pm",
        name: "Abu",
        phNumber: "01612345678",
        price: 226,
        status: 1,
        courtNum: "R1,R4"
    },    
    {
        type:"futsal",
        date: getTodayDate(),
        startTime: "5pm",
        endTime: "7pm",
        name: "Abmad",
        phNumber: "01612345678",
        price: 130,
        status: 3,
        courtNum: "R2"
    }
];

function getTodayDate(){
    var today = new Date();
    var day= today.getDate();
    var month= today.getMonth()+1;
    var year= today.getFullYear();
    var fullDate = day + "-" + month + "-" + year;
    return fullDate;
}

function seedDB(){
    var date = getTodayDate();
    Booking.remove({date:date}, function(err){
        if(err){
            console.log(err);
        }
    });
    data.forEach(function(seed){
        Booking.create(seed, function(err, booking){
            if(err){
                console.log(err);
            }else{
                console.log("added a booking");
            }
        });
    });
}

module.exports = seedDB;

