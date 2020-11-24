const patientDataModel = require('../model/patientData');

exports.addPatient = function (req, res) {
    const patientData = new patientDataModel(req.body);

    patientDataModel.create(patientData, function (err, patient) {
        if (err) {
            return res.json({
                success: false,
                message: "Error in adding patient",
                error: err
            });
        }
        return res.json({
            success: true,
            message: "Patient added successfully",
        });
    })
}

exports.getallPatients = function (req, res) {
    patientDataModel.find({}, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
         res.send(result);
        }
    })

}

exports.getPatient = function (req, res){
  const id = req.params.id;
  patientDataModel.findById(id)
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


