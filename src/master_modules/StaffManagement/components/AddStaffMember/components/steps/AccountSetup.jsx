
import React from "react";
import StaffFormField from "@/master_modules/StaffManagement/components/AddStaffMember/components/shared/StaffFormField";
import { staffFormConfig } from "@/master_modules/StaffManagement/config/staffForm.config";
import "./AccountSetup.css";

const AccountSetup = ({
  formData = {},
  errors = {},
  onChange,
  onBlur,
}) => {
  const fields = staffFormConfig.fields.accountSetup || [];

  return (
    <section className="staff-account-step">
      <div className="staff-account-heading">
        <h2>Account Setup</h2>
        <p>
          Configure login credentials and the employee's system access.
        </p>
      </div>

      <div className="staff-account-security">
        <div className="staff-account-security-icon" aria-hidden="true">
          !
        </div>

        <div>
          <h3>Account Security</h3>
          <p>
            Assign only the permissions required for this employee.
            Actual authorization must be enforced by the backend.
          </p>
        </div>
      </div>

      <div className="staff-account-section">
        <h3>Login Credentials</h3>

        <div className="staff-account-grid">
          {fields.map((field) => (
            <div
              className={`staff-account-field ${
                field.type === "checkbox"
                  ? "staff-account-checkbox-field"
                  : ""
              }`}
              key={field.name}
            >
              <StaffFormField
                {...field}
                value={
                  field.type === "checkbox"
                    ? undefined
                    : formData[field.name] ?? ""
                }
                checked={
                  field.type === "checkbox"
                    ? Boolean(formData[field.name])
                    : undefined
                }
                onChange={onChange}
                onCheckedChange={(checked) =>
                  onChange?.({
                    target: {
                      name: field.name,
                      value: checked,
                      checked,
                      type: "checkbox",
                    },
                  })
                }
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

export default AccountSetup;
