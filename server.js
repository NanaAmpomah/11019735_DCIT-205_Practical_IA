const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./models/patientModel;");
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

app.get("/patients/view/:id", async (req,res) =>{
  try {
    const {id} = req.params;
    const  patient =await Patients.findById(id);
    res.status(200).json(patient);
    
  }
   catch (error) {
    res.status(500).json(error.message);
  }
  }
);
