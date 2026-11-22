
import React from "react";
import "./RoomRemarks.css";

import { roomRemarksConfig } from "../../../../config/addRoom/roomRemarks.config";

const RoomRemarks = ({ value = "", onChange }) => {
  const { section, field } = roomRemarksConfig;
  const SectionIcon = section.icon;

  const currentLength = value.length;

  const handleChange = (event) => {
    const updatedValue = event.target.value.slice(
      0,
      field.maxLength
    );

    onChange(field.name, updatedValue);
  };

  return (
    <section className="add-room__section add-room__remarks">

      {/* SECTION HEADER */}
      <div className="add-room__section-header">
        <div className="add-room__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-room__section-title">
          {section.title}
        </h3>
      </div>

      {/* REMARKS FIELD */}
      <div className="add-room__remarks-content">
        <textarea
          id="room-remarks"
          className="add-room__remarks-textarea"
          name={field.name}
          value={value}
          placeholder={field.placeholder}
          rows={field.rows}
          maxLength={field.maxLength}
          onChange={handleChange}
        />

        {/* CHARACTER COUNTER */}
        <div className="add-room__remarks-counter">
          {currentLength} / {field.maxLength}
        </div>
      </div>

    </section>
  );
};

export default RoomRemarks;
