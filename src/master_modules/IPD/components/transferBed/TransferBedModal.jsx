import { useState, useEffect } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";

import "@/master_modules/IPD/styles/transferbed.css";

const wards = [
  "General Ward",
  "Private Ward",
  "ICU",
];

const rooms = [
  "101",
  "102",
  "103",
  "104",
];

const beds = [
  "B-01",
  "B-02",
  "B-03",
  "B-04",
];

const TransferBedModal = ({
  open,
  onClose,
  patient,
}) => {
  const [formData, setFormData] =
    useState({
      ward: "",
      room: "",
      bed: "",
      reason: "",
    });

  useEffect(() => {
    if (open) {
      setFormData({
        ward: "",
        room: "",
        bed: "",
        reason: "",
      });
    }
  }, [open]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleTransfer = () => {
    console.log(
      "Transfer Data : ",
      formData
    );

    onClose();
  };

  if (!patient) return null;

  return (
    // <Dialog
    //   open={open}
    //   onClose={onClose}
    //   maxWidth="md"
    //   fullWidth
    // >
 <div className="transfer-modal-page">
    <Dialog
  open={open}
  onClose={onClose}
  maxWidth="md"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "20px",
      overflow: "hidden",
      maxHeight: "80vh",
    },
  }}
>      
      <DialogTitle className="transfer-modal-header">
        <div className="transfer-title">
          <BedOutlinedIcon />

          <span>
            Transfer Bed
          </span>
        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>

        <div className="transfer-section">

          <h3>
            Patient Information
          </h3>
         
          <div className="patient-summary-card">
  <h2>{patient.patientName}</h2>

  <div className="patient-tags">
    <span>{patient.ipdNo}</span>
    <span>{patient.uhid}</span>
  </div>
</div>

<div className="info-card-grid">

  <div className="info-card">
    <label>Age</label>
    <h4>{patient.age} Years</h4>
  </div>

  <div className="info-card">
    <label>Gender</label>
    <h4>{patient.gender}</h4>
  </div>

  <div className="info-card">
    <label>Payer Type</label>
    <h4>{patient.payerType}</h4>
  </div>

</div>

        </div>

 
<div className="transfer-section">
  <h3>Current Bed Details</h3>

  <div className="info-card-grid">

    <div className="info-card">
      <label>Current Ward</label>
      <h4>{patient.ward}</h4>
    </div>

    <div className="info-card">
      <label>Current Room</label>
      <h4>{patient.room}</h4>
    </div>

    <div className="info-card">
      <label>Current Bed</label>
      <h4>{patient.bed}</h4>
    </div>

  </div>
</div>


        <div className="transfer-form-grid">

  <TextField
    select
    fullWidth
    label="New Ward"
    name="ward"
    value={formData.ward}
    onChange={handleChange}
  >
    {wards.map((ward) => (
      <MenuItem
        key={ward}
        value={ward}
      >
        {ward}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    select
    fullWidth
    label="New Room"
    name="room"
    value={formData.room}
    onChange={handleChange}
  >
    {rooms.map((room) => (
      <MenuItem
        key={room}
        value={room}
      >
        {room}
      </MenuItem>
    ))}
  </TextField>

  <TextField
    select
    fullWidth
    label="New Bed"
    name="bed"
    value={formData.bed}
    onChange={handleChange}
  >
    {beds.map((bed) => (
      <MenuItem
        key={bed}
        value={bed}
      >
        {bed}
      </MenuItem>
    ))}
  </TextField>

</div>

<TextField
  fullWidth
  multiline
  rows={1}
  label="Transfer Reason"
  name="reason"
  value={formData.reason}
  onChange={handleChange}
  sx={{ marginTop: "20px" }}
/>

      </DialogContent>

      <DialogActions className="transfer-footer">
        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={
            handleTransfer
          }
        >
          Transfer Bed
        </Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default TransferBedModal;