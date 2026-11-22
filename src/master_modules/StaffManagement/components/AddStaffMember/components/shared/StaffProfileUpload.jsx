
import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import "./StaffProfileUpload.css";

const DEFAULT_MAX_SIZE_MB = 5;

const StaffProfileUpload = ({
  value = null,
  onChange,
  label = "Profile Photo",
  accept = "image/jpeg,image/png,image/webp",
  maxSizeMB = DEFAULT_MAX_SIZE_MB,
  disabled = false,
  error = "",
}) => {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [localError, setLocalError] = useState("");

  const previewUrl =
    value instanceof File
      ? undefined
      : typeof value === "string"
        ? value
        : value?.preview || "";

  const [filePreview, setFilePreview] = useState("");

  const displayedPreview =
    value instanceof File ? filePreview : previewUrl;

  const handleFile = (file) => {
    if (!file || disabled) return;

    setLocalError("");

    if (!file.type.startsWith("image/")) {
      setLocalError("Please select a valid image file.");
      return;
    }

    const allowedTypes = accept
      .split(",")
      .map((type) => type.trim());

    if (!allowedTypes.includes(file.type)) {
      setLocalError("Please select a JPG, PNG or WebP image.");
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setLocalError(`Image size must not exceed ${maxSizeMB} MB.`);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const result =
        typeof reader.result === "string" ? reader.result : "";

      setFilePreview(result);
      onChange?.(file);
    };

    reader.onerror = () => {
      setLocalError("Unable to read this image. Please try another.");
    };

    reader.readAsDataURL(file);
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];

    handleFile(file);

    // Allows selecting the same file again.
    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files?.[0];
    handleFile(file);
  };

  const handleRemove = () => {
    setFilePreview("");
    setLocalError("");
    onChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <Box className="staff-profile-upload">
      <Typography
        component="label"
        className="staff-profile-upload__label"
      >
        {label}
      </Typography>

      <Box
        className={[
          "staff-profile-upload__dropzone",
          dragging && "staff-profile-upload__dropzone--dragging",
          disabled && "staff-profile-upload__dropzone--disabled",
          (error || localError) && "staff-profile-upload__dropzone--error",
        ]
          .filter(Boolean)
          .join(" ")}
        onDragEnter={(event) => {
          event.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          if (!disabled) setDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();

          if (!event.currentTarget.contains(event.relatedTarget)) {
            setDragging(false);
          }
        }}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          disabled={disabled}
          className="staff-profile-upload__input"
          aria-label="Choose profile photo"
        />

        {displayedPreview ? (
          <Box className="staff-profile-upload__preview">
            <Avatar
              src={displayedPreview}
              alt="Staff profile preview"
              className="staff-profile-upload__avatar"
            >
              <PersonOutlineOutlinedIcon />
            </Avatar>

            <Box className="staff-profile-upload__file-info">
              <Typography className="staff-profile-upload__file-name">
                {value instanceof File ? value.name : "Profile photo"}
              </Typography>

              <Typography className="staff-profile-upload__hint">
                Image selected
              </Typography>
            </Box>

            <IconButton
              type="button"
              aria-label="Remove profile photo"
              onClick={handleRemove}
              disabled={disabled}
              className="staff-profile-upload__remove"
            >
              <CloseOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <Box className="staff-profile-upload__content">
            <CloudUploadOutlinedIcon className="staff-profile-upload__icon" />

            <Box className="staff-profile-upload__text">
              <Typography className="staff-profile-upload__prompt">
                <button
                  type="button"
                  className="staff-profile-upload__browse"
                  disabled={disabled}
                  onClick={() => inputRef.current?.click()}
                >
                  Choose file
                </button>
                <span> or drag and drop file here</span>
              </Typography>

              <Typography className="staff-profile-upload__hint">
                JPG, PNG or WebP · Maximum {maxSizeMB} MB
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      {(error || localError) && (
        <Typography
          role="alert"
          className="staff-profile-upload__error"
        >
          {error || localError}
        </Typography>
      )}
    </Box>
  );
};

export default StaffProfileUpload;
