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
            return res.json({
                success: false,
                message: "Error in getting All Patients",
                error: err
            });
        }
        else {
            return res.json({
                success: true,
                message: "Patients get successfully",
                Data: result
            });
        }
    })

}

exports.getPatient = function (req, res) {
    const id = req.params.id;
    patientDataModel.findById(id)
        .then(data => {
            if (!data) {
                return res.json({
                    success: false,
                    message: "Not found Tutorial with id " + id,
                });
            }
            else {
                return res.json({
                    success: true,
                    message: "Patient get successfully",
                    Data: data
                });
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
}


