import { useEffect, useState } from "react";

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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "@/master_modules/IPD/styles/editadmission.css";

const statuses = [
  "Admitted",
  "Critical",
  "Transferred",
  "Pending Discharge",
];

const payerTypes = [
  "Cash",
  "Insurance",
];

const EditAdmissionModal = ({
  open,
  onClose,
  patient,
}) => {
  const [formData, setFormData] =
    useState({
      doctor: "",
      department: "",
      ward: "",
      room: "",
      bed: "",
      status: "",
      payerType: "",
      admissionReason: "",
      attendantName: "",
      attendantMobile: "",
      remarks: "",
    });

  useEffect(() => {
    if (patient) {
      setFormData({
        doctor:
          patient.doctor || "",
        department:
          patient.department || "",
        ward:
          patient.ward || "",
        room:
          patient.room || "",
        bed:
          patient.bed || "",
        status:
          patient.status || "",
        payerType:
          patient.payerType || "",
        admissionReason:
          patient.admissionReason ||
          "",
        attendantName:
          patient.attendantName ||
          "",
        attendantMobile:
          patient.attendantMobile ||
          "",
        remarks:
          patient.remarks || "",
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleUpdate = () => {
    console.log(
      "Updated Admission",
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
      PaperProps={{
        sx: {
          borderRadius: "18px",
        },
      }}
    >
      <DialogTitle className="edit-header">

        <div className="edit-title">
          <EditOutlinedIcon />
          <span>
            Edit Admission
          </span>
        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="edit-patient-card">

          <h2>
            {patient.patientName}
          </h2>

          <div className="edit-tags">
            <span>
              {patient.ipdNo}
            </span>

            <span>
              {patient.uhid}
            </span>
          </div>

        </div>

        <div className="edit-section">

          <h3>
            Patient Information
          </h3>

          <div className="edit-grid">

            <TextField
              label="Patient Name"
              value={
                patient.patientName
              }
              InputProps={{
                readOnly: true,
              }}
            />

            <TextField
              label="Age / Gender"
              value={`${patient.age}Y / ${patient.gender}`}
              InputProps={{
                readOnly: true,
              }}
            />

          </div>

        </div>

        <div className="edit-section">

          <h3>
            Admission Details
          </h3>

          <div className="edit-grid">

            <TextField
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
              label="Ward"
              name="ward"
              value={
                formData.ward
              }
              onChange={
                handleChange
              }
            />

            <TextField
              label="Room"
              name="room"
              value={
                formData.room
              }
              onChange={
                handleChange
              }
            />

            <TextField
              label="Bed"
              name="bed"
              value={
                formData.bed
              }
              onChange={
                handleChange
              }
            />

            <TextField
              select
              label="Status"
              name="status"
              value={
                formData.status
              }
              onChange={
                handleChange
              }
            >
              {statuses.map(
                (status) => (
                  <MenuItem
                    key={status}
                    value={status}
                  >
                    {status}
                  </MenuItem>
                )
              )}
            </TextField>

            <TextField
              select
              label="Payer Type"
              name="payerType"
              value={
                formData.payerType
              }
              onChange={
                handleChange
              }
            >
              {payerTypes.map(
                (payer) => (
                  <MenuItem
                    key={payer}
                    value={payer}
                  >
                    {payer}
                  </MenuItem>
                )
              )}
            </TextField>

          </div>

        </div>

        <div className="edit-section">

          <h3>
            Additional Information
          </h3>

          <div className="edit-grid">

            <TextField
              label="Admission Reason"
              name="admissionReason"
              value={
                formData.admissionReason
              }
              onChange={
                handleChange
              }
            />

            <TextField
              label="Attendant Name"
              name="attendantName"
              value={
                formData.attendantName
              }
              onChange={
                handleChange
              }
            />

            <TextField
              label="Attendant Mobile"
              name="attendantMobile"
              value={
                formData.attendantMobile
              }
              onChange={
                handleChange
              }
            />

            <TextField
              label="Remarks"
              name="remarks"
              value={
                formData.remarks
              }
              onChange={
                handleChange
              }
              multiline
              rows={1}
            />

          </div>

        </div>

      </DialogContent>

      <DialogActions className="edit-footer">

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={
            handleUpdate
          }
        >
          Update Admission
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default EditAdmissionModal;