const express = require("express");
const app = express();
const router = express.Router();

const Courses = require("../models/allCourses.model.js");



router.post("/", async (req, res) => {
    const Course = await Courses.create(req.body);
    return res.status(201).send({Course})
})


router.get("/" , async(req, res) => {
    const Course = await Courses.find().lean().exec();
    return res.status(200).send({Course})
})




module.exports = router;