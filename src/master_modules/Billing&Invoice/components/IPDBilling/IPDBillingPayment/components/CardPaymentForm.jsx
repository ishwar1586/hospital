
import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import "./CardPaymentForm.css";
const CARD_TYPES = [
  { value: "debit", label: "Debit Card" },
  { value: "credit", label: "Credit Card" },
];

const CardPaymentForm = ({
  cardType = "debit",
  onCardTypeChange,
  transactionReference = "",
  onTransactionReferenceChange,
  remarks = "",
  onRemarksChange,
  disabled = false,
}) => {
  return (
    <Box
      component="section"
      className="ipd-card-payment"
      aria-labelledby="ipd-card-payment-title"
    >
      <Box className="ipd-card-payment__header">
        <Box className="ipd-card-payment__icon">
          <CreditCardOutlinedIcon />
        </Box>

        <Box>
          <Typography
            component="h2"
            id="ipd-card-payment-title"
            className="ipd-card-payment__title"
          >
            Card Payment
          </Typography>

          <Typography className="ipd-card-payment__subtitle">
            Record the card transaction details.
          </Typography>
        </Box>
      </Box>

      <Box className="ipd-card-payment__fields">
        <Box className="ipd-card-payment__field">
          <Typography
            component="label"
            htmlFor="ipd-card-type"
            className="ipd-card-payment__label"
          >
            Card Type <span>*</span>
          </Typography>

          <TextField
            id="ipd-card-type"
            select
            fullWidth
            value={cardType}
            onChange={(event) =>
              onCardTypeChange?.(event.target.value)
            }
            disabled={disabled}
            required
          >
            {CARD_TYPES.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box className="ipd-card-payment__field">
          <Typography
            component="label"
            htmlFor="ipd-card-reference"
            className="ipd-card-payment__label"
          >
            Transaction Reference / RRN <span>*</span>
          </Typography>

          <TextField
            id="ipd-card-reference"
            fullWidth
            value={transactionReference}
            onChange={(event) =>
              onTransactionReferenceChange?.(event.target.value)
            }
            placeholder="Enter verified transaction reference"
            disabled={disabled}
            required
            inputProps={{
              maxLength: 100,
              "aria-label": "Card transaction reference",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NumbersOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className="ipd-card-payment__field ipd-card-payment__field--full">
          <Typography
            component="label"
            htmlFor="ipd-card-remarks"
            className="ipd-card-payment__label"
          >
            Remarks (Optional)
          </Typography>

          <TextField
            id="ipd-card-remarks"
            fullWidth
            multiline
            minRows={2}
            value={remarks}
            onChange={(event) =>
              onRemarksChange?.(event.target.value)
            }
            placeholder="Add card payment remarks"
            disabled={disabled}
            inputProps={{ maxLength: 300 }}
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

      <Typography className="ipd-card-payment__hint">
        Record a reference only after confirming the transaction
        through the authorized payment terminal or gateway.
      </Typography>
    </Box>
  );
};

export default CardPaymentForm;
