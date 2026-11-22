
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./BillSummary.css";
const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);

const BillSummary = ({
  summary = {},
  paymentAmount = 0,
  showPaymentAmount = true,
}) => {
  const totalCharges = Number(summary.totalCharges ?? summary.subtotal ?? 0);
  const discount = Number(summary.discount ?? 0);
  const netCharges = Number(
    summary.netCharges ?? summary.netAmount ?? totalCharges - discount
  );
  const advancePaid = Number(summary.advancePaid ?? summary.advanceAmount ?? 0);
  const previousPayments = Number(summary.previousPayments ?? 0);

  const totalPaid = Number(
    summary.totalPaid ?? advancePaid + previousPayments
  );

  const outstanding = Math.max(
    0,
    Number(summary.outstanding ?? summary.balanceDue ?? netCharges - totalPaid)
  );

  const currentPayment = Math.max(0, Number(paymentAmount) || 0);

  const remainingAfterPayment = Math.max(
    0,
    outstanding - currentPayment
  );

  const rows = [
    {
      label: "Total Charges",
      value: totalCharges,
    },
    {
      label: "Discount",
      value: -discount,
      type: "discount",
    },
    {
      label: "Net Bill Amount",
      value: netCharges,
      type: "net",
    },
    {
      label: "Advance Paid",
      value: -advancePaid,
      type: "paid",
    },
    ...(previousPayments > 0
      ? [
          {
            label: "Previous Payments",
            value: -previousPayments,
            type: "paid",
          },
        ]
      : []),
  ];

  return (
    <Box
      component="section"
      className="ipd-bill-summary"
      aria-labelledby="ipd-bill-summary-title"
    >
      <Box className="ipd-bill-summary__header">
        <Box className="ipd-bill-summary__heading">
          <Box className="ipd-bill-summary__icon">
            <ReceiptLongOutlinedIcon />
          </Box>

          <Box>
            <Typography
              component="h2"
              id="ipd-bill-summary-title"
              className="ipd-bill-summary__title"
            >
              Bill Summary
            </Typography>

            <Typography className="ipd-bill-summary__subtitle">
              Review the inpatient billing breakdown
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="ipd-bill-summary__rows">
        {rows.map((row) => (
          <Box
            className={`ipd-bill-summary__row ${
              row.type ? `ipd-bill-summary__row--${row.type}` : ""
            }`}
            key={row.label}
          >
            <Typography className="ipd-bill-summary__label">
              {row.label}
            </Typography>

            <Typography className="ipd-bill-summary__value">
              {row.value < 0 ? "−" : ""}
              {formatCurrency(Math.abs(row.value))}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider className="ipd-bill-summary__divider" />

      <Box className="ipd-bill-summary__outstanding">
        <Box>
          <Typography className="ipd-bill-summary__outstanding-label">
            Outstanding Balance
          </Typography>

          <Typography className="ipd-bill-summary__outstanding-caption">
            Balance before this payment
          </Typography>
        </Box>

        <Typography className="ipd-bill-summary__outstanding-value">
          {formatCurrency(outstanding)}
        </Typography>
      </Box>

      {showPaymentAmount && (
        <>
          <Divider className="ipd-bill-summary__divider" />

          <Box className="ipd-bill-summary__payment">
            <Box className="ipd-bill-summary__payment-heading">
              <AccountBalanceWalletOutlinedIcon />

              <Typography className="ipd-bill-summary__payment-label">
                Current Payment
              </Typography>
            </Box>

            <Typography className="ipd-bill-summary__payment-value">
              {formatCurrency(currentPayment)}
            </Typography>
          </Box>

          <Box className="ipd-bill-summary__remaining">
            <Typography className="ipd-bill-summary__remaining-label">
              Balance After Payment
            </Typography>

            <Typography className="ipd-bill-summary__remaining-value">
              {formatCurrency(remainingAfterPayment)}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default BillSummary;
