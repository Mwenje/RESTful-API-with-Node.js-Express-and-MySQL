const express = require("express");
const router = require("express").Router();
const {
  getallPatients,
  getAllProviders,
  getFirstNames,
  getAllProviderSpeciality,
} = require("./fetch.controller.js");

router.get("/patients", getallPatients);
router.get("/providers", getAllProviders);
router.get("/firstnames", getFirstNames);
router.get("/specialities", getAllProviderSpeciality);

module.exports = router;
