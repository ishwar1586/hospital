
import React from "react";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import   "./StaffFormHeader.css";

const StaffFormHeader = ({
  title = "Add New Staff Member",
  subtitle = "Complete all required fields for staff onboarding",
  icon: Icon = PersonAddAlt1OutlinedIcon,
}) => {
  return (
    <header className="staff-form-header">
      <div className="staff-form-header__title-row">
        <Icon className="staff-form-header__icon" />
        <h1 className="staff-form-header__title">{title}</h1>
      </div>

      <p className="staff-form-header__subtitle">{subtitle}</p>
    </header>
  );
};

export default StaffFormHeader;
