import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

import "@/master_modules/IPD/billingManagement/styles/paymentModal.css";

const PaymentModal = ({
  open,
  patient,
  onClose,
}) => {

  const [paymentData,
    setPaymentData] =
    useState({
      amount: "",
      paymentMethod: "Cash",
      transactionId: "",
      remarks: "",
    });

  if (!patient) return null;

  const handleChange =
    (e) => {

      setPaymentData({
        ...paymentData,
        [e.target.name]:
          e.target.value,
      });

    };

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle
        className="payment-modal-header"
      >

        <div className="payment-title">

          <PaymentsOutlinedIcon />

          <span>
            Collect Payment
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >

          <CloseIcon />

        </IconButton>

      </DialogTitle>

      <Divider />

      <DialogContent>

        <div className="payment-modal-body">

          <div className="payment-patient-card">

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
                Bill No
              </label>

              <span>
                {patient.billNo}
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

          </div>

          <div className="payment-summary-grid">

            <div className="summary-box total">
              <label>
                Total Amount
              </label>

              <h3>
                ₹
                {patient.billAmount?.toLocaleString()}
              </h3>
            </div>

            <div className="summary-box paid">
              <label>
                Paid Amount
              </label>

              <h3>
                ₹
                {patient.paidAmount?.toLocaleString()}
              </h3>
            </div>

            <div className="summary-box due">
              <label>
                Due Amount
              </label>

              <h3>
                ₹
                {patient.dueAmount?.toLocaleString()}
              </h3>
            </div>

          </div>

          <div className="payment-form">

            <div className="form-group">

              <label>
                Payment Amount
              </label>

              <input
                type="number"
                name="amount"
                value={
                  paymentData.amount
                }
                onChange={
                  handleChange
                }
                placeholder="Enter amount"
              />

            </div>

            <div className="form-group">

              <label>
                Payment Method
              </label>

              <select
                name="paymentMethod"
                value={
                  paymentData.paymentMethod
                }
                onChange={
                  handleChange
                }
              >

                <option>
                  Cash
                </option>

                <option>
                  UPI
                </option>

                <option>
                  Card
                </option>

                <option>
                  Net Banking
                </option>

                <option>
                  Insurance
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Transaction ID
              </label>

              <input
                type="text"
                name="transactionId"
                value={
                  paymentData.transactionId
                }
                onChange={
                  handleChange
                }
                placeholder="Optional"
              />

            </div>

            <div className="form-group full-width">

              <label>
                Remarks
              </label>

              <textarea
                rows="4"
                name="remarks"
                value={
                  paymentData.remarks
                }
                onChange={
                  handleChange
                }
                placeholder="Enter remarks"
              />

            </div>

          </div>

          <div className="payment-history">

            <h3>
              Payment History
            </h3>

            <div className="history-item">
              <span>
                ₹12,000
              </span>

              <span>
                UPI
              </span>

              <span>
                15-Jun-2026
              </span>
            </div>

            <div className="history-item">
              <span>
                ₹8,000
              </span>

              <span>
                Cash
              </span>

              <span>
                16-Jun-2026
              </span>
            </div>

          </div>

        </div>

      </DialogContent>

      <DialogActions
        className="payment-footer"
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
            <PaymentsOutlinedIcon />
          }
        >
          Collect Payment
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default PaymentModal;