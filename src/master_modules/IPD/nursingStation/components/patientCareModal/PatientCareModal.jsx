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
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";

import "@/master_modules/IPD/nursingStation/styles/patientcaremodal.css";

const PatientCareModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      careType: "",
      status: "",
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
      "Patient Care Saved",
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
        className="care-header"
      >

        <div className="care-title">

          <HealingOutlinedIcon />

          <span>
            Patient Care Record
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="care-patient-card">

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

        <div className="care-form">

          <TextField
            select
            fullWidth
            label="Care Type"
            name="careType"
            value={formData.careType}
            onChange={handleChange}
          >

            <MenuItem value="Bed Care">
              Bed Care
            </MenuItem>

            <MenuItem value="Personal Hygiene">
              Personal Hygiene
            </MenuItem>

            <MenuItem value="Feeding Assistance">
              Feeding Assistance
            </MenuItem>

            <MenuItem value="Mobility Assistance">
              Mobility Assistance
            </MenuItem>

            <MenuItem value="Wound Dressing">
              Wound Dressing
            </MenuItem>

            <MenuItem value="Oxygen Support">
              Oxygen Support
            </MenuItem>

            <MenuItem value="Catheter Care">
              Catheter Care
            </MenuItem>

          </TextField>

          <TextField
            select
            fullWidth
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >

            <MenuItem value="Completed">
              Completed
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

            <MenuItem value="In Progress">
              In Progress
            </MenuItem>

          </TextField>

        </div>

        <div className="care-remarks">

          <TextField
            fullWidth
            multiline
            rows={5}
            label="Care Notes / Remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />

        </div>

      </DialogContent>

      <DialogActions
        className="care-footer"
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
          Save Care Record
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default PatientCareModal;