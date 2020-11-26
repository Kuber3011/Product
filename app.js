
const express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    methodOverride = require("method-override"),
    cors = require("cors");


    require("dotenv").config();

    require("./dbConfig").connection;



const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app use
app.use(methodOverride("_method"));
app.use(bodyparser.json());
app.use(cors(corsOptions));


// const app = require('http').createServer();

const PatientRoutes = require("./router/patient");

app.use("https://patient-node-deploy.herokuapp.com/", PatientRoutes);

//port 
const PORT =  5000;

app.listen(PORT, function () {
    //  console.log(`Listening on ${port}`);
    console.log("Patient server started on:" + PORT);
    // console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);

});

// this.address().port, app.settings.env