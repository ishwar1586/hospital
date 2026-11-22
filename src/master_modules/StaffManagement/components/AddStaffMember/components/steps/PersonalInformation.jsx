import React from "react";
import StaffFormField from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormField";
import StaffProfileUpload from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffProfileUpload";
import { staffFormConfig } from "@/master_modules/StaffManagement/config/staffForm.config";
import "./PersonalInformation.css";

const PersonalInformation = ({
  formData,
  errors,
  onChange,
  onPhotoChange,
}) => {
  const fields = staffFormConfig.fields.personalInformation;

  return (
    <section className="staff-personal-step">
      <div className="staff-step-heading">
        <h2>Personal Information</h2>
        <p>Enter the staff member's basic personal details.</p>
      </div>

      <StaffProfileUpload
        value={formData.profilePhoto}
        onChange={onPhotoChange}
        label="Profile Photo"
        accept="image/png,image/jpeg,image/webp"
        maxSizeMB={5}
        error={errors.profilePhoto}
      />

      <div className="staff-step-grid">
        {fields.map((field) => (
          <StaffFormField
            key={field.name}
            {...field}
            value={formData[field.name] ?? ""}
            onChange={onChange}
            error={Boolean(errors[field.name])}
            helperText={errors[field.name] || ""}
            select={field.type === "select"}
          />
        ))}
      </div>
    </section>
  );
};

export default PersonalInformation;