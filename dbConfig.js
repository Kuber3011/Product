const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/PatientData";

module.exports = {
    connection: mongoose
        .connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
        .then(() => {
            console.log("Successfully connected to MongoDB.");
        })
        .catch(err => {
            console.log("Could not connect to MongoDB.");
            process.exit();
        })
};