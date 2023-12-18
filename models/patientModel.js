const mongoose = require("mongoose");
const patientSchema = mongoose.Schema(
  {
    PatientID: { type: Number, required: false },
    Surname: {
      type: String,
      required: (true, "Please enter the patient's surname"),
    },
    Othername: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
    },
    ResidentialAddress: {
      type: String,
      required: true,
    },
    EmergencyName: {
      type: String,
      required: true,
    },
    Contact: {
      type: Number,
      required: true,
    },
    RelationShipWithPatient: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientSchema);
module.exports = Patients;
