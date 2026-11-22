
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

// import "./reusableForm.css";
import "@/master_modules/MasterFormTwo/MasterForm.css";

const ReusableForm = ({
  config,
  formData,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleCancel,
}) => {

  const getField = (name) => {
    return config.fields.find(
      (field) => field.name === name
    );
  };

  return (
    <Box className="reusable-form-container">

      {/* TITLE */}

      {config.title && (
        <Typography className="reusable-form-title">
          {config.title}
        </Typography>
      )}

      {/* ROWS */}

      {config.rows?.map((row, index) => (

        <Box
          key={index}
          className={`reusable-form-grid row-${row.length}`}
        >

          {row.map((fieldName) => {

            const field = getField(fieldName);

            return (
              <Box
                key={field.name}
                className="reusable-field-wrapper"
              >

                {field.type === "select" ? (
                  <TextField
                    fullWidth
                    select
                    variant="outlined"
                    label={`${field.label}${
                      field.required ? "*" : ""
                    }`}
                    name={field.name}
                    value={
                      formData[field.name] || ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors[field.name]}
                    helperText={
                      errors[field.name]
                    }
                    className="reusable-form-input"
                  >
                    {field.options?.map(
                      (option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                ) : (
                  <TextField
                    fullWidth
                    type={field.type}
                    variant="outlined"
                    label={`${field.label}${
                      field.required ? "*" : ""
                    }`}
                    name={field.name}
                    value={
                      formData[field.name] || ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors[field.name]}
                    helperText={
                      errors[field.name]
                    }
                    className="reusable-form-input"
                    InputLabelProps={
                      field.type === "date"
                        ? { shrink: true }
                        : {}
                    }
                  />
                )}

              </Box>
            );
          })}

        </Box>

      ))}

      {/* BUTTONS */}

      {config.buttons && (
        <Box className="reusable-form-button-group">

          {config.buttons.map((button) => (
            <Button
              key={button.label}
              variant={button.variant || "contained"}
              className={button.className}
              onClick={
                button.type === "submit"
                  ? handleSubmit
                  : handleCancel
              }
            >
              {button.label}
            </Button>
          ))}

        </Box>
      )}

    </Box>
  );
};

export default ReusableForm;