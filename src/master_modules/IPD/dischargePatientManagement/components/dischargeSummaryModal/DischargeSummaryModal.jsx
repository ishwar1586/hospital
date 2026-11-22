import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  TextField,
} from "@mui/material";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/dischargesummarymodal.css";

const DischargeSummaryModal = ({
  open,
  patient,
  onClose,
}) => {

  const [summary,
    setSummary] =
    useState({
      diagnosis: "",
      treatmentGiven: "",
      conditionAtDischarge: "",
      medications: "",
      followUpAdvice: "",
      dischargeNotes: "",
    });

  const handleChange = (
    e
  ) => {

    setSummary({
      ...summary,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSave = () => {

    console.log(
      "Discharge Summary Saved",
      summary
    );

    onClose();

  };

  if (!patient) return null;

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >

      <DialogTitle
        className="summary-header"
      >

        <div className="summary-title">

          <DescriptionOutlinedIcon />

          <span>
            Discharge Summary
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="summary-patient-card">

          <div>
            <label>Patient Name</label>
            <span>
              {patient.patientName}
            </span>
          </div>

          <div>
            <label>IPD No</label>
            <span>
              {patient.ipdNo}
            </span>
          </div>

          <div>
            <label>Doctor</label>
            <span>
              {patient.doctor}
            </span>
          </div>

          <div>
            <label>Department</label>
            <span>
              {patient.department}
            </span>
          </div>

        </div>

        <div className="summary-form">

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Final Diagnosis"
            name="diagnosis"
            value={
              summary.diagnosis
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Treatment Given"
            name="treatmentGiven"
            value={
              summary.treatmentGiven
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Condition At Discharge"
            name="conditionAtDischarge"
            value={
              summary.conditionAtDischarge
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Discharge Medications"
            name="medications"
            value={
              summary.medications
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Follow Up Advice"
            name="followUpAdvice"
            value={
              summary.followUpAdvice
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Additional Notes"
            name="dischargeNotes"
            value={
              summary.dischargeNotes
            }
            onChange={
              handleChange
            }
          />

        </div>

      </DialogContent>

      <DialogActions
        className="summary-footer"
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
          Save Summary
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default DischargeSummaryModal;