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
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

import "@/master_modules/IPD/billingManagement/styles/billSettlementModal.css";

const BillSettlementModal = ({
  open,
  patient,
  onClose,
}) => {

  const [remarks,
    setRemarks] =
    useState("");

  if (!patient) return null;

  const canSettle =
    patient.dueAmount === 0;

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle
        className="settlement-header"
      >

        <div className="settlement-title">

          <AssignmentTurnedInOutlinedIcon />

          <span>
            Bill Settlement
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

        <div className="settlement-body">

          <div className="settlement-patient-card">

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

          <div className="settlement-summary">

            <div className="summary-card total">

              <label>
                Total Amount
              </label>

              <h3>
                ₹
                {patient.billAmount?.toLocaleString()}
              </h3>

            </div>

            <div className="summary-card paid">

              <label>
                Paid Amount
              </label>

              <h3>
                ₹
                {patient.paidAmount?.toLocaleString()}
              </h3>

            </div>

            <div className="summary-card due">

              <label>
                Due Amount
              </label>

              <h3>
                ₹
                {patient.dueAmount?.toLocaleString()}
              </h3>

            </div>

          </div>

          <div className="settlement-status-card">

            {canSettle ? (

              <div className="status-success">

                ✅ Ready For Settlement

              </div>

            ) : (

              <div className="status-warning">

                ⚠ Outstanding Amount Exists

              </div>

            )}

          </div>

          <div className="settlement-form">

            <label>
              Settlement Remarks
            </label>

            <textarea
              rows="4"
              value={remarks}
              onChange={(e) =>
                setRemarks(
                  e.target.value
                )
              }
              placeholder="Enter settlement remarks..."
            />

          </div>

        </div>

      </DialogContent>

      <DialogActions
        className="settlement-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          disabled={!canSettle}
          startIcon={
            <AssignmentTurnedInOutlinedIcon />
          }
        >
          Complete Settlement
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default BillSettlementModal;