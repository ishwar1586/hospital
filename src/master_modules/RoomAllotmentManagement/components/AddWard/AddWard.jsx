
import React, { useState } from "react";
import "./AddWard.css";

import AddWardHeader from "./components/AddWardHeader/AddWardHeader";
import WardDetails from "./components/WardDetails/WardDetails";
import AdditionalInformation from "./components/AdditionalInformation/AdditionalInformation";
import AddWardFooter from "./components/AddWardFooter/AddWardFooter";

import { wardFormInitialMock } from "../../mock/addWard/wardFormInitial.mock";
import { wardFormOptionsMock } from "../../mock/addWard/wardFormOptions.mock";

const AddWard = ({ onBack }) => {
  const [formData, setFormData] = useState({
    ...wardFormInitialMock,
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
    setFormData({ ...wardFormInitialMock });
    setErrors({});
  };

  // =========================================
  // CANCEL
  // =========================================

  const handleCancel = () => {
    onBack?.();
  };

  // =========================================
  // SAVE WARD
  // =========================================

  const handleSave = () => {
    console.log("Ward Form Data:", formData);
  };

  return (
    <main className="add-ward-page">

      {/* PAGE HEADER */}
      <section className="add-ward-page__header">
        <AddWardHeader onBack={onBack} />
      </section>

      {/* WARD DETAILS */}
      <section className="add-ward-page__details">
        <WardDetails
          formData={formData}
          options={wardFormOptionsMock}
          onChange={handleFieldChange}
          errors={errors}
        />
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="add-ward-page__additional-info">
        <AdditionalInformation
          formData={formData}
          onChange={handleFieldChange}
        />
      </section>

      {/* FORM FOOTER */}
      <section className="add-ward-page__footer">
        <AddWardFooter
          onCancel={handleCancel}
          onReset={handleReset}
          onSave={handleSave}
          isSaving={isSaving}
        />
      </section>

    </main>
  );
};

export default AddWard;
