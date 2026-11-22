import {
  Drawer,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
// import IconButton from "@mui/material/IconButton";

import "@/master_modules/IPD/nursingStation/styles/patientdrawer.css";

const PatientDrawer = ({
  open,
  patient,
  onClose,
}) => {

  if (!patient) return null;

  return (

    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >

      <div className="patient-drawer">

        <div className="drawer-header">

          <div>

            <h2>
              Patient Details
            </h2>

            <p>
              Complete patient overview
            </p>

          </div>

          <IconButton
          className="drawer-close-btn"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>

        </div>

        <div className="drawer-body">

          <div className="drawer-section">

            <h3>
              Basic Information
            </h3>

            <div className="drawer-grid">

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
                  UHID
                </label>

                <span>
                  {patient.uhid}
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

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Clinical Information
            </h3>

            <div className="drawer-grid">

              <div>
                <label>
                  Doctor
                </label>

                <span>
                  {patient.doctor}
                </span>
              </div>

              <div>
                <label>
                  Condition
                </label>

                <span>
                  {patient.condition}
                </span>
              </div>

              <div>
                <label>
                  Admission Date
                </label>

                <span>
                  {patient.admissionDate}
                </span>
              </div>

              <div>
                <label>
                  Diagnosis
                </label>

                <span>
                  {patient.diagnosis}
                </span>
              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Latest Vitals
            </h3>

            <div className="drawer-grid">

              <div>
                <label>
                  BP
                </label>

                <span>
                  {patient.bp}
                </span>
              </div>

              <div>
                <label>
                  Pulse
                </label>

                <span>
                  {patient.pulse}
                </span>
              </div>

              <div>
                <label>
                  Temperature
                </label>

                <span>
                  {patient.temperature}
                </span>
              </div>

              <div>
                <label>
                  SpO₂
                </label>

                <span>
                  {patient.spo2}
                </span>
              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Allergies
            </h3>

            <p className="drawer-text">
              {patient.allergies}
            </p>

          </div>

          <div className="drawer-section">

            <h3>
              Current Medications
            </h3>

            <p className="drawer-text">
              {patient.medications}
            </p>

          </div>

        </div>

      </div>

    </Drawer>

  );

};

export default PatientDrawer;