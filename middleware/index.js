var middlewareObj ={};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // return next();
    req.flash("error", "Please Login!");
    res.redirect("/login");
};

module.exports = middlewareObj;