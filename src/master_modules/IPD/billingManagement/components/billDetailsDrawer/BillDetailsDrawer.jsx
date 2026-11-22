import {
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";

import "@/master_modules/IPD/billingManagement/styles/billDetailsDrawer.css";

const BillDetailsDrawer = ({
  open,
  patient,
  onClose,
}) => {

  if (!patient) return null;

  return (

    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >

      <div className="bill-drawer">

        <div className="bill-drawer-header">

          <div>

            <h2>
              Billing Details
            </h2>

            <p>
              {patient.billNo}
            </p>

          </div>

          <IconButton
            onClick={onClose}
          >

            <CloseIcon />

          </IconButton>

        </div>

        <Divider />

        <div className="bill-drawer-content">

          <div className="drawer-section">

            <h3>
              Patient Information
            </h3>

            <div className="info-grid">

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

          </div>

          <div className="drawer-section">

            <h3>
              Billing Summary
            </h3>

            <div className="billing-summary-grid">

              <div className="summary-card">

                <label>
                  Total Amount
                </label>

                <h4>
                  ₹
                  {patient.billAmount?.toLocaleString()}
                </h4>

              </div>

              <div className="summary-card">

                <label>
                  Paid Amount
                </label>

                <h4>
                  ₹
                  {patient.paidAmount?.toLocaleString()}
                </h4>

              </div>

              <div className="summary-card">

                <label>
                  Due Amount
                </label>

                <h4>
                  ₹
                  {patient.dueAmount?.toLocaleString()}
                </h4>

              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Charge Breakdown
            </h3>

            <div className="charges-table">

              <div className="charge-row">
                <span>Room Charges</span>
                <span>₹12,000</span>
              </div>

              <div className="charge-row">
                <span>Doctor Charges</span>
                <span>₹5,000</span>
              </div>

              <div className="charge-row">
                <span>Nursing Charges</span>
                <span>₹2,500</span>
              </div>

              <div className="charge-row">
                <span>Pharmacy Charges</span>
                <span>₹3,000</span>
              </div>

              <div className="charge-row">
                <span>Lab Charges</span>
                <span>₹1,500</span>
              </div>

              <div className="charge-row">
                <span>Procedure Charges</span>
                <span>₹1,000</span>
              </div>

            </div>

          </div>

          <div className="drawer-section">

            <h3>
              Payment Status
            </h3>

            <span
              className={`drawer-status ${patient.paymentStatus.toLowerCase()}`}
            >

              {patient.paymentStatus}

            </span>

          </div>

        </div>

        <div className="bill-drawer-footer">

          <button className="drawer-btn print">

            <PrintOutlinedIcon />

            Print Invoice

          </button>

          <button className="drawer-btn payment">

            <PaymentsOutlinedIcon />

            Record Payment

          </button>

          <button className="drawer-btn generate">

            <ReceiptLongOutlinedIcon />

            Generate Bill

          </button>

        </div>

      </div>

    </Drawer>

  );

};

export default BillDetailsDrawer;