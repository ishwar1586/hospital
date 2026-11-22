import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

import "@/master_modules/IPD/nursingStation/styles/patienthandovermodal.css";

const PatientHandoverModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      shift: "",
      handoverTo: "",
      patientCondition: "",
      pendingTasks: "",
      medicationsDue: "",
      instructions: "",
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
      "Patient Handover Saved",
      formData
    );

    onClose();

  };

  if (!patient) return null;

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle
        className="handover-header"
      >

        <div className="handover-title">

          <SwapHorizOutlinedIcon />

          <span>
            Patient Handover
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="handover-patient-card">

          <div>

            <label>
              Patient Name
            </label>

            <span>
              {patient.patientName}
            </span>

          </div>

          <div>

            <label>
              IPD No
            </label>

            <span>
              {patient.ipdNo}
            </span>

          </div>

          <div>

            <label>
              Room / Bed
            </label>

            <span>
              {patient.room}
              {" / "}
              {patient.bed}
            </span>

          </div>

          <div>

            <label>
              Doctor
            </label>

            <span>
              {patient.doctor}
            </span>

          </div>

        </div>

        <div className="handover-form">

          <TextField
            select
            fullWidth
            label="Shift"
            name="shift"
            value={formData.shift}
            onChange={handleChange}
          >

            <MenuItem value="Morning">
              Morning Shift
            </MenuItem>

            <MenuItem value="Evening">
              Evening Shift
            </MenuItem>

            <MenuItem value="Night">
              Night Shift
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            label="Handover To"
            name="handoverTo"
            value={formData.handoverTo}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Patient Condition"
            name="patientCondition"
            value={
              formData.patientCondition
            }
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Pending Tasks"
            name="pendingTasks"
            value={
              formData.pendingTasks
            }
            onChange={handleChange}
          />

        </div>

        <div className="handover-section">

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Medications Due"
            name="medicationsDue"
            value={
              formData.medicationsDue
            }
            onChange={handleChange}
          />

        </div>

        <div className="handover-section">

          <TextField
            fullWidth
            multiline
            rows={5}
            label="Special Instructions"
            name="instructions"
            value={
              formData.instructions
            }
            onChange={handleChange}
          />

        </div>

      </DialogContent>

      <DialogActions
        className="handover-footer"
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
          Complete Handover
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default PatientHandoverModal;