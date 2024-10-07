const {
  getPatients,
  getProviders,
  getPatientsFirstname,
  getProvidersSpeciality,
} = require("./fetch.model.js");

const getallPatients = (req, res) => {
  getPatients((err, results) => {
    if (err) {
      console.error("Error Executing query: " + err.stack);
      return res.status(500).json({
        success: 0,
        message: "Error fetching patients",
      });
    }

    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Record not Found",
      });
    }

    return res.status(200).json({
      success: 1,
      message: "Patients Retrieved Successfully",
      data: results,
    });
  });
};

const getAllProviders = (req, res) => {
  getProviders((err, results) => {
    if (err) {
      console.error("Error Executing query: " + err.stack);
      return res.status(500).json({
        success: 0,
        message: "Error fetching providers",
      });
    }

    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Records not Found",
      });
    }

    return res.status(200).json({
      success: 1,
      message: "Providers Retrieved Successfully",
      data: results,
    });
  });
};

const getFirstNames = (req, res) => {
  getPatientsFirstname((err, results) => {
    if (err) {
      console.error("Error Executing query: " + err.stack);
      return res.status(500).json({
        success: 0,
        message: "Error fetching First Names",
      });
    }

    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Records not Found",
      });
    }

    return res.status(200).json({
      success: 1,
      message: "First Names Retrieved Successfully",
      data: results,
    });
  });
};

const getAllProviderSpeciality = (req, res) => {
  getProvidersSpeciality((err, results) => {
    if (err) {
      console.error("Error Executing query: " + err.stack);
      return res.status(500).json({
        success: 0,
        message: "Error fetching Providers Speciality",
      });
    }

    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Records not Found",
      });
    }

    return res.status(200).json({
      success: 1,
      message: "Providers Specialities Retrieved Successfully",
      data: results,
    });
  });
};

module.exports = {
  getallPatients,
  getAllProviders,
  getFirstNames,
  getAllProviderSpeciality,
};
