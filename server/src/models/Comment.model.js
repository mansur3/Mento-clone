const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    speech: {type : String, required : true},
    speaker : {type : String, required : true}
})


module.exports = mongoose.model("comment", commentSchema);