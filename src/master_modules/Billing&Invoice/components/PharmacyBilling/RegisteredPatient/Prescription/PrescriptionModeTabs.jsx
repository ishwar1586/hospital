import React from "react";

import {
  DescriptionOutlined,
  CloudUploadOutlined,
  DoNotDisturbOutlined,
} from "@mui/icons-material";

import PrescriptionModeTab from "./PrescriptionModeTab";

const PrescriptionModeTabs = ({
  activeMode = "opd",
  onModeChange,
}) => {
  /*
   * ---------------------------------------------------------
   * PRESCRIPTION MODES
   * ---------------------------------------------------------
   */

  const modes = [
    {
      id: "opd",
      label: "OPD Prescription",
      icon: DescriptionOutlined,
    },
    {
      id: "upload",
      label: "Upload Prescription",
      icon: CloudUploadOutlined,
    },
    {
      id: "none",
      label: "No Prescription",
      icon: DoNotDisturbOutlined,
    },
  ];

  /*
   * ---------------------------------------------------------
   * MODE CHANGE
   * ---------------------------------------------------------
   */

  const handleModeChange = (mode) => {
    if (!mode?.id) {
      return;
    }

    if (typeof onModeChange === "function") {
      onModeChange(mode.id);
    }
  };

  /*
   * ---------------------------------------------------------
   * RENDER
   * ---------------------------------------------------------
   */

  return (
    <div className="prescription-mode-tabs">

      <div
        className="prescription-mode-tabs__list"
        role="tablist"
        aria-label="Prescription mode"
      >

        {modes.map((mode) => (
          <PrescriptionModeTab
            key={mode.id}
            mode={mode}
            active={activeMode === mode.id}
            onClick={handleModeChange}
          />
        ))}

      </div>

    </div>
  );
};

export default PrescriptionModeTabs;