import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  TextField,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/finalizedischargemodal.css";

const FinalizeDischargeModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      dischargeStatus: "",
      dischargeTime: "",
      dischargedBy: "",
      remarks: "",
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

  const handleFinalize =
    () => {

      console.log(
        "Discharge Finalized",
        {
          patient,
          ...formData,
        }
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
        className="finalize-header"
      >

        <div className="finalize-title">

          <CheckCircleOutlineOutlinedIcon />

          <span>
            Finalize Discharge
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="finalize-patient-card">

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
              Doctor
            </label>

            <span>
              {patient.doctor}
            </span>
          </div>

          <div>
            <label>
              Department
            </label>

            <span>
              {patient.department}
            </span>
          </div>

          <div>
            <label>
              Doctor Clearance
            </label>

            <span>
              {patient.doctorClearance}
            </span>
          </div>

          <div>
            <label>
              Billing Clearance
            </label>

            <span>
              {patient.billingClearance}
            </span>
          </div>

        </div>

        <div className="finalize-form">

          <TextField
            select
            fullWidth
            label="Discharge Status"
            name="dischargeStatus"
            value={
              formData.dischargeStatus
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Discharged">
              Discharged
            </MenuItem>

            <MenuItem value="Hold">
              On Hold
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            type="datetime-local"
            label="Discharge Date & Time"
            name="dischargeTime"
            value={
              formData.dischargeTime
            }
            onChange={
              handleChange
            }
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            fullWidth
            label="Discharged By"
            name="dischargedBy"
            value={
              formData.dischargedBy
            }
            onChange={
              handleChange
            }
          />

        </div>

        <div className="finalize-notes">

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Final Remarks"
            name="remarks"
            value={
              formData.remarks
            }
            onChange={
              handleChange
            }
          />

        </div>

      </DialogContent>

      <DialogActions
        className="finalize-footer"
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
          onClick={
            handleFinalize
          }
        >
          Complete Discharge
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default FinalizeDischargeModal;