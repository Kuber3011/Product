const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/PatientData";
const Mongo_Url = "mongodb+srv://admin:6UGuHXSJsayZaWeJ@mongodb.jvask.mongodb.net/PatientData?retryWrites=true&w=majority";

module.exports = {
    
    connection: mongoose
        .connect(Mongo_Url ,{ useNewUrlParser: true,useUnifiedTopology: true })
        .then(() => {
            console.log("Successfully connected to MongoDB.");
        })
        .catch(err => {
            console.log("Could not connect to MongoDB.");
            process.exit();
        })
};