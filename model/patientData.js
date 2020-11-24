const mongoose = require("mongoose");


const patientDataSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },



}, { versionKey: false });

module.exports = mongoose.model("patientDataSchema", patientDataSchema);