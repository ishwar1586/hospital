
import React, { useState } from "react";
import "./AddDepartment.css";

import AddDepartmentHeader from "./components/AddDepartmentHeader/AddDepartmentHeader";
import DepartmentDetails from "./components/DepartmentDetails/DepartmentDetails";
import DepartmentHead from "./components/DepartmentHead/DepartmentHead";
import DepartmentConfiguration from "./components/DepartmentConfiguration/DepartmentConfiguration";
import DepartmentServices from "./components/DepartmentServices/DepartmentServices";
import AddDepartmentFooter from "./components/AddDepartmentFooter/AddDepartmentFooter";

import { departmentInitialMock } from "../../mock/addDepartment/departmentInitial.mock";
import { departmentFormOptions } from "../../mock/addDepartment/departmentFormOptions.mock";
import { departmentServicesMock } from "../../mock/addDepartment/departmentServices.mock";

const createInitialFormData = () => ({
  ...departmentInitialMock,
  services: [...(departmentInitialMock.services || [])],
  specialties: [...(departmentInitialMock.specialties || [])],
});

const AddDepartment = ({
  onBack,
  onSaveDepartment,
  isSaving = false,
}) => {
  const [formData, setFormData] = useState(createInitialFormData);
  const [errors, setErrors] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormData((previous) => ({
      ...previous,
      [fieldName]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [fieldName]: "",
    }));
  };

  const handleReset = () => {
    setFormData(createInitialFormData());
    setErrors({});
  };

  const handleSave = () => {
    onSaveDepartment?.(formData);
  };

  return (
    <main className="add-department">
      {/* Add Department Header */}
      <section className="add-department__header">
        <AddDepartmentHeader onBack={onBack} />
      </section>

      {/* Department Form Content */}
      <section className="add-department__content">
        <DepartmentDetails
          formData={formData}
          onChange={handleFieldChange}
          departmentTypes={departmentFormOptions.departmentTypes}
          errors={errors}
        >
          <DepartmentHead
            formData={formData}
            onChange={handleFieldChange}
            doctors={departmentFormOptions.doctors}
            errors={errors}
          />
        </DepartmentDetails>

        <DepartmentConfiguration
          formData={formData}
          onChange={handleFieldChange}
        />

        <DepartmentServices
          formData={formData}
          onChange={handleFieldChange}
          services={departmentServicesMock.services}
          specialties={departmentServicesMock.specialties}
        />
      </section>

      {/* Form Footer */}
      <section className="add-department__footer">
        <AddDepartmentFooter
          onCancel={onBack}
          onReset={handleReset}
          onSave={handleSave}
          isSaving={isSaving}
        />
      </section>
    </main>
  );
};

export default AddDepartment;
