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

import { printContent } from "@/utils/printcontent";

import "@/master_modules/IPD/doctorsRound/styles/printroundreport.css";

const PrintRoundReportModal = ({
  open,
  onClose,
  round,
}) => {

  if (!round) return null;

  const handlePrint = () => {

    const htmlContent = `

      <div class="hospital-header">

        <h1>
          ABC Multispeciality Hospital
        </h1>

        <p>
          Doctor Round Report
        </p>

      </div>

      <div class="slip-section">

        <h3>
          Patient Information
        </h3>

        <div class="slip-grid">

          <div>
            <label>Patient Name</label>
            <span>${round.patientName}</span>
          </div>

          <div>
            <label>UHID</label>
            <span>${round.uhid}</span>
          </div>

          <div>
            <label>IPD No</label>
            <span>${round.ipdNo}</span>
          </div>

          <div>
            <label>Doctor</label>
            <span>${round.doctor}</span>
          </div>

          <div>
            <label>Ward</label>
            <span>${round.ward}</span>
          </div>

          <div>
            <label>Bed</label>
            <span>${round.bed}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Round Information
        </h3>

        <div class="slip-grid">

          <div>
            <label>Date</label>
            <span>${round.roundDate}</span>
          </div>

          <div>
            <label>Time</label>
            <span>${round.roundTime}</span>
          </div>

          <div>
            <label>Status</label>
            <span>${round.status}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Vitals
        </h3>

        <div class="slip-grid">

          <div>
            <label>BP</label>
            <span>${round.bp}</span>
          </div>

          <div>
            <label>Pulse</label>
            <span>${round.pulse}</span>
          </div>

          <div>
            <label>Temperature</label>
            <span>${round.temperature}</span>
          </div>

          <div>
            <label>SpO₂</label>
            <span>${round.spo2}</span>
          </div>

        </div>

      </div>

      <div class="slip-section">

        <h3>
          Clinical Notes
        </h3>

        <p>${round.notes}</p>

      </div>

      <div class="slip-section">

        <h3>
          Advice
        </h3>

        <p>${round.advice}</p>

      </div>

      <div class="signature-section">

        <div>
          __________________
          <p>Doctor Signature</p>
        </div>

        <div>
          __________________
          <p>Medical Officer</p>
        </div>

      </div>

    `;

    printContent(
      `RoundReport-${round.ipdNo}`,
      htmlContent
    );
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

      <DialogTitle className="round-report-header">

        <div className="round-report-title">

          <PrintOutlinedIcon />

          <span>
            Doctor Round Report
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="round-report-container">

          <div className="report-hospital">

            <h2>
              ABC Multispeciality Hospital
            </h2>

            <p>
              Doctor Round Report Preview
            </p>

          </div>

          <div className="report-section">

            <h3>
              Patient Information
            </h3>

            <div className="report-grid">

              <div>
                <label>Patient</label>
                <span>{round.patientName}</span>
              </div>

              <div>
                <label>UHID</label>
                <span>{round.uhid}</span>
              </div>

              <div>
                <label>IPD No</label>
                <span>{round.ipdNo}</span>
              </div>

              <div>
                <label>Doctor</label>
                <span>{round.doctor}</span>
              </div>

            </div>

          </div>

          <div className="report-section">

            <h3>
              Vitals
            </h3>

            <div className="report-grid">

              <div>
                <label>BP</label>
                <span>{round.bp}</span>
              </div>

              <div>
                <label>Pulse</label>
                <span>{round.pulse}</span>
              </div>

              <div>
                <label>Temperature</label>
                <span>{round.temperature}</span>
              </div>

              <div>
                <label>SpO₂</label>
                <span>{round.spo2}</span>
              </div>

            </div>

          </div>

        </div>

      </DialogContent>

      <DialogActions>

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
          Print Report
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default PrintRoundReportModal;