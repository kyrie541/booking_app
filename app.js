var express = require("express");  
var app = express();
var bodyParser  = require("body-parser");
var mongoose  = require("mongoose");
var methodOverride = require("method-override");
var seedDB      = require("./seeds");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var flash = require("connect-flash");
var User = require("./models/user");

var indexRoutes = require("./routes/index");
var bookingRoutes = require("./routes/booking");
var historyRoutes = require("./routes/history");
var cardRoutes = require("./routes/card");
var bookingApiRoutes = require("./routes/booking_api");

var url = process.env.DATABASEURL || "mongodb://localhost/sport_arena";
mongoose.connect(url);
mongoose.Promise = global.Promise;

app.set("view engine", "ejs");  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB();
app.use(flash());
app.use(require("express-session")({
    secret:"pikachu",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error= req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/bookings", bookingRoutes);
app.use("/historys", historyRoutes);
app.use("/cards", cardRoutes);
app.use("/api/bookings", bookingApiRoutes);


app.listen(process.env.PORT, process.env.IP,function(){   
    console.log("Sport Arena Booking has started!");
});
