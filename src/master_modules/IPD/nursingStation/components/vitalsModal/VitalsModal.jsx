import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "@/master_modules/IPD/nursingStation/styles/vitalsmodal.css";

const VitalsModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      bp: "",
      pulse: "",
      temperature: "",
      respiratoryRate: "",
      spo2: "",
      remarks: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSave = () => {

    console.log(
      "Vitals Saved",
      formData
    );

    onClose();

  };

  if (!patient) return null;

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >

      <DialogTitle
        className="vitals-header"
      >

        <div className="vitals-title">

          <FavoriteBorderOutlinedIcon />

          <span>
            Record Vital Signs
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="patient-card">

          <div className="patient-info-item">

            <label>
              Patient Name
            </label>

            <span>
              {patient.patientName}
            </span>

          </div>

          <div className="patient-info-item">

            <label>
              IPD Number
            </label>

            <span>
              {patient.ipdNo}
            </span>

          </div>

          <div className="patient-info-item">

            <label>
              Room / Bed
            </label>

            <span>
              {patient.room}
              {" / "}
              {patient.bed}
            </span>

          </div>

          <div className="patient-info-item">

            <label>
              Doctor
            </label>

            <span>
              {patient.doctor}
            </span>

          </div>

        </div>

        <div className="vitals-form">

          <TextField
            label="Blood Pressure"
            name="bp"
            value={formData.bp}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Pulse Rate"
            name="pulse"
            value={formData.pulse}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Respiratory Rate"
            name="respiratoryRate"
            value={
              formData.respiratoryRate
            }
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="SpO₂"
            name="spo2"
            value={formData.spo2}
            onChange={handleChange}
            fullWidth
          />

        </div>

        <div className="remarks-section">

          <TextField
            label="Remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            multiline
            rows={1}
            fullWidth
          />

        </div>

      </DialogContent>

      <DialogActions
        className="vitals-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save Vitals
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default VitalsModal;