import {
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import "@/master_modules/IPD/styles/admissiondrawer.css";

const AdmissionDrawer = ({
  open,
  onClose,
  patient,
}) => {
  if (!patient) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 550,
        },
      }}
    >
      <div className="admission-drawer">

        <div className="drawer-header">
          <div>
            <h2>Admission Details</h2>
            <p>
              Complete patient admission information
            </p>
          </div>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <div className="patient-summary">
          <div className="patient-avatar">
            {patient.patientName?.charAt(0)}
          </div>

          <div className="patient-summary-info">
            <h3>{patient.patientName}</h3>

            <p>
              {patient.ipdNo} • {patient.uhid}
            </p>
          </div>

          <span
            className={`drawer-status ${patient.status
              .toLowerCase()
              .replace(/\s/g, "-")}`}
          >
            {patient.status}
          </span>
        </div>

        <Divider />

        <div className="drawer-body">

          <div className="drawer-section">
            <h3>Patient Information</h3>

            <div className="drawer-grid">
              <div>
                <label>Patient Name</label>
                <span>{patient.patientName}</span>
              </div>

              <div>
                <label>UHID</label>
                <span>{patient.uhid}</span>
              </div>

              <div>
                <label>Age</label>
                <span>{patient.age}</span>
              </div>

              <div>
                <label>Gender</label>
                <span>{patient.gender}</span>
              </div>
            </div>
          </div>

          <div className="drawer-section">
            <h3>Admission Information</h3>

            <div className="drawer-grid">
              <div>
                <label>IPD Number</label>
                <span>{patient.ipdNo}</span>
              </div>

              <div>
                <label>Admission Date</label>
                <span>{patient.admissionDate}</span>
              </div>

              <div>
                <label>Status</label>
                <span>{patient.status}</span>
              </div>

              <div>
                <label>Payer Type</label>
                <span>{patient.payerType}</span>
              </div>
            </div>
          </div>

          <div className="drawer-section">
            <h3>Doctor Information</h3>

            <div className="drawer-grid">
              <div>
                <label>Consultant Doctor</label>
                <span>{patient.doctor}</span>
              </div>

              <div>
                <label>Department</label>
                <span>{patient.department}</span>
              </div>
            </div>
          </div>

          <div className="drawer-section">
            <h3>Bed Allocation</h3>

            <div className="drawer-grid">
              <div>
                <label>Ward</label>
                <span>{patient.ward}</span>
              </div>

              <div>
                <label>Room</label>
                <span>{patient.room}</span>
              </div>

              <div>
                <label>Bed</label>
                <span>{patient.bed}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Drawer>
  );
};

export default AdmissionDrawer;