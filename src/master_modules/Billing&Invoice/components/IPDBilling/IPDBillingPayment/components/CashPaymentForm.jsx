
import React, { useMemo } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import "./CashPaymentForm.css";
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(amount) ? amount : 0);
};

const CashPaymentForm = ({
  amountReceived = "",
  onAmountChange,
  balanceDue = 0,
  disabled = false,
}) => {
  const amount = Number(amountReceived);
  const safeAmount =
    amountReceived !== "" && Number.isFinite(amount) && amount >= 0
      ? amount
      : 0;

  const safeBalance = Math.max(0, Number(balanceDue) || 0);

  const changeToReturn = useMemo(() => {
    return Math.max(0, safeAmount - safeBalance);
  }, [safeAmount, safeBalance]);

  const handleAmountChange = (event) => {
    const nextValue = event.target.value;

    // Allow an empty field while the user is typing.
    if (nextValue === "") {
      onAmountChange?.("");
      return;
    }

    // Accept non-negative numbers with up to two decimal places.
    if (/^\d*\.?\d{0,2}$/.test(nextValue)) {
      onAmountChange?.(nextValue);
    }
  };

  return (
    <Box
      component="section"
      className="ipd-cash-payment"
      aria-labelledby="ipd-cash-payment-title"
    >
      <Box className="ipd-cash-payment__header">
        <Box className="ipd-cash-payment__icon">
          <PaymentsOutlinedIcon />
        </Box>

        <Box>
          <Typography
            component="h2"
            id="ipd-cash-payment-title"
            className="ipd-cash-payment__title"
          >
            Cash Payment
          </Typography>

          <Typography className="ipd-cash-payment__subtitle">
            Enter the amount received from the customer.
          </Typography>
        </Box>
      </Box>

      <Box className="ipd-cash-payment__fields">
        <Box className="ipd-cash-payment__field">
          <Typography
            component="label"
            htmlFor="ipd-cash-amount"
            className="ipd-cash-payment__label"
          >
            Amount Received <span>*</span>
          </Typography>

          <TextField
            id="ipd-cash-amount"
            fullWidth
            type="number"
            value={amountReceived}
            onChange={handleAmountChange}
            placeholder="Enter amount received"
            disabled={disabled}
            required
            inputProps={{
              min: 0,
              step: "0.01",
              "aria-label": "Amount received in cash",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  ₹
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className="ipd-cash-payment__field">
          <Typography
            component="label"
            htmlFor="ipd-cash-change"
            className="ipd-cash-payment__label"
          >
            Change to Return
          </Typography>

          <TextField
            id="ipd-cash-change"
            fullWidth
            value={formatCurrency(changeToReturn)}
            disabled
            InputProps={{
              readOnly: true,
            }}
            inputProps={{
              "aria-label": "Change to return",
            }}
          />
        </Box>
      </Box>

      {safeAmount > 0 && safeAmount < safeBalance && (
        <Typography className="ipd-cash-payment__helper">
          Remaining after this payment:{" "}
          {formatCurrency(safeBalance - safeAmount)}
        </Typography>
      )}

      {safeAmount > safeBalance && (
        <Typography
          role="status"
          className="ipd-cash-payment__change-note"
        >
          Extra cash: {formatCurrency(changeToReturn)} will be returned.
        </Typography>
      )}
    </Box>
  );
};

export default CashPaymentForm;