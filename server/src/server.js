const express = require("express");
const app = express();
const connect = require("./configs/db.js");



app.listen(3001, async () => {
    await connect();
    console.log("Listening on port 3001")
})