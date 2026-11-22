
import React from "react";
import {
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import "./StaffFormField.css";

const StaffFormField = ({
  name,
  label,
  type = "text",
  value = "",
  onChange,
  onBlur,
  options = [],
  placeholder,
  required = false,
  disabled = false,
  error = "",
  helperText = "",
  icon: Icon,
  multiline = false,
  rows = 3,
  fullWidth = true,
  readOnly = false,
  autoComplete,
  inputProps = {},
  select = false,
  checked,
  onCheckedChange,
  showPasswordToggle = false,
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  if (type === "checkbox") {
    return (
      <div className="staff-form-field staff-form-field--checkbox">
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={Boolean(checked ?? value)}
              onChange={(event) =>
                onCheckedChange
                  ? onCheckedChange(event.target.checked)
                  : onChange?.(event)
              }
              disabled={disabled}
              color="primary"
            />
          }
          label={label}
        />

        {error && (
          <p className="staff-form-field__error">{error}</p>
        )}
      </div>
    );
  }

  const isSelect = select || type === "select";
  const isPassword = type === "password";
  const resolvedType =
    isPassword && showPasswordToggle
      ? passwordVisible
        ? "text"
        : "password"
      : type;

  const endAdornment = (
    <>
      {Icon && (
        <InputAdornment position="end">
          <Icon fontSize="small" />
        </InputAdornment>
      )}

      {isPassword && showPasswordToggle && (
        <InputAdornment position="end">
          <IconButton
            edge="end"
            size="small"
            aria-label={
              passwordVisible ? "Hide password" : "Show password"
            }
            onClick={() =>
              setPasswordVisible((previous) => !previous)
            }
            disabled={disabled}
          >
            {passwordVisible ? (
              <VisibilityOffOutlinedIcon fontSize="small" />
            ) : (
              <VisibilityOutlinedIcon fontSize="small" />
            )}
          </IconButton>
        </InputAdornment>
      )}
    </>
  );

  return (
    <div className="staff-form-field">
      <TextField
        name={name}
        label={label}
        type={resolvedType}
        value={value ?? ""}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        error={Boolean(error)}
        helperText={error || helperText}
        fullWidth={fullWidth}
        select={isSelect}
        multiline={multiline || type === "textarea"}
        rows={multiline || type === "textarea" ? rows : undefined}
        autoComplete={autoComplete}
        variant="outlined"
        size="medium"
        InputLabelProps={
          type === "date" ? { shrink: true } : undefined
        }
        InputProps={{
          readOnly,
          endAdornment:
            Icon || (isPassword && showPasswordToggle)
              ? endAdornment
              : undefined,
        }}
        inputProps={{
          ...inputProps,
          ...(type === "number" ? { min: 0 } : {}),
        }}
        className="staff-form-field__input"
      >
        {isSelect &&
          options.map((option) => {
            const optionValue =
              typeof option === "object" ? option.value : option;
            const optionLabel =
              typeof option === "object" ? option.label : option;

            return (
              <MenuItem key={optionValue} value={optionValue}>
                {optionLabel}
              </MenuItem>
            );
          })}
      </TextField>
    </div>
  );
};

export default StaffFormField;
