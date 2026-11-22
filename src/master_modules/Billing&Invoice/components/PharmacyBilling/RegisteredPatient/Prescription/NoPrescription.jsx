import React from "react";
import { DoNotDisturbOutlined } from "@mui/icons-material";

const NoPrescription = ({
  title = "No Prescription",
  message = "Continue without a prescription.",
}) => {
  return (
    <section className="prescription-no-prescription">

      <div className="prescription-no-prescription__icon">
        <DoNotDisturbOutlined />
      </div>

      <div className="prescription-no-prescription__content">

        <h3 className="prescription-no-prescription__title">
          {title}
        </h3>

        <p className="prescription-no-prescription__message">
          {message}
        </p>

      </div>

    </section>
  );
};

export default NoPrescription;