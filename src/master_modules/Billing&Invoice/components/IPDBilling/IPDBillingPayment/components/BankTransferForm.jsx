
import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import "./BankTransferForm.css";
const TRANSFER_MODES = [
  { value: "neft", label: "NEFT" },
  { value: "rtgs", label: "RTGS" },
  { value: "imps", label: "IMPS" },
  { value: "net-banking", label: "Net Banking" },
];

const BankTransferForm = ({
  transferMode = "neft",
  onTransferModeChange,
  transactionReference = "",
  onTransactionReferenceChange,
  remarks = "",
  onRemarksChange,
  disabled = false,
}) => {
  return (
    <Box
      component="section"
      className="ipd-bank-transfer"
      aria-labelledby="ipd-bank-transfer-title"
    >
      <Box className="ipd-bank-transfer__header">
        <Box className="ipd-bank-transfer__icon">
          <AccountBalanceOutlinedIcon />
        </Box>

        <Box>
          <Typography
            component="h2"
            id="ipd-bank-transfer-title"
            className="ipd-bank-transfer__title"
          >
            Bank Transfer
          </Typography>

          <Typography className="ipd-bank-transfer__subtitle">
            Record the bank transfer details for this IPD bill.
          </Typography>
        </Box>
      </Box>

      <Box className="ipd-bank-transfer__fields">
        <Box className="ipd-bank-transfer__field">
          <Typography
            component="label"
            htmlFor="ipd-transfer-mode"
            className="ipd-bank-transfer__label"
          >
            Transfer Mode <span>*</span>
          </Typography>

          <TextField
            id="ipd-transfer-mode"
            select
            fullWidth
            value={transferMode}
            onChange={(event) =>
              onTransferModeChange?.(event.target.value)
            }
            disabled={disabled}
            required
          >
            {TRANSFER_MODES.map((mode) => (
              <MenuItem key={mode.value} value={mode.value}>
                {mode.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box className="ipd-bank-transfer__field">
          <Typography
            component="label"
            htmlFor="ipd-transfer-reference"
            className="ipd-bank-transfer__label"
          >
            UTR / Transaction Reference <span>*</span>
          </Typography>

          <TextField
            id="ipd-transfer-reference"
            fullWidth
            value={transactionReference}
            onChange={(event) =>
              onTransactionReferenceChange?.(event.target.value)
            }
            placeholder="Enter bank transaction reference"
            disabled={disabled}
            required
            inputProps={{
              maxLength: 100,
              "aria-label": "Bank transfer transaction reference",
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

        <Box className="ipd-bank-transfer__field ipd-bank-transfer__field--full">
          <Typography
            component="label"
            htmlFor="ipd-transfer-remarks"
            className="ipd-bank-transfer__label"
          >
            Remarks (Optional)
          </Typography>

          <TextField
            id="ipd-transfer-remarks"
            fullWidth
            multiline
            minRows={2}
            value={remarks}
            onChange={(event) =>
              onRemarksChange?.(event.target.value)
            }
            placeholder="Add transfer remarks if required"
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

      <Typography className="ipd-bank-transfer__hint">
        Record the transaction reference after verifying the transfer
        through the hospital's authorized banking or payment system.
      </Typography>
    </Box>
  );
};

export default BankTransferForm;
