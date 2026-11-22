
import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import "./UpiPaymentForm.css";
const UpiPaymentForm = ({
  transactionReference = "",
  onTransactionReferenceChange,
  remarks = "",
  onRemarksChange,
  disabled = false,
}) => {
  return (
    <Box
      component="section"
      className="ipd-upi-payment"
      aria-labelledby="ipd-upi-payment-title"
    >
      <Box className="ipd-upi-payment__header">
        <Box className="ipd-upi-payment__icon">
          <PhoneAndroidOutlinedIcon />
        </Box>

        <Box>
          <Typography
            component="h2"
            id="ipd-upi-payment-title"
            className="ipd-upi-payment__title"
          >
            UPI Payment
          </Typography>

          <Typography className="ipd-upi-payment__subtitle">
            Record the UPI transaction details after payment verification.
          </Typography>
        </Box>
      </Box>

      <Box className="ipd-upi-payment__fields">
        <Box className="ipd-upi-payment__field">
          <Typography
            component="label"
            htmlFor="ipd-upi-reference"
            className="ipd-upi-payment__label"
          >
            UPI Transaction ID / Reference Number <span>*</span>
          </Typography>

          <TextField
            id="ipd-upi-reference"
            fullWidth
            value={transactionReference}
            onChange={(event) =>
              onTransactionReferenceChange?.(event.target.value)
            }
            placeholder="Enter UPI transaction reference"
            disabled={disabled}
            required
            inputProps={{
              maxLength: 100,
              "aria-label": "UPI transaction reference",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NumbersOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <Typography className="ipd-upi-payment__hint">
            Enter the reference from the verified transaction receipt.
          </Typography>
        </Box>

        <Box className="ipd-upi-payment__field">
          <Typography
            component="label"
            htmlFor="ipd-upi-remarks"
            className="ipd-upi-payment__label"
          >
            Remarks (Optional)
          </Typography>

          <TextField
            id="ipd-upi-remarks"
            fullWidth
            multiline
            minRows={2}
            value={remarks}
            onChange={(event) =>
              onRemarksChange?.(event.target.value)
            }
            placeholder="Add payment remarks if required"
            disabled={disabled}
            inputProps={{
              maxLength: 300,
              "aria-label": "UPI payment remarks",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{ alignSelf: "flex-start", mt: 1.5 }}
                >
                  <NotesOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UpiPaymentForm;
