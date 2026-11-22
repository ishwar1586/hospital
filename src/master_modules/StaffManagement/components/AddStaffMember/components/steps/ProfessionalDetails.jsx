
import React from "react";
import StaffFormField from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormField.jsx";
import { staffFormConfig } from "@/master_modules/StaffManagement/config/staffForm.config";
import "./ProfessionalDetails.css";

const ProfessionalDetails = ({
  formData = {},
  errors = {},
  onChange,
  onBlur,
  departments = [],
  designations = [],
}) => {
  const fields = staffFormConfig.fields.professionalDetails || [];

  const optionSources = {
    departments,
    designations,
  };

  return (
    <section className="staff-professional-step">
      <div className="staff-professional-heading">
        <h2>Professional Details</h2>
        <p>
          Manage employee identification, department and employment details.
        </p>
      </div>

      <div className="staff-professional-section">
        <h3>Employment Information</h3>

        <div className="staff-professional-grid">
          {fields.map((field) => {
            const options = field.optionsSource
              ? optionSources[field.optionsSource] || []
              : field.options || [];

            return (
              <div
                className="staff-professional-field"
                key={field.name}
              >
                <StaffFormField
                  {...field}
                  options={options}
                  value={formData[field.name] ?? ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={Boolean(errors[field.name])}
                  helperText={errors[field.name] || ""}
                  fullWidth
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDetails;
