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
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/doctorclearancemodal.css";

const DoctorClearanceModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      clearanceStatus: "",
      dischargeCondition: "",
      followUpDate: "",
      doctorRemarks: "",
    });

  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSave = () => {

    console.log(
      "Doctor Clearance Saved",
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
        className="doctor-clearance-header"
      >

        <div className="doctor-clearance-title">

          <VerifiedUserOutlinedIcon />

          <span>
            Doctor Clearance
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="doctor-clearance-patient">

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

        <div className="doctor-clearance-form">

          <TextField
            select
            fullWidth
            label="Clearance Status"
            name="clearanceStatus"
            value={
              formData.clearanceStatus
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Approved">
              Approved
            </MenuItem>

            <MenuItem value="Rejected">
              Rejected
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            label="Condition At Discharge"
            name="dischargeCondition"
            value={
              formData.dischargeCondition
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            type="date"
            label="Follow Up Date"
            name="followUpDate"
            value={
              formData.followUpDate
            }
            onChange={
              handleChange
            }
            InputLabelProps={{
              shrink: true,
            }}
          />

        </div>

        <div className="doctor-clearance-notes">

          <TextField
            fullWidth
            multiline
            rows={5}
            label="Doctor Remarks"
            name="doctorRemarks"
            value={
              formData.doctorRemarks
            }
            onChange={
              handleChange
            }
          />

        </div>

      </DialogContent>

      <DialogActions
        className="doctor-clearance-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={handleSave}
        >
          Approve Clearance
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default DoctorClearanceModal;