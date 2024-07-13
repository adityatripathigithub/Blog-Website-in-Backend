
// const mongoose = require("mongoose")

// exports.connectionDB = ()=>{

//     try {
//         mongoose.connect(process.env.MONGO_URL)
//         console.log("Database Connect");

//     } catch (error) {
//         console.log(error);
//     }

// }

const mongoose  = require("mongoose")

.connect("mongodb://127.0.0.1:27017/database")


.then(()=>{
    console.log("Database Connect");
})

.catch((err)=>{
    console.log(err.message);
})