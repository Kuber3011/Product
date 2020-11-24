const patientRecordModel = require("../model/patientRecord");

exports.addPatientRecord = function (req, res) {
    const patientRecordData = new patientRecordModel(req.body);

    patientRecordModel.create(patientRecordData, function (err, patient) {
        if (err) {
            return res.json({
                success: false,
                message: "Error in adding patient",
                error: err
            });
        }
        return res.json({
            success: true,
            message: "PatientRecord added successfully",
        });
    })
}

exports.getPatientRecords = function (req, res){
    const id = req.params.id;
    patientRecordModel.find({patient_id:id})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  }