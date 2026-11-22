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

import "@/master_modules/IPD/styles/dischargesummarymodal.css";

const DischargeSummaryModal = ({
  open,
  onClose,
  patient,
  dischargeData,
}) => {
  if (!patient) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "16px",
        },
      }}
    >
      <DialogTitle className="summary-header">
        <div>
          <h2>Discharge Summary</h2>
          <p>
            Patient discharge report
          </p>
        </div>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent className="summary-content">

        <div className="hospital-header">
          <h1>ABC Hospital</h1>
          <p>
            Discharge Summary
          </p>
        </div>

        <div className="summary-section">

          <h3>Patient Information</h3>

          <div className="summary-grid">

            <div>
              <label>Patient Name</label>
              <span>
                {patient.patientName}
              </span>
            </div>

            <div>
              <label>UHID</label>
              <span>{patient.uhid}</span>
            </div>

            <div>
              <label>IPD No</label>
              <span>{patient.ipdNo}</span>
            </div>

            <div>
              <label>Age / Gender</label>
              <span>
                {patient.age} /
                {" "}
                {patient.gender}
              </span>
            </div>

          </div>
        </div>

        <div className="summary-section">

          <h3>Admission Details</h3>

          <div className="summary-grid">

            <div>
              <label>Doctor</label>
              <span>
                {patient.doctor}
              </span>
            </div>

            <div>
              <label>Department</label>
              <span>
                {patient.department}
              </span>
            </div>

            <div>
              <label>Ward</label>
              <span>
                {patient.ward}
              </span>
            </div>

            <div>
              <label>Room / Bed</label>
              <span>
                {patient.room}
                {" / "}
                {patient.bed}
              </span>
            </div>

          </div>
        </div>

        <div className="summary-section">

          <h3>Discharge Information</h3>

          <div className="summary-grid">

            <div>
              <label>
                Discharge Date
              </label>
              <span>
                {
                  dischargeData.dischargeDate
                }
              </span>
            </div>

            <div>
              <label>
                Discharge Time
              </label>
              <span>
                {
                  dischargeData.dischargeTime
                }
              </span>
            </div>

            <div>
              <label>
                Discharge Type
              </label>
              <span>
                {
                  dischargeData.dischargeType
                }
              </span>
            </div>

          </div>
        </div>

        <div className="summary-section">
          <h3>Final Diagnosis</h3>

          <p>
            {
              dischargeData.finalDiagnosis
            }
          </p>
        </div>

        <div className="summary-section">
          <h3>
            Treatment Summary
          </h3>

          <p>
            {
              dischargeData.treatmentSummary
            }
          </p>
        </div>

        <div className="summary-section">
          <h3>
            Advice On Discharge
          </h3>

          <p>
            {dischargeData.advice}
          </p>
        </div>

        <div className="summary-section">
          <h3>Remarks</h3>

          <p>
            {dischargeData.remarks}
          </p>
        </div>

        <div className="signature-box">
          <div>
            ___________________
            <br />
            Doctor Signature
          </div>

          <div>
            ___________________
            <br />
            Patient Signature
          </div>
        </div>

      </DialogContent>

      <DialogActions className="summary-footer">

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Close
        </Button>

        <Button
          variant="contained"
          startIcon={
            <PrintOutlinedIcon />
          }
          onClick={handlePrint}
        >
          Print
        </Button>

      </DialogActions>
    </Dialog>
  );
};

export default DischargeSummaryModal;