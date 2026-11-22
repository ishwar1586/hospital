
import React from "react";
import {
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";

import "./StaffFormFooter.css";

const StaffFormFooter = ({
  currentStep = 1,
  totalSteps = 5,
  onBack,
  onNext,
  onSubmit,
  loading = false,
  nextLabel = "Next",
  submitLabel = "Submit",
  disableNext = false,
  disableSubmit = false,
  showBack = true,
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  const handlePrimaryAction = () => {
    if (loading) return;

    if (isLastStep) {
      onSubmit?.();
    } else {
      onNext?.();
    }
  };

  return (
    <Box className="staff-form-footer">
      <div className="staff-form-footer__left">
        {showBack && (
          <Button
            type="button"
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            disabled={isFirstStep || loading}
            className="staff-form-footer__back"
          >
            Back
          </Button>
        )}
      </div>

      <div className="staff-form-footer__right">
        <Button
          type="button"
          variant="contained"
          endIcon={
            loading ? (
              <CircularProgress
                size={14}
                color="inherit"
              />
            ) : isLastStep ? (
              <CheckIcon />
            ) : (
              <ArrowForwardIcon />
            )
          }
          onClick={handlePrimaryAction}
          disabled={
            loading ||
            (isLastStep ? disableSubmit : disableNext)
          }
          className={[
            "staff-form-footer__primary",
            isLastStep && "staff-form-footer__submit",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {loading
            ? "Please wait..."
            : isLastStep
              ? submitLabel
              : nextLabel}
        </Button>
      </div>
    </Box>
  );
};

export default StaffFormFooter;
