const mongoose = require("mongoose");


const patientRecordSchema = new mongoose.Schema({

    patient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "patientDataSchema",
        required: true
    },
    nurse_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    readings: {
        diastolic: Number,
        systolic: Number
    },
     date: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false });

module.exports = mongoose.model("patientRecordSchema", patientRecordSchema);