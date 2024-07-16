
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

.connect("mongodb://localhost:27017/Blog-website")


.then(()=>{
    console.log("Database Connect");
})

.catch((err)=>{
    console.log(err.message);
})