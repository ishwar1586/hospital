
import React, { useState } from "react";
import "./AddRoom.css";

import AddRoomHeader from "./components/AddRoomHeader/AddRoomHeader";
import RoomDetails from "./components/RoomDetails/RoomDetails";
import RoomAmenities from "./components/RoomAmenities/RoomAmenities";
import RoomRemarks from "./components/RoomRemarks/RoomRemarks";
import AddRoomFooter from "./components/AddRoomFooter/AddRoomFooter";

import { roomFormInitialMock } from "../../mock/addRoom/roomFormInitial.mock";
import { roomFormOptionsMock } from "../../mock/addRoom/roomFormOptions.mock";

const AddRoom = ({ onBack }) => {
  const [formData, setFormData] = useState({
    ...roomFormInitialMock,
    amenities: [...(roomFormInitialMock.amenities || [])],
  });

  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // =========================================
  // FORM FIELD CHANGE
  // =========================================

  const handleFieldChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previous) => ({
        ...previous,
        [field]: "",
      }));
    }
  };

  // =========================================
  // RESET FORM
  // =========================================

  const handleReset = () => {
    setFormData({
      ...roomFormInitialMock,
      amenities: [...(roomFormInitialMock.amenities || [])],
    });

    setErrors({});
  };

  // =========================================
  // CANCEL
  // =========================================

  const handleCancel = () => {
    onBack?.();
  };

  // =========================================
  // SAVE ROOM
  // =========================================

  const handleSave = () => {
    console.log("Room Form Data:", formData);
  };

  return (
    <main className="add-room-page">

      {/* PAGE HEADER */}
      <section className="add-room-page__header">
        <AddRoomHeader onBack={onBack} />
      </section>

      {/* ROOM DETAILS */}
      <section className="add-room-page__details">
        <RoomDetails
          formData={formData}
          options={roomFormOptionsMock}
          onChange={handleFieldChange}
          errors={errors}
        />
      </section>

      {/* ROOM AMENITIES */}
      <section className="add-room-page__amenities">
        <RoomAmenities
          selectedAmenities={formData.amenities}
          onChange={handleFieldChange}
        />
      </section>

      {/* ROOM REMARKS */}
      <section className="add-room-page__remarks">
        <RoomRemarks
          value={formData.remarks}
          onChange={handleFieldChange}
        />
      </section>

      {/* FORM FOOTER */}
      <section className="add-room-page__footer">
        <AddRoomFooter
          onCancel={handleCancel}
          onReset={handleReset}
          onSave={handleSave}
          isSaving={isSaving}
        />
      </section>

    </main>
  );
};

export default AddRoom;
