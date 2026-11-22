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
import MedicationOutlinedIcon from "@mui/icons-material/MedicationOutlined";

import "@/master_modules/IPD/nursingStation/styles/medicationAdministrationmodal.css";

const MedicationAdministrationModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      medicationName: "",
      dosage: "",
      route: "",
      administrationTime: "",
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
      "Medication Administered",
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
        className="medication-header"
      >

        <div className="medication-title">

          <MedicationOutlinedIcon />

          <span>
            Medication Administration
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="medication-patient-card">

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

        <div className="medication-form">

          <TextField
            fullWidth
            label="Medication Name"
            name="medicationName"
            value={
              formData.medicationName
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="Dosage"
            name="dosage"
            value={
              formData.dosage
            }
            onChange={
              handleChange
            }
          />

          <TextField
            select
            fullWidth
            label="Route"
            name="route"
            value={
              formData.route
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Oral">
              Oral
            </MenuItem>

            <MenuItem value="IV">
              IV
            </MenuItem>

            <MenuItem value="IM">
              IM
            </MenuItem>

            <MenuItem value="Subcutaneous">
              Subcutaneous
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            type="datetime-local"
            label="Administration Time"
            name="administrationTime"
            value={
              formData.administrationTime
            }
            onChange={
              handleChange
            }
            InputLabelProps={{
              shrink: true,
            }}
          />

        </div>

        <div className="medication-remarks">

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
        className="medication-footer"
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
          Administer Medication
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default MedicationAdministrationModal;