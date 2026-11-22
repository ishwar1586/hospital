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
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

import "@/master_modules/IPD/nursingStation/styles/incidentreportmodal.css";

const IncidentReportModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      incidentType: "",
      severity: "",
      incidentDate: "",
      description: "",
      actionTaken: "",
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
      "Incident Report Saved",
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
        className="incident-header"
      >

        <div className="incident-title">

          <ReportProblemOutlinedIcon />

          <span>
            Incident Report
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="incident-patient-card">

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

        <div className="incident-form">

          <TextField
            select
            fullWidth
            label="Incident Type"
            name="incidentType"
            value={
              formData.incidentType
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Patient Fall">
              Patient Fall
            </MenuItem>

            <MenuItem value="Medication Error">
              Medication Error
            </MenuItem>

            <MenuItem value="Equipment Issue">
              Equipment Issue
            </MenuItem>

            <MenuItem value="Patient Injury">
              Patient Injury
            </MenuItem>

            <MenuItem value="Security Issue">
              Security Issue
            </MenuItem>

            <MenuItem value="Other">
              Other
            </MenuItem>

          </TextField>

          <TextField
            select
            fullWidth
            label="Severity"
            name="severity"
            value={
              formData.severity
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Low">
              Low
            </MenuItem>

            <MenuItem value="Medium">
              Medium
            </MenuItem>

            <MenuItem value="High">
              High
            </MenuItem>

            <MenuItem value="Critical">
              Critical
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            type="datetime-local"
            label="Incident Date & Time"
            name="incidentDate"
            value={
              formData.incidentDate
            }
            onChange={
              handleChange
            }
            InputLabelProps={{
              shrink: true,
            }}
          />

        </div>

        <div className="incident-section">

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Incident Description"
            name="description"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
          />

        </div>

        <div className="incident-section">

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Action Taken"
            name="actionTaken"
            value={
              formData.actionTaken
            }
            onChange={
              handleChange
            }
          />

        </div>

      </DialogContent>

      <DialogActions
        className="incident-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={handleSave}
        >
          Submit Report
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default IncidentReportModal;