import React from "react";

import {
  PersonOutlined,
  LocalHospitalOutlined,
  CalendarTodayOutlined,
} from "@mui/icons-material";

const PrescriptionCard = ({
  patient = null,
  config = {},
}) => {
  if (!patient) {
    return null;
  }

  const items = Array.isArray(config?.items)
    ? config.items
    : [];

  const icons = {
    patient: PersonOutlined,
    uhid: LocalHospitalOutlined,
    "prescription-date": CalendarTodayOutlined,
  };

  const getNestedValue = (object, path) => {
    if (!object || !path) {
      return undefined;
    }

    return path
      .split(".")
      .reduce(
        (value, key) => value?.[key],
        object
      );
  };

  const getValue = (item) => {
    const value = getNestedValue(
      patient,
      item?.field
    );

    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return item?.fallback || "-";
    }

    return value;
  };

  return (
    <div className="opd-prescription__meta">

      {items.map((item) => {
        const Icon =
          item?.icon ||
          icons[item?.id];

        return (
          <div
            key={item.id}
            className="opd-prescription__meta-item"
          >

            <div className="opd-prescription__meta-icon">
              {Icon && <Icon />}
            </div>

            <div className="opd-prescription__meta-content">

              <span className="opd-prescription__meta-label">
                {item.label}
              </span>

              <span className="opd-prescription__meta-value">
                {getValue(item)}
              </span>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default PrescriptionCard;