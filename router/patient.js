const express = require("express"),
    router = express.Router();

const patientController = require("../controller/pateintData.controller");
const patientRecordController = require("../controller/patientRecord.controller");


// patientdata controller
router.post("/addPatient", patientController.addPatient);
router.get("/getallPatients", patientController.getallPatients);
router.get("/:id", patientController.getPatient);

//   patientRecordController
router.post("/addPatientRecord", patientRecordController.addPatientRecord);
router.get("/:id/records", patientRecordController.getPatientRecords);


module.exports = router;