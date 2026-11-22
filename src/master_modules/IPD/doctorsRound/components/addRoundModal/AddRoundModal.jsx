import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import "@/master_modules/IPD/doctorsRound/styles/addroundmodal.css";

const AddRoundModal = ({
  open,
  onClose,
}) => {

  const [formData, setFormData] =
    useState({
      doctor: "",

      roundDate: "",

      roundTime: "",

      bp: "",

      pulse: "",

      temperature: "",

      spo2: "",

      notes: "",

      advice: "",
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
      doctor: "",

      roundDate: "",

      roundTime: "",

      bp: "",

      pulse: "",

      temperature: "",

      spo2: "",

      notes: "",

      advice: "",
    });

  };

  const handleSave = () => {

    console.log(
      "Round Saved",
      formData
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

      <DialogTitle className="round-modal-header">

        <div className="round-modal-title">

          <MedicalServicesOutlinedIcon />

          <span>
            Add Doctor Round
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="round-form-grid">

          <TextField
            label="Doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            type="date"
            label="Round Date"
            name="roundDate"
            value={formData.roundDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            type="time"
            label="Round Time"
            name="roundTime"
            value={formData.roundTime}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            label="BP"
            name="bp"
            value={formData.bp}
            onChange={handleChange}
            placeholder="120/80"
          />

          <TextField
            label="Pulse"
            name="pulse"
            value={formData.pulse}
            onChange={handleChange}
          />

          <TextField
            label="Temperature"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
          />

          <TextField
            label="SpO2"
            name="spo2"
            value={formData.spo2}
            onChange={handleChange}
          />

        </div>

        <div className="round-textarea-section">

          <TextField
            label="Clinical Notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

          <TextField
            label="Advice"
            name="advice"
            value={formData.advice}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

        </div>

      </DialogContent>

      <DialogActions className="round-modal-footer">

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
          Save Round
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default AddRoundModal;