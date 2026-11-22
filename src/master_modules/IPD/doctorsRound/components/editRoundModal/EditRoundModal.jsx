import { useState, useEffect } from "react";

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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "@/master_modules/IPD/doctorsRound/styles/editRoundmodal.css";

const EditRoundModal = ({
  open,
  onClose,
  round,
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
      status: "",
    });

  useEffect(() => {

    if (round) {

      setFormData({
        doctor:
          round.doctor || "",

        roundDate:
          round.roundDate || "",

        roundTime:
          round.roundTime || "",

        bp:
          round.bp || "",

        pulse:
          round.pulse || "",

        temperature:
          round.temperature || "",

        spo2:
          round.spo2 || "",

        notes:
          round.notes || "",

        advice:
          round.advice || "",

        status:
          round.status || "",
      });

    }

  }, [round]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleUpdate = () => {

    console.log(
      "Updated Round",
      formData
    );

    onClose();
  };

  if (!round) return null;

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

      <DialogTitle className="edit-round-header">

        <div className="edit-round-title">

          <EditOutlinedIcon />

          <span>
            Edit Doctor Round
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="edit-patient-info">

          <h3>
            {round.patientName}
          </h3>

          <p>
            {round.ipdNo}
            {" | "}
            {round.uhid}
          </p>

        </div>

        <div className="edit-round-grid">

          <TextField
            label="Doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
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
          />

          <TextField
            label="BP"
            name="bp"
            value={formData.bp}
            onChange={handleChange}
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

          <TextField
            select
            SelectProps={{
              native: true,
            }}
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="">
              Select
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Pending">
              Pending
            </option>
          </TextField>

        </div>

        <div className="edit-round-textarea">

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

      <DialogActions className="edit-round-footer">

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleUpdate}
        >
          Update Round
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default EditRoundModal;