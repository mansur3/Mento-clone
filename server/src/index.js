const express = require('express');
const cors = require('cors')
const passport = require("./configs/passport")
const session = require("express-session");

const { register, login, userupdate } = require("./controllers/auth.controller");
const CoursesController = require("./controllers/allCourses.controller.js");
const CommentController = require("./controllers/comment.controller");
const app = express();

app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'secretcode',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(passport.initialize());
app.use(passport.session());



passport.serializeUser(function ({ user, token }, done) {
    done(null, { user, token });
});

passport.deserializeUser(function ({ user, token }, done) {
    done(null, { user, token });
});

// Google Authentication

app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong");
})

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
    }), function (req, res) {
        const { user, token } = req.user;
        res.status(200).redirect("http://localhost:3000");
    });

// For Session Authentication

app.get('/profile', isLoggedIn, function(req, res) {

    res.send(req.user);
});




// route middleware to make sure
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

app.post("/register", register);
app.post("/login", login);
app.patch("/profile/:id", userupdate);

app.use("/courses", CoursesController);
app.use("/comment", CommentController);

module.exports = app;