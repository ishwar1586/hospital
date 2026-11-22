import {
  Drawer,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import "./dischargedrawer.css";

const DischargeDetailsDrawer = ({
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

      <div className="discharge-drawer">

        <div className="drawer-header">

          <div>

            <h2>
              Discharge Details
            </h2>

            <p>
              Complete discharge information
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
              Patient Information
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
                  IPD Number
                </label>

                <span>
                  {patient.ipdNo}
                </span>
              </div>

              <div>
                <label>
                  Age
                </label>

                <span>
                  {patient.age}
                </span>
              </div>

              <div>
                <label>
                  Gender
                </label>

                <span>
                  {patient.gender}
                </span>
              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Admission Details
            </h3>

            <div className="drawer-grid">

              <div>
                <label>
                  Department
                </label>

                <span>
                  {patient.department}
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
                  Discharge Date
                </label>

                <span>
                  {patient.dischargeDate}
                </span>
              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Clinical Details
            </h3>

            <div className="drawer-grid">

              <div>
                <label>
                  Diagnosis
                </label>

                <span>
                  {patient.diagnosis}
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

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Clearance Status
            </h3>

            <div className="drawer-grid">

              <div>
                <label>
                  Doctor Clearance
                </label>

                <span>
                  {patient.doctorClearance}
                </span>
              </div>

              <div>
                <label>
                  Billing Clearance
                </label>

                <span>
                  {patient.billingClearance}
                </span>
              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Billing Details
            </h3>

            <div className="drawer-grid">

              <div>
                <label>
                  Total Bill
                </label>

                <span>
                  ₹ {patient.totalBill}
                </span>
              </div>

              <div>
                <label>
                  Payment Status
                </label>

                <span>
                  {patient.paymentStatus}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </Drawer>

  );

};

export default DischargeDetailsDrawer;