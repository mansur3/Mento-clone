const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register = async (req, res) => {

    let user;
    try {

        user = await User.findOne({ email: req.body.email })

        if (user) return res.status(400).send({ message: "Please check your email and password" });

        user = await User.create(req.body);

        const token = newToken(user)

        // return res.status(200).send({ user, token });
        return res.status(200).redirect("http://localhost:3000/");

    } catch (err) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

const login = async (req, res) => {

    try {

        let user = await User.findOne({ email: req.body.email });

        if (!user) return res.status(400).send({ message: "Please check your email and password" });

        let match = user.checkPassword(req.body.password);

        if (!match) return res.status(400).send({ message: "Please check your email and password" });

        const token = newToken(user)

        // return res.status(200).send({ user, token });
        return res.status(200).redirect("http://localhost:3000/");

    } catch (err) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}


const userupdate = async (req, res) => {
    
    const {id} = req.params;
    const one = await User.findOne({id});
    var c = one.courses
    // console.log(c);
    if(!(c.includes(req.body.courses))) {
        c.push(req.body.courses);
    }
    // c.push(req.body.courses);
    // console.log(c);
    let user = await User.findByIdAndUpdate(id, {courses : c}, {new : true});

    return res.status(200).send({user, newToken});
}

module.exports = { register, login, newToken, userupdate }