import { printContent }
from "@/utils/printContent";


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

import "@/master_modules/IPD/styles/admissionSlip.css";

const AdmissionSlipModal = ({
  open,
  onClose,
  patient,
}) => {

  if (!patient) return null;

  // const handlePrint = () => {
  //   window.print();
  // };


  const handlePrint = () => {

  const content =
    document.getElementById(
      "admission-slip"
    );

  printContent(
    "Admission Slip",
    content.innerHTML
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
      <DialogTitle className="slip-header">

        <div className="slip-title">
          <PrintOutlinedIcon />

          <span>
            Admission Slip
          </span>
        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="slip-container"
        id="admission-slip"
        >

          <div className="hospital-header">

            <h1>
              ABC Multispeciality Hospital
            </h1>

            <p>
              City Center, Lucknow
            </p>

            <p>
              Phone : +91 9876543210
            </p>

          </div>

          <div className="slip-section">

            <h3>
              Patient Information
            </h3>

            <div className="slip-grid">

              <div>
                <label>
                  Patient Name
                </label>

                <span>
                  {
                    patient.patientName
                  }
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
                  Age / Gender
                </label>

                <span>
                  {patient.age}Y /{" "}
                  {patient.gender}
                </span>
              </div>

            </div>

          </div>

          <div className="slip-section">

            <h3>
              Admission Information
            </h3>

            <div className="slip-grid">

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
                  {
                    patient.department
                  }
                </span>
              </div>

              <div>
                <label>
                  Ward
                </label>

                <span>
                  {patient.ward}
                </span>
              </div>

              <div>
                <label>
                  Room
                </label>

                <span>
                  {patient.room}
                </span>
              </div>

              <div>
                <label>
                  Bed
                </label>

                <span>
                  {patient.bed}
                </span>
              </div>

              <div>
                <label>
                  Admission Date
                </label>

                <span>
                  {
                    patient.admissionDate
                  }
                </span>
              </div>

              <div>
                <label>
                  Payer Type
                </label>

                <span>
                  {
                    patient.payerType
                  }
                </span>
              </div>

              <div>
                <label>
                  Status
                </label>

                <span>
                  {
                    patient.status
                  }
                </span>
              </div>

            </div>

          </div>

          <div className="signature-section">

            <div>
              __________________

              <p>
                Admission Desk
              </p>
            </div>

            <div>
              __________________

              <p>
                Patient Signature
              </p>
            </div>

          </div>

        </div>

      </DialogContent>

      <DialogActions className="slip-footer">

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
          Print Slip
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default AdmissionSlipModal;