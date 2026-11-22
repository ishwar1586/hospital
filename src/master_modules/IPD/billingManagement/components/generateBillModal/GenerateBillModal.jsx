import { useState, useMemo } from "react";

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
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

import "@/master_modules/IPD/billingManagement/styles/generateBillModal.css";

const GenerateBillModal = ({
  open,
  patient,
  onClose,
}) => {

  const [charges, setCharges] =
    useState({
      roomCharges: "",
      doctorCharges: "",
      nursingCharges: "",
      labCharges: "",
      pharmacyCharges: "",
      procedureCharges: "",
    });

  const handleChargeChange =
    (e) => {

      setCharges({
        ...charges,
        [e.target.name]:
          e.target.value,
      });

    };

  const totalAmount =
    useMemo(() => {

      return (
        Number(
          charges.roomCharges || 0
        ) +
        Number(
          charges.doctorCharges || 0
        ) +
        Number(
          charges.nursingCharges || 0
        ) +
        Number(
          charges.labCharges || 0
        ) +
        Number(
          charges.pharmacyCharges || 0
        ) +
        Number(
          charges.procedureCharges || 0
        )
      );

    }, [charges]);

  if (!patient) return null;

  return (

    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >

      <DialogTitle
        className="generate-bill-header"
      >

        <div className="generate-bill-title">

          <ReceiptLongOutlinedIcon />

          <span>
            Generate Bill
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

        <div className="generate-bill-body">

          <div className="bill-patient-card">

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

          <div className="bill-charge-section">

            <h3>
              Bill Charges
            </h3>

            <div className="charges-grid">

              <div className="charge-field">
                <label>
                  Room Charges
                </label>

                <input
                  type="number"
                  name="roomCharges"
                  value={
                    charges.roomCharges
                  }
                  onChange={
                    handleChargeChange
                  }
                />
              </div>

              <div className="charge-field">
                <label>
                  Doctor Charges
                </label>

                <input
                  type="number"
                  name="doctorCharges"
                  value={
                    charges.doctorCharges
                  }
                  onChange={
                    handleChargeChange
                  }
                />
              </div>

              <div className="charge-field">
                <label>
                  Nursing Charges
                </label>

                <input
                  type="number"
                  name="nursingCharges"
                  value={
                    charges.nursingCharges
                  }
                  onChange={
                    handleChargeChange
                  }
                />
              </div>

              <div className="charge-field">
                <label>
                  Lab Charges
                </label>

                <input
                  type="number"
                  name="labCharges"
                  value={
                    charges.labCharges
                  }
                  onChange={
                    handleChargeChange
                  }
                />
              </div>

              <div className="charge-field">
                <label>
                  Pharmacy Charges
                </label>

                <input
                  type="number"
                  name="pharmacyCharges"
                  value={
                    charges.pharmacyCharges
                  }
                  onChange={
                    handleChargeChange
                  }
                />
              </div>

              <div className="charge-field">
                <label>
                  Procedure Charges
                </label>

                <input
                  type="number"
                  name="procedureCharges"
                  value={
                    charges.procedureCharges
                  }
                  onChange={
                    handleChargeChange
                  }
                />
              </div>

            </div>

          </div>

          <div className="bill-total-card">

            <h4>
              Total Bill Amount
            </h4>

            <h2>
              ₹{totalAmount.toLocaleString()}
            </h2>

          </div>

        </div>

      </DialogContent>

      <DialogActions
        className="generate-bill-footer"
      >

        <Button
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
        >
          Generate Bill
        </Button>

      </DialogActions>

    </Dialog>

  );

};

export default GenerateBillModal;