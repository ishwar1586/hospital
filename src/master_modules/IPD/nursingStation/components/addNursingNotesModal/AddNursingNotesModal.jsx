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
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";

import "@/master_modules/IPD/nursingStation/styles/addnursingnotemodal.css";

const AddNursingNoteModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      noteType: "",
      priority: "",
      notes: "",
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
      "Nursing Note Saved",
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
        className="nursing-note-header"
      >

        <div className="nursing-note-title">

          <NoteAltOutlinedIcon />

          <span>
            Add Nursing Note
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="note-patient-card">

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

        <div className="note-form">

          <TextField
            select
            fullWidth
            label="Note Type"
            name="noteType"
            value={
              formData.noteType
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="General">
              General
            </MenuItem>

            <MenuItem value="Observation">
              Observation
            </MenuItem>

            <MenuItem value="Medication">
              Medication
            </MenuItem>

            <MenuItem value="Emergency">
              Emergency
            </MenuItem>

          </TextField>

          <TextField
            select
            fullWidth
            label="Priority"
            name="priority"
            value={
              formData.priority
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

          </TextField>

        </div>

        <div className="notes-area">

          <TextField
            fullWidth
            multiline
            rows={6}
            label="Nursing Notes"
            name="notes"
            value={
              formData.notes
            }
            onChange={
              handleChange
            }
          />

        </div>

      </DialogContent>

      <DialogActions
        className="note-footer"
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
          Save Note
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default AddNursingNoteModal;