const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./models/patientMode;");
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Node API running on port 3000");
});

app.post("/patients", async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(200).json(patient);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});
