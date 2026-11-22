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
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/adddischargemodal.css";

const AddDischargeModal = ({
  open,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      patientName: "",
      ipdNo: "",
      uhid: "",
      doctor: "",
      department: "",
      diagnosis: "",
      dischargeType: "",
      dischargeDate: "",
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

  const handleSubmit =
    () => {

      console.log(
        "New Discharge Created",
        formData
      );

      onClose();

    };

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >

      <DialogTitle
        className="add-discharge-header"
      >

        <div className="add-discharge-title">

          <AddCircleOutlineOutlinedIcon />

          <span>
            Create New Discharge
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="add-discharge-form">

          <TextField
            fullWidth
            label="Patient Name"
            name="patientName"
            value={
              formData.patientName
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="IPD Number"
            name="ipdNo"
            value={
              formData.ipdNo
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="UHID"
            name="uhid"
            value={
              formData.uhid
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="Doctor"
            name="doctor"
            value={
              formData.doctor
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="Department"
            name="department"
            value={
              formData.department
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="Diagnosis"
            name="diagnosis"
            value={
              formData.diagnosis
            }
            onChange={
              handleChange
            }
          />

          <TextField
            select
            fullWidth
            label="Discharge Type"
            name="dischargeType"
            value={
              formData.dischargeType
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Normal">
              Normal Discharge
            </MenuItem>

            <MenuItem value="LAMA">
              LAMA
            </MenuItem>

            <MenuItem value="DOR">
              Discharge On Request
            </MenuItem>

            <MenuItem value="Death">
              Death
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            type="date"
            label="Expected Discharge Date"
            name="dischargeDate"
            value={
              formData.dischargeDate
            }
            onChange={
              handleChange
            }
            InputLabelProps={{
              shrink: true,
            }}
          />

        </div>

        <div className="add-discharge-remarks">

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Remarks"
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
        className="add-discharge-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={
            handleSubmit
          }
        >
          Create Discharge
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default AddDischargeModal;