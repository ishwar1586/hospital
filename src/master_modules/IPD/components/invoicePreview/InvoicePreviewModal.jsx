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
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import "@/master_modules/IPD/styles/invoicePreview.css";

const InvoicePreviewModal = ({
  open,
  onClose,
  patient,
  billingData,
}) => {
  if (!patient || !billingData)
    return null;

  // const handlePrint = () => {
  //   window.print();
  // };

  const handlePrint = () => {

  const content =
    document.getElementById(
      "invoice-preview"
    );

  printContent(
    "Invoice",
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
      <DialogTitle className="invoice-header">
        <div className="invoice-title">
          <ReceiptLongOutlinedIcon />
          <span>
            Invoice Preview
          </span>
        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>

        <div className="invoice-container"
        id="invoice-preview"
        >

          {/* Hospital */}

          <div className="hospital-section">

            <h1>
              ABC Hospital
            </h1>

            <p>
              Shamli, Uttar Pradesh
            </p>

          </div>

          {/* Invoice */}

          <div className="invoice-meta">

            <div>
              <strong>
                Invoice No:
              </strong>{" "}
              {
                billingData.invoiceNo
              }
            </div>

            <div>
              <strong>
                Date:
              </strong>{" "}
              {new Date().toLocaleDateString()}
            </div>

          </div>

          {/* Patient */}

          <div className="invoice-card">

            <h3>
              Patient Information
            </h3>

            <div className="invoice-grid">

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
                  Doctor
                </label>

                <span>
                  {patient.doctor}
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
                  Room / Bed
                </label>

                <span>
                  {patient.room} /{" "}
                  {patient.bed}
                </span>
              </div>

            </div>

          </div>

          {/* Charges */}

          <div className="invoice-card">

            <h3>
              Charges Details
            </h3>

            <table className="invoice-table">

              <tbody>

                <tr>
                  <td>
                    Room Charges
                  </td>
                  <td>
                    ₹
                    {
                      billingData.roomCharges ||
                      0
                    }
                  </td>
                </tr>

                <tr>
                  <td>
                    Doctor Charges
                  </td>
                  <td>
                    ₹
                    {
                      billingData.doctorCharges ||
                      0
                    }
                  </td>
                </tr>

                <tr>
                  <td>
                    Nursing Charges
                  </td>
                  <td>
                    ₹
                    {
                      billingData.nursingCharges ||
                      0
                    }
                  </td>
                </tr>

                <tr>
                  <td>
                    Medicine Charges
                  </td>
                  <td>
                    ₹
                    {
                      billingData.medicineCharges ||
                      0
                    }
                  </td>
                </tr>

                <tr>
                  <td>
                    Lab Charges
                  </td>
                  <td>
                    ₹
                    {
                      billingData.labCharges ||
                      0
                    }
                  </td>
                </tr>

                <tr>
                  <td>
                    Other Charges
                  </td>
                  <td>
                    ₹
                    {
                      billingData.otherCharges ||
                      0
                    }
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Summary */}

          <div className="invoice-card">

            <h3>
              Billing Summary
            </h3>

            <div className="summary-list">

              <div>
                <span>
                  Gross Amount
                </span>

                <strong>
                  ₹
                  {
                    billingData.grossAmount
                  }
                </strong>
              </div>

              <div>
                <span>
                  Discount
                </span>

                <strong>
                  ₹
                  {
                    billingData.discountAmount
                  }
                </strong>
              </div>

              <div>
                <span>
                  Advance
                </span>

                <strong>
                  ₹
                  {
                    billingData.advanceAmount ||
                    0
                  }
                </strong>
              </div>

              <div>
                <span>
                  Net Amount
                </span>

                <strong>
                  ₹
                  {
                    billingData.netAmount
                  }
                </strong>
              </div>

              <div>
                <span>
                  Paid Amount
                </span>

                <strong>
                  ₹
                  {
                    billingData.paidAmount ||
                    0
                  }
                </strong>
              </div>

              <div>
                <span>
                  Balance
                </span>

                <strong className="balance-text">
                  ₹
                  {
                    billingData.balanceAmount
                  }
                </strong>
              </div>

              <div>
                <span>
                  Payment Mode
                </span>

                <strong>
                  {
                    billingData.paymentMode
                  }
                </strong>
              </div>

              <div>
                <span>
                  Status
                </span>

                <strong>
                  {
                    billingData.paymentStatus
                  }
                </strong>
              </div>

            </div>

          </div>

        </div>

      </DialogContent>

      <DialogActions className="invoice-footer">

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
          Print Invoice
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default InvoicePreviewModal;