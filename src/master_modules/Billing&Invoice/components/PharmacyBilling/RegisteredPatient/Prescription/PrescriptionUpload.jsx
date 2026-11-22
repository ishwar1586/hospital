import React, { useRef, useState } from "react";

import {
  CloudUploadOutlined,
  DescriptionOutlined,
  DeleteOutlineOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

import prescriptionUploadConfig from "@/master_modules/Billing&Invoice/config/prescriptionUpload.config";

const PrescriptionUpload = ({
  value = null,
  onChange,
}) => {
  const config = prescriptionUploadConfig;

  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] =
    useState(value);

  const [error, setError] = useState("");

  const fileConfig = config?.file || {};
  const dropzoneConfig =
    config?.dropzone || {};
  const buttonsConfig =
    config?.buttons || {};
  const statesConfig =
    config?.states || {};

  const allowedTypes = Array.isArray(
    fileConfig?.allowedTypes
  )
    ? fileConfig.allowedTypes
    : [];

  const maxFileSize =
    fileConfig?.maxFileSize || 0;

  const handleBrowse = () => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  };

  const validateFile = (file) => {
    if (!file) {
      return false;
    }

    if (
      allowedTypes.length > 0 &&
      !allowedTypes.includes(file.type)
    ) {
      setError(
        statesConfig?.invalidType?.message ||
          "Invalid file type."
      );

      return false;
    }

    if (
      maxFileSize > 0 &&
      file.size > maxFileSize
    ) {
      setError(
        statesConfig?.fileTooLarge?.message ||
          "File size is too large."
      );

      return false;
    }

    setError("");

    return true;
  };

  const handleFileChange = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    const isValid =
      validateFile(file);

    if (!isValid) {
      event.target.value = "";
      return;
    }

    setSelectedFile(file);

    if (typeof onChange === "function") {
      onChange(file);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (typeof onChange === "function") {
      onChange(null);
    }
  };

  const handlePreview = () => {
    if (
      !selectedFile ||
      config?.preview?.enabled !== true
    ) {
      return;
    }

    const fileUrl =
      URL.createObjectURL(
        selectedFile
      );

    window.open(
      fileUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const formatFileSize = (
    size = 0
  ) => {
    if (size < 1024) {
      return `${size} B`;
    }

    if (size < 1024 * 1024) {
      return `${(
        size / 1024
      ).toFixed(1)} KB`;
    }

    return `${(
      size /
      (1024 * 1024)
    ).toFixed(1)} MB`;
  };

  const isImage =
    selectedFile?.type?.startsWith(
      "image/"
    );

  const isPdf =
    selectedFile?.type ===
    "application/pdf";

  const FileIcon =
    isImage || isPdf
      ? DescriptionOutlined
      : DescriptionOutlined;

  return (
    <section className="prescription-upload">
      {/* Header */}

      <div className="prescription-upload__header">
        <div className="prescription-upload__header-icon">
          <CloudUploadOutlined />
        </div>

        <div className="prescription-upload__header-content">
          <h3 className="prescription-upload__title">
            {config?.title}
          </h3>

          {config?.subtitle && (
            <p className="prescription-upload__subtitle">
              {config.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Error */}

      {error && (
        <div className="prescription-upload__error">
          {error}
        </div>
      )}

      {/* Empty State */}

      {!selectedFile && (
        <div
          className="prescription-upload__dropzone"
          role="button"
          tabIndex={0}
          onClick={handleBrowse}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              handleBrowse();
            }
          }}
        >
          <div className="prescription-upload__dropzone-icon">
            <CloudUploadOutlined />
          </div>

          <div className="prescription-upload__dropzone-content">
            <h4 className="prescription-upload__dropzone-title">
              {dropzoneConfig?.title}
            </h4>

            <p className="prescription-upload__dropzone-text">
              {dropzoneConfig?.text}
            </p>

            <span className="prescription-upload__dropzone-info">
              {dropzoneConfig?.allowedText}
            </span>
          </div>

          {buttonsConfig?.browse
            ?.enabled && (
            <button
              type="button"
              className="prescription-upload__browse-button"
              onClick={(event) => {
                event.stopPropagation();
                handleBrowse();
              }}
            >
              <CloudUploadOutlined />

              <span>
                {
                  buttonsConfig
                    ?.browse?.label
                }
              </span>
            </button>
          )}
        </div>
      )}

      {/* Selected File */}

      {selectedFile && (
        <div className="prescription-upload__file">
          <div className="prescription-upload__file-icon">
            <FileIcon />
          </div>

          <div className="prescription-upload__file-info">
            <span className="prescription-upload__file-name">
              {selectedFile.name}
            </span>

            <span className="prescription-upload__file-size">
              {formatFileSize(
                selectedFile.size
              )}
            </span>
          </div>

          <div className="prescription-upload__file-actions">
            {buttonsConfig?.preview
              ?.enabled &&
              config?.preview
                ?.enabled && (
                <button
                  type="button"
                  className="prescription-upload__file-action"
                  aria-label={
                    buttonsConfig
                      ?.preview?.label
                  }
                  onClick={
                    handlePreview
                  }
                >
                  <VisibilityOutlined />
                </button>
              )}

            {buttonsConfig?.remove
              ?.enabled && (
              <button
                type="button"
                className="prescription-upload__file-action prescription-upload__file-action--danger"
                aria-label={
                  buttonsConfig
                    ?.remove?.label
                }
                onClick={
                  handleRemove
                }
              >
                <DeleteOutlineOutlined />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Native File Input */}

      <input
        ref={inputRef}
        type="file"
        hidden
        accept={Array.isArray(
          fileConfig?.allowedExtensions
        )
          ? fileConfig.allowedExtensions.join(
              ","
            )
          : ""}
        onChange={handleFileChange}
      />
    </section>
  );
};

export default PrescriptionUpload;