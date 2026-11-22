import React from "react";

const RadiologyModalityBadge = ({ modality }) => {
  const value = String(modality ?? "").trim();
  const normalized = value.toLowerCase();

  const modalityClassMap = {
    "x-ray": "xray",
    xray: "xray",
    "ct scan": "ct",
    ct: "ct",
    mri: "mri",
    ultrasound: "ultrasound",
    mammography: "mammography",
  };

  const modalityClass = modalityClassMap[normalized] ?? "default";

  return (
    <span
      className={`radiology-table__modality radiology-table__modality--${modalityClass}`}
    >
      {value || "—"}
    </span>
  );
};

export default RadiologyModalityBadge;