import React from "react";
import StaffFormField from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormField";
import { staffFormConfig } from "@/master_modules/StaffManagement/config/staffForm.config";
import "./ContactInformation.css";

const ContactInformation = ({ formData, errors, onChange }) => {
  const fields = staffFormConfig.fields.contactInformation;

  return (
    <section className="staff-contact-step">
      <div className="staff-step-heading">
        <h2>Contact Information</h2>
        <p>Enter contact details, emergency contact and residential address.</p>
      </div>

      <div className="staff-contact-grid">
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              field.name === "address" ? "staff-contact-full-width" : ""
            }
          >
            <StaffFormField
              {...field}
              value={formData[field.name] ?? ""}
              onChange={onChange}
              error={Boolean(errors[field.name])}
              helperText={errors[field.name] || ""}
              select={field.type === "select"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInformation;