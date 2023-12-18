const express = require("express");
const mongoose = require("mongoose");
const Patients = require("./models/patientMode;");
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Node API running on port 3000");
});

app.post("/patients", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
