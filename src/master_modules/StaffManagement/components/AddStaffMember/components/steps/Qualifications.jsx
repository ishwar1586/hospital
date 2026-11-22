
import React from "react";
import StaffFormField from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormField";
import { staffFormConfig } from "@/master_modules/StaffManagement/config/staffForm.config";
import "./Qualifications.css";

const Qualifications = ({
  formData = {},
  errors = {},
  onChange,
  onBlur,
}) => {
  const fields = staffFormConfig.fields.qualifications || [];

  return (
    <section className="staff-qualification-step">
      <div className="staff-qualification-heading">
        <h2>Qualifications</h2>
        <p>
          Maintain educational qualifications, experience and certifications.
        </p>
      </div>

      <div className="staff-qualification-section">
        <h3>Education & Experience</h3>

        <div className="staff-qualification-grid">
          {fields.map((field) => (
            <div
              className={`staff-qualification-field ${
                field.type === "textarea"
                  ? "staff-qualification-full"
                  : ""
              }`}
              key={field.name}
            >
              <StaffFormField
                {...field}
                value={formData[field.name] ?? ""}
                onChange={onChange}
                onBlur={onBlur}
                error={Boolean(errors[field.name])}
                helperText={errors[field.name] || ""}
                fullWidth
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
