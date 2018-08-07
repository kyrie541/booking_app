var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//landing page
router.get("/",function(req,res){
    res.render("index");  
});

//Auth Routes
//show sign up form
router.get("/register", function(req,res){
    res.render("register");
});

//handling user sign up
router.post("/register", function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err,user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success","Welcome to Booking System "+user.username);
            res.redirect("/bookings");
        });
    });
});

//LOGiN ROUTEs
//render login form
router.get("/login", function(req,res){
    res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect:"/bookings",
        failureRedirect:"/login"
    }), function(req, res){
});

//logout route
router.get("/logout", function(req,res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/");
});

module.exports = router;



