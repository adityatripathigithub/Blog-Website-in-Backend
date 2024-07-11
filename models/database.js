const mongoose = require("mongoose")

.connect("mongodb://127.0.0.1:27017/database")

.then(() =>{
    console.log("Database Connected");
})

.catch((err) =>{
    console.log(err.message);
})