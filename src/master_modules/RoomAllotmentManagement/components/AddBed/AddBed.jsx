
import React, { useState } from "react";
import "./AddBed.css";

import AddBedHeader from "./components/AddBedHeader/AddBedHeader";
import BedDetails from "./components/BedDetails/BedDetails";
import AdditionalInformation from "./components/AdditionalInformation/AdditionalInformation";
import BedRemarks from "./components/BedRemarks/BedRemarks";
import AddBedFooter from "./components/AddBedFooter/AddBedFooter";

import { bedFormInitialMock } from "../../mock/addBed/bedFormInitial.mock";
import { bedFormOptionsMock } from "../../mock/addBed/bedFormOptions.mock";
import { bedValidationConfig } from "../../config/addBed/bedValidation.config";


const createInitialFormData = () => ({
  ...bedFormInitialMock,
  additionalFacilities: [
    ...(bedFormInitialMock.additionalFacilities || []),
  ],
});

const AddBed = ({ onBack, onSave }) => {
  const [formData, setFormData] = useState(createInitialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
      ...(field === "wardId" ? { roomId: "" } : {}),
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
      ...(field === "wardId" ? { roomId: "" } : {}),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    bedValidationConfig.requiredFields.forEach((field) => {
      const value = formData[field.name];

      if (value === undefined || value === null || String(value).trim() === "") {
        newErrors[field.name] = field.message;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleReset = () => {
    setFormData(createInitialFormData());
    setErrors({});
  };

  const handleSubmit = () => {
    if (isSubmitting) return;

    const isValid = validateForm();

    if (!isValid) return;

    setIsSubmitting(true);

    try {
      onSave?.({ ...formData });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="add-bed-page">
      <section className="add-bed-page__header">
        <AddBedHeader onBack={onBack} />
      </section>

      <section className="add-bed-page__details">
        <BedDetails
          formData={formData}
          options={bedFormOptionsMock}
          onChange={handleFieldChange}
          errors={errors}
        />
      </section>

      <section className="add-bed-page__additional-information">
        <AdditionalInformation
          formData={formData}
          options={bedFormOptionsMock}
          onChange={handleFieldChange}
        />
      </section>

      <section className="add-bed-page__remarks">
        <BedRemarks
          formData={formData}
          onChange={handleFieldChange}
        />
      </section>

      <section className="add-bed-page__footer">
        <AddBedFooter
          onCancel={onBack}
          onReset={handleReset}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </section>
    </main>
  );
};

export default AddBed;