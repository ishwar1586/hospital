
import React from "react";
import "./RoomAmenities.css";

import { roomAmenitiesConfig } from "../../../../config/addRoom/roomAmenities.config";
import { roomAmenitiesMock } from "../../../../mock/addRoom/roomAmenities.mock";

const RoomAmenities = ({ selectedAmenities = [], onChange }) => {
  const { section } = roomAmenitiesConfig;
  const SectionIcon = section.icon;

  const handleAmenityChange = (amenityId, checked) => {
    const updatedAmenities = checked
      ? [...selectedAmenities, amenityId]
      : selectedAmenities.filter((id) => id !== amenityId);

    onChange("amenities", updatedAmenities);
  };

  return (
    <section className="add-room__section add-room__amenities">

      {/* SECTION HEADER */}
      <div className="add-room__section-header">
        <div className="add-room__section-icon">
          <SectionIcon />
        </div>

        <h3 className="add-room__section-title">
          {section.title}
        </h3>
      </div>

      {/* AMENITIES CHECKBOXES */}
      <div className="add-room__amenities-grid">
        {roomAmenitiesMock.map((amenity) => {
          const isChecked = selectedAmenities.includes(amenity.id);

          return (
            <label
              className="add-room__amenity-item"
              key={amenity.id}
            >
              <input
                type="checkbox"
                className="add-room__amenity-checkbox"
                checked={isChecked}
                onChange={(event) =>
                  handleAmenityChange(
                    amenity.id,
                    event.target.checked
                  )
                }
              />

              <span className="add-room__amenity-label">
                {amenity.label}
              </span>
            </label>
          );
        })}
      </div>

    </section>
  );
};

export default RoomAmenities;
