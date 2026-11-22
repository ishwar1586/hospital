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
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import "@/master_modules/IPD/styles/addAdmission.css";

const doctors = [
  "Dr. Amit Kumar",
  "Dr. Priya Singh",
  "Dr. Rajesh Gupta",
  "Dr. Sandeep Mehta",
];

const departments = [
  "Medicine",
  "Cardiology",
  "Neurology",
  "Gynecology",
  "Orthopedics",
];

const wards = [
  "General Ward",
  "Private Ward",
  "ICU",
  "CCU",
];

const payerTypes = [
  "Cash",
  "Insurance",
];

const AddAdmissionModal = ({
  open,
  onClose,
}) => {


const handleRefresh = () => {
  setFormData({
    uhid: "",
    patientName: "",
    age: "",
    gender: "",
    mobile: "",

    admissionDate: "",
    doctor: "",
    department: "",
    ward: "",
    room: "",
    bed: "",
    payerType: "",

    chiefComplaint: "",
    provisionalDiagnosis: "",
    remarks: "",

    attendantName: "",
    attendantMobile: "",
    relation: "",
  });
};

  const [formData, setFormData] =
    useState({
      uhid: "",
      patientName: "",
      age: "",
      gender: "",
      mobile: "",

      admissionDate: "",
      doctor: "",
      department: "",
      ward: "",
      room: "",
      bed: "",
      payerType: "",

      chiefComplaint: "",
      provisionalDiagnosis: "",
      remarks: "",

      attendantName: "",
      attendantMobile: "",
      relation: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSaveAdmission = () => {
    console.log(
      "Admission Saved",
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
          maxHeight: "90vh",
        },
      }}
    >
      <DialogTitle className="add-header">

        <div className="add-title">
          <AddCircleOutlineOutlinedIcon />
          <span>
            New Admission
          </span>
        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        {/* Patient Info */}

        <div className="add-section">

          <h3>
            Patient Information
          </h3>

          <div className="add-grid">

            <TextField
              label="UHID"
              name="uhid"
              value={formData.uhid}
              onChange={handleChange}
            />

            <TextField
              label="Patient Name"
              name="patientName"
              value={
                formData.patientName
              }
              onChange={handleChange}
            />

            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />

            <TextField
              select
              label="Gender"
              name="gender"
              value={
                formData.gender
              }
              onChange={handleChange}
            >
              <MenuItem value="Male">
                Male
              </MenuItem>

              <MenuItem value="Female">
                Female
              </MenuItem>
            </TextField>

            <TextField
              label="Mobile Number"
              name="mobile"
              value={
                formData.mobile
              }
              onChange={handleChange}
            />

          </div>

        </div>

        {/* Admission */}

        <div className="add-section">

          <h3>
            Admission Details
          </h3>

          <div className="add-grid">

            <TextField
              type="date"
              label="Admission Date"
              name="admissionDate"
              value={
                formData.admissionDate
              }
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              select
              label="Doctor"
              name="doctor"
              value={
                formData.doctor
              }
              onChange={handleChange}
            >
              {doctors.map(
                (doctor) => (
                  <MenuItem
                    key={doctor}
                    value={doctor}
                  >
                    {doctor}
                  </MenuItem>
                )
              )}
            </TextField>

            <TextField
              select
              label="Department"
              name="department"
              value={
                formData.department
              }
              onChange={handleChange}
            >
              {departments.map(
                (dept) => (
                  <MenuItem
                    key={dept}
                    value={dept}
                  >
                    {dept}
                  </MenuItem>
                )
              )}
            </TextField>

            <TextField
              select
              label="Ward"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
            >
              {wards.map(
                (ward) => (
                  <MenuItem
                    key={ward}
                    value={ward}
                  >
                    {ward}
                  </MenuItem>
                )
              )}
            </TextField>

            <TextField
              label="Room"
              name="room"
              value={formData.room}
              onChange={handleChange}
            />

            <TextField
              label="Bed"
              name="bed"
              value={formData.bed}
              onChange={handleChange}
            />

            <TextField
              select
              label="Payer Type"
              name="payerType"
              value={
                formData.payerType
              }
              onChange={handleChange}
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

        {/* Clinical */}

        <div className="add-section">

          <h3>
            Clinical Information
          </h3>

          <div className="add-grid">

            <TextField
              label="Chief Complaint"
              name="chiefComplaint"
              value={
                formData.chiefComplaint
              }
              onChange={handleChange}
              multiline
              rows={1}
            />

            <TextField
              label="Provisional Diagnosis"
              name="provisionalDiagnosis"
              value={
                formData.provisionalDiagnosis
              }
              onChange={handleChange}
              multiline
              rows={1}
            />

            <TextField
              label="Remarks"
              name="remarks"
              value={
                formData.remarks
              }
              onChange={handleChange}
              multiline
              rows={1}
            />

          </div>

        </div>

        {/* Attendant */}

        <div className="add-section">

          <h3>
            Attendant Information
          </h3>

          <div className="add-grid">

            <TextField
              label="Attendant Name"
              name="attendantName"
              value={
                formData.attendantName
              }
              onChange={handleChange}
            />

            <TextField
              label="Attendant Mobile"
              name="attendantMobile"
              value={
                formData.attendantMobile
              }
              onChange={handleChange}
            />

            <TextField
              label="Relation"
              name="relation"
              value={
                formData.relation
              }
              onChange={handleChange}
            />

          </div>

        </div>

      </DialogContent>

      {/* <DialogActions className="add-footer">

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={
            handleSaveAdmission
          }
        >
          Save Admission
        </Button>

      </DialogActions> */}

      <DialogActions className="add-footer">

  <Button
    variant="outlined"
    color="warning"
    onClick={handleRefresh}
  >
    Refresh
  </Button>

  <Button
    variant="outlined"
    onClick={onClose}
  >
    Cancel
  </Button>

  <Button
    variant="contained"
    onClick={handleSaveAdmission}
  >
    Save Admission
  </Button>

</DialogActions>

    </Dialog>
  );
};

export default AddAdmissionModal;