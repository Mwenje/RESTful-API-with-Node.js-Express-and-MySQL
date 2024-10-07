const pool = require("../../config/database.js");

const getPatients = (callback) => {
  if (!pool) {
    throw new Error("Database pool is not initialized");
  }

  const getPatientsQuery = "SELECT * FROM patients";

  pool.query(getPatientsQuery, (err, results) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, results);
  });
};

const getProviders = (callback) => {
  if (!pool) {
    throw new Error("Database pool is not initialized");
  }

  const getProvidersQuery =
    "SELECT first_name,last_name,provider_specialty FROM providers;";

  pool.query(getProvidersQuery, (err, results) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, results);
  });
};

const getPatientsFirstname = (callback) => {
  if (!pool) {
    throw new Error("Database pool is not initialized");
  }

  const getPatientsFirstname = "SELECT first_name FROM patients";

  pool.query(getPatientsFirstname, (err, results) => {
    if (err) {
      return callback(err, null);
    }

    return callback(null, results);
  });
};

const getProvidersSpeciality = (cb) => {
  if (!pool) {
    throw new Error("Database pool is not initialized");
  }

  const getProvidersSpecialtyQuery =
    "SELECT first_name,last_name,provider_specialty FROM providers ORDER BY provider_specialty";

  pool.query(getProvidersSpecialtyQuery, (err, results) => {
    if (err) {
      return cb(err, null);
    }

    return cb(null, results);
  });
};

module.exports = {
  getPatients,
  getProviders,
  getPatientsFirstname,
  getProvidersSpeciality,
};
