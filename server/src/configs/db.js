const mongoose = require("mongoose");


const connect = () => {
    return mongoose.connect("mongodb+srv://mento_clone:mento_clone@mento.x2gr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

}



module.exports = connect;

