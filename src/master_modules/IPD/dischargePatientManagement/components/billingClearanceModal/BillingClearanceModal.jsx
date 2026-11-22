import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/billingclearancemodal.css";

const BillingClearanceModal = ({
  open,
  patient,
  onClose,
}) => {

  const [formData,
    setFormData] =
    useState({
      billingStatus: "",
      totalBill: "",
      amountPaid: "",
      pendingAmount: "",
      remarks: "",
    });

  const handleChange = (
    e
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSave = () => {

    console.log(
      "Billing Clearance Saved",
      formData
    );

    onClose();

  };

  if (!patient) return null;

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle
        className="billing-header"
      >

        <div className="billing-title">

          <ReceiptLongOutlinedIcon />

          <span>
            Billing Clearance
          </span>

        </div>

        <IconButton
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        <div className="billing-patient-card">

          <div>
            <label>Patient Name</label>
            <span>
              {patient.patientName}
            </span>
          </div>

          <div>
            <label>IPD No</label>
            <span>
              {patient.ipdNo}
            </span>
          </div>

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

        </div>

        <div className="billing-form">

          <TextField
            select
            fullWidth
            label="Billing Status"
            name="billingStatus"
            value={
              formData.billingStatus
            }
            onChange={
              handleChange
            }
          >

            <MenuItem value="Approved">
              Approved
            </MenuItem>

            <MenuItem value="Pending">
              Pending
            </MenuItem>

            <MenuItem value="Rejected">
              Rejected
            </MenuItem>

          </TextField>

          <TextField
            fullWidth
            label="Total Bill"
            name="totalBill"
            value={
              formData.totalBill ||
              patient.totalBill
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="Amount Paid"
            name="amountPaid"
            value={
              formData.amountPaid
            }
            onChange={
              handleChange
            }
          />

          <TextField
            fullWidth
            label="Pending Amount"
            name="pendingAmount"
            value={
              formData.pendingAmount
            }
            onChange={
              handleChange
            }
          />

        </div>

        <div className="billing-remarks">

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Billing Remarks"
            name="remarks"
            value={
              formData.remarks
            }
            onChange={
              handleChange
            }
          />

        </div>

      </DialogContent>

      <DialogActions
        className="billing-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={handleSave}
        >
          Approve Billing
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default BillingClearanceModal;