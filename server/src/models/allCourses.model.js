const mongoose = require("mongoose");


const coursesSchema = new mongoose.Schema({
    sampleImage  : {type : String, required : true},
    backgroundImage : {type : String, required : true},
    courseName : {type : String, required : true},
    authorName : {type : String, required : true},
    authorDetails : {type : String, required : true},
    authorAbout : [{type : String, required : true}],
    totalVideo : {type : Number, required : true},
    lockStatus : {type : Boolean, required : true},
    smallDescriptionAboutCourse : {type : String, required : true},
    mainPrice : {type : Number, required : true},
    AfterDiscount : {type : Number, required : true},
    trailer : {type : String, required : true},
    totalCourseTime : {type : String, required : true},
    followers : {type : Number}, 
    allVideos : [
        {
            image : {type : String, required : true},
            duration : {type : String, required: true},
            videoNumber : {type : Number, required : true},
            title : {type : String, required : true},
            description : {type : String, required : true},
            video : {type : String, required : true}
        }
    ]


});



module.exports = mongoose.model("courses", coursesSchema);