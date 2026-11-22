import { useState } from "react";

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

import CloseIcon from "@mui/icons-material/Close";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

import "@/master_modules/IPD/doctorsRound/styles/addnotesmodal.css";

const AddNotesModal = ({
  open,
  onClose,
  round,
}) => {

  const [formData, setFormData] =
    useState({
      noteType: "Doctor Note",

      noteDate: "",

      noteTime: "",

      notes: "",

      followUp: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleReset = () => {

    setFormData({
      noteType: "Doctor Note",

      noteDate: "",

      noteTime: "",

      notes: "",

      followUp: "",
    });

  };

  const handleSave = () => {

    console.log(
      "Notes Saved",
      {
        round,
        ...formData,
      }
    );

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "18px",
        },
      }}
    >

      <DialogTitle className="notes-header">

        <div className="notes-title">

          <NoteAddOutlinedIcon />

          <span>
            Add Notes
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        {round && (

          <div className="patient-info-card">

            <h3>
              {round.patientName}
            </h3>

            <p>
              {round.ipdNo}
              {" | "}
              {round.uhid}
            </p>

          </div>

        )}

        <div className="notes-grid">

          <TextField
            select
            label="Note Type"
            name="noteType"
            value={formData.noteType}
            onChange={handleChange}
            fullWidth
          >

            <MenuItem value="Doctor Note">
              Doctor Note
            </MenuItem>

            <MenuItem value="Nursing Note">
              Nursing Note
            </MenuItem>

            <MenuItem value="Progress Note">
              Progress Note
            </MenuItem>

          </TextField>

          <TextField
            type="date"
            label="Date"
            name="noteDate"
            value={formData.noteDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            type="time"
            label="Time"
            name="noteTime"
            value={formData.noteTime}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

        </div>

        <div className="notes-textareas">

          <TextField
            label="Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            multiline
            rows={5}
            fullWidth
          />

          <TextField
            label="Follow Up Plan"
            name="followUp"
            value={formData.followUp}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

        </div>

      </DialogContent>

      <DialogActions className="notes-footer">

        <Button
          variant="outlined"
          onClick={handleReset}
        >
          Reset
        </Button>

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
          Save Notes
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default AddNotesModal;