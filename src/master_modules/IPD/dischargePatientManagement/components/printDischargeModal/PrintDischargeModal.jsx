import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

import { printContent }
from "@/master_modules/IPD/dischargePatientManagement/utils/dischargePrint";

import "@/master_modules/IPD/dischargePatientManagement/styles/printdischargemodal.css";

const PrintDischargeModal = ({
  open,
  patient,
  onClose,
}) => {

  if (!patient) return null;

  const handlePrint = () => {

    const htmlContent = `

      <div class="hospital-header">

        <h1>
          Hospital Discharge Summary
        </h1>

        <p>
          Discharge Certificate
        </p>

      </div>

      <div class="slip-section">

        <h3>
          Patient Information
        </h3>

        <div class="slip-grid">

          <div>
            <label>Patient Name</label>
            <span>${patient.patientName}</span>
          </div>

          <div>
            <label>IPD Number</label>
            <span>${patient.ipdNo}</span>
          </div>

          <div>
            <label>Age</label>
            <span>${patient.age}</span>
          </div>

          <div>
            <label>Gender</label>
            <span>${patient.gender}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Admission Details
        </h3>

        <div class="slip-grid">

          <div>
            <label>Doctor</label>
            <span>${patient.doctor}</span>
          </div>

          <div>
            <label>Department</label>
            <span>${patient.department}</span>
          </div>

          <div>
            <label>Admission Date</label>
            <span>${patient.admissionDate}</span>
          </div>

          <div>
            <label>Discharge Date</label>
            <span>${patient.dischargeDate}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Clinical Summary
        </h3>

        <div class="slip-grid">

          <div>
            <label>Diagnosis</label>
            <span>${patient.diagnosis}</span>
          </div>

          <div>
            <label>Condition</label>
            <span>${patient.condition}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Clearance Details
        </h3>

        <div class="slip-grid">

          <div>
            <label>Doctor Clearance</label>
            <span>${patient.doctorClearance}</span>
          </div>

          <div>
            <label>Billing Clearance</label>
            <span>${patient.billingClearance}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Billing Information
        </h3>

        <div class="slip-grid">

          <div>
            <label>Total Bill</label>
            <span>₹ ${patient.totalBill}</span>
          </div>

          <div>
            <label>Payment Status</label>
            <span>${patient.paymentStatus}</span>
          </div>

        </div>

      </div>

      <div class="signature-section">

        <div>

          <p>
            ____________________
          </p>

          <strong>
            Treating Doctor
          </strong>

        </div>

        <div>

          <p>
            ____________________
          </p>

          <strong>
            Medical Superintendent
          </strong>

        </div>

      </div>

    `;

    printContent(
      "Discharge Summary",
      htmlContent
    );

  };

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle
        className="print-header"
      >

        <div className="print-title">

          <PrintOutlinedIcon />

          <span>
            Print Discharge Summary
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="print-preview-card">

          <h3>
            Patient Information
          </h3>

          <div className="print-grid">

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
                Doctor
              </label>

              <span>
                {patient.doctor}
              </span>
            </div>

            <div>
              <label>
                Department
              </label>

              <span>
                {patient.department}
              </span>
            </div>

          </div>

        </div>

      </DialogContent>

      <DialogActions
        className="print-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          startIcon={
            <PrintOutlinedIcon />
          }
          onClick={handlePrint}
        >
          Print Summary
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default PrintDischargeModal;