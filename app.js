
const express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    methodOverride = require("method-override"),
    cors = require("cors");

    require("./dbConfig").connection;



const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app use
app.use(methodOverride("_method"));
app.use(bodyparser.json());
app.use(cors(corsOptions));


const PatientRoutes = require("./router/patient");

app.use("/api/patient", PatientRoutes);

//port 
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("Patient server started on:" + PORT);
});