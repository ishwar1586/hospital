import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import InvoicePreviewModal from "@/master_modules/IPD/components/invoicePreview/InvoicePreviewModal";
import FinalBillModal from "@/master_modules/IPD/components/finalBill/FinalBillModal";
import "@/master_modules/IPD/styles/billingmodal.css";



const BillingModal = ({
  open,
  onClose,
  patient,
}) => {


const [formData, setFormData] =
  useState({
    invoiceNo: `INV-${Date.now()}`,

    roomCharges: "",
    doctorCharges: "",
    nursingCharges: "",
    medicineCharges: "",
    labCharges: "",
    otherCharges: "",

    discountType: "fixed",
    discount: "",

    advanceAmount: "",

    paidAmount: "",

    paymentMode: "",
  });

const [openInvoicePreview, setOpenInvoicePreview] =
  useState(false);

  const [openFinalBill,
  setOpenFinalBill] =
  useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const grossAmount =
    Number(formData.roomCharges || 0) +
    Number(formData.doctorCharges || 0) +
    Number(formData.nursingCharges || 0) +
    Number(formData.medicineCharges || 0) +
    Number(formData.labCharges || 0) +
    Number(formData.otherCharges || 0);



const discountAmount =
  formData.discountType ===
  "percentage"
    ? (grossAmount *
        Number(
          formData.discount || 0
        )) /
      100
    : Number(
        formData.discount || 0
      );

const netAmount =
  grossAmount -
  discountAmount -
  Number(
    formData.advanceAmount || 0
  );

const balanceAmount =
  netAmount -
  Number(
    formData.paidAmount || 0
  );

let paymentStatus = "Unpaid";

if (balanceAmount <= 0) {
  paymentStatus = "Paid";
} else if (
  Number(formData.paidAmount) > 0
) {
  paymentStatus =
    "Partially Paid";
}

  if (!patient) return null;

  return (
  <>
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
      <DialogTitle className="billing-header">

        <div className="billing-title">
          <ReceiptLongOutlinedIcon />
          <span>
            Patient Billing
          </span>
        </div>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="billing-patient-card">
          <h2>
            {patient.patientName}
          </h2>

          <div className="billing-tags">
            <span>
              {patient.ipdNo}
            </span>

            <span>
              {patient.uhid}
            </span>
          </div>
        </div>

        <TextField
  fullWidth
  label="Invoice Number"
  value={formData.invoiceNo}
  InputProps={{
    readOnly: true,
  }}
  sx={{
    mb: 3,
  }}
/>

        <div className="billing-section">

          <h3>
            Patient Information
          </h3>

          <div className="billing-info-grid">

            <div className="billing-info-card">
              <label>Doctor</label>
              <h4>
                {patient.doctor}
              </h4>
            </div>

            <div className="billing-info-card">
              <label>Ward</label>
              <h4>
                {patient.ward}
              </h4>
            </div>

            <div className="billing-info-card">
              <label>Room / Bed</label>
              <h4>
                {patient.room} / {patient.bed}
              </h4>
            </div>

          </div>

        </div>

        <div className="billing-section">

          <h3>Charges</h3>

          <div className="billing-form-grid">

            <TextField
              label="Room Charges"
              name="roomCharges"
              value={formData.roomCharges}
              onChange={handleChange}
              type="number"
            />

            <TextField
              label="Doctor Charges"
              name="doctorCharges"
              value={formData.doctorCharges}
              onChange={handleChange}
              type="number"
            />

            <TextField
              label="Nursing Charges"
              name="nursingCharges"
              value={formData.nursingCharges}
              onChange={handleChange}
              type="number"
            />

            <TextField
              label="Medicine Charges"
              name="medicineCharges"
              value={formData.medicineCharges}
              onChange={handleChange}
              type="number"
            />

            <TextField
              label="Lab Charges"
              name="labCharges"
              value={formData.labCharges}
              onChange={handleChange}
              type="number"
            />

            <TextField
              label="Other Charges"
              name="otherCharges"
              value={formData.otherCharges}
              onChange={handleChange}
              type="number"
            />

            <TextField
  label="Advance Amount"
  name="advanceAmount"
  value={
    formData.advanceAmount
  }
  onChange={handleChange}
  type="number"
/>

          </div>

        </div>

        <div className="billing-section">

          <h3>Billing Summary</h3>

          <div className="billing-summary">


            <div className="summary-row">
  <span>Gross Amount</span>
  <strong>
    ₹{grossAmount}
  </strong>
</div>

<TextField
  select
  label="Discount Type"
  name="discountType"
  value={
    formData.discountType
  }
  onChange={handleChange}
  fullWidth
>
  <MenuItem value="fixed">
    Fixed Amount
  </MenuItem>

  <MenuItem value="percentage">
    Percentage (%)
  </MenuItem>
</TextField>

<TextField
  label="Discount"
  name="discount"
  value={formData.discount}
  onChange={handleChange}
  type="number"
  fullWidth
/>

<TextField
  label="Paid Amount"
  name="paidAmount"
  value={formData.paidAmount}
  onChange={handleChange}
  type="number"
  fullWidth
/>

<TextField
  select
  label="Payment Mode"
  name="paymentMode"
  value={
    formData.paymentMode
  }
  onChange={handleChange}
  fullWidth
>
  <MenuItem value="Cash">
    Cash
  </MenuItem>

  <MenuItem value="UPI">
    UPI
  </MenuItem>

  <MenuItem value="Card">
    Card
  </MenuItem>

  <MenuItem value="Net Banking">
    Net Banking
  </MenuItem>

  <MenuItem value="Insurance">
    Insurance
  </MenuItem>
</TextField>

<div className="summary-row">
  <span>Discount</span>
  <strong>
    ₹{discountAmount}
  </strong>
</div>

<div className="summary-row">
  <span>Advance</span>
  <strong>
    ₹{
      formData.advanceAmount ||
      0
    }
  </strong>
</div>

<div className="summary-row">
  <span>Net Amount</span>
  <strong>
    ₹{netAmount}
  </strong>
</div>

<div className="summary-row balance">
  <span>Balance</span>
  <strong>
    ₹{balanceAmount}
  </strong>
</div>

<div className="summary-row">
  <span>Payment Mode</span>
  <strong>
    {formData.paymentMode ||
      "-"}
  </strong>
</div>

<div
  className={`summary-row status ${paymentStatus
    .toLowerCase()
    .replace(/\s/g, "-")}`}
>
  <span>Status</span>

  <strong>
    {paymentStatus}
  </strong>
</div>

          </div>

        </div>

      </DialogContent>

      <DialogActions className="billing-footer">

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        {/* <Button
          variant="outlined"
        >
          Print Bill
        </Button> */}

        <Button
  variant="outlined"
  onClick={() =>
    setOpenInvoicePreview(true)
  }
>
  Print Bill
</Button>

        {/* <Button
          variant="contained"
        >
          Generate Final Bill
        </Button> */}


        <Button
  variant="contained"
  onClick={() =>
    setOpenFinalBill(true)
  }
>
  Generate Final Bill
</Button>

      {/* </DialogActions>

    </Dialog>
  ); */}

        </DialogActions>

    </Dialog>

    <InvoicePreviewModal
      open={openInvoicePreview}
      onClose={() =>
        setOpenInvoicePreview(false)
      }
      patient={patient}
      billingData={{
        ...formData,
        grossAmount,
        discountAmount,
        netAmount,
        balanceAmount,
        paymentStatus,
      }}
    />
    <FinalBillModal
  open={openFinalBill}
  onClose={() =>
    setOpenFinalBill(false)
  }
  patient={patient}
  billingData={{
    ...formData,
    grossAmount,
    discountAmount,
    netAmount,
    balanceAmount,
    paymentStatus,
  }}
/>
  </>

  
);
};

export default BillingModal;