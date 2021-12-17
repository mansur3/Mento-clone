const express = require("express");
const router = express.Router();


const Comment = require("../models/Comment.model");


router.post("/",async(req, res) => {
    const item = await Comment.create(req.body);

    return res.status(201).send({item});
})


router.get("/", async(req, res) => {
    const items = await Comment.find().lean().exec();

    return res.status(200).send({items});
})


module.exports = router;