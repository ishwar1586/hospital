import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import "@/master_modules/IPD/styles/finalBill.css";

const FinalBillModal = ({
  open,
  onClose,
  patient,
  billingData,
}) => {
  if (!patient || !billingData)
    return null;

  const handleGenerateBill = () => {
    console.log(
      "Final Bill Generated",
      {
        patient,
        billingData,
      }
    );

    alert(
      "Final Bill Generated Successfully"
    );

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "18px",
        },
      }}
    >
      <DialogTitle className="finalbill-header">

        <div className="finalbill-title">
          <CheckCircleOutlineOutlinedIcon />

          <span>
            Generate Final Bill
          </span>
        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="finalbill-patient-card">

          <h2>
            {patient.patientName}
          </h2>

          <div className="finalbill-tags">
            <span>
              {patient.ipdNo}
            </span>

            <span>
              {patient.uhid}
            </span>
          </div>

        </div>

        <div className="finalbill-section">

          <h3>
            Billing Summary
          </h3>

          <div className="summary-list">

            <div>
              <span>
                Gross Amount
              </span>

              <strong>
                ₹{
                  billingData.grossAmount
                }
              </strong>
            </div>

            <div>
              <span>
                Discount
              </span>

              <strong>
                ₹{
                  billingData.discountAmount
                }
              </strong>
            </div>

            <div>
              <span>
                Advance
              </span>

              <strong>
                ₹{
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
                ₹{
                  billingData.netAmount
                }
              </strong>
            </div>

            <div>
              <span>
                Paid Amount
              </span>

              <strong>
                ₹{
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
                ₹{
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

        <div className="warning-box">

          <h4>
            ⚠ Important
          </h4>

          <p>
            Once the final bill is
            generated, billing details
            should not be modified.
            Please verify all charges
            before continuing.
          </p>

        </div>

      </DialogContent>

      <DialogActions className="finalbill-footer">

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={
            handleGenerateBill
          }
        >
          Generate Final Bill
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default FinalBillModal;