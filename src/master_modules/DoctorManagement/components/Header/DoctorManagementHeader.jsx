import React from "react";
import "./DoctorManagementHeader.css";

const DoctorManagementHeader = () => {
  return (
    <header className="doctor-management-header">
      <div className="doctor-management-header__content">
        <div className="doctor-management-header__title-section">
          <h1 className="doctor-management-header__title">
            Doctors
          </h1>

          <p className="doctor-management-header__subtitle">
            Manage doctors, their availability, schedules and professional information
          </p>
        </div>
      </div>
    </header>
  );
};

export default DoctorManagementHeader;