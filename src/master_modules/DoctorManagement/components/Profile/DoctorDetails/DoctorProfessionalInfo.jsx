import React from "react";
import "./DoctorProfessionalInfo.css";

const DoctorProfessionalInfo = ({ doctor }) => {
  if (!doctor) return null;

  const professionalInfo = [
    {
      label: "Doctor ID",
      value: doctor.doctorId || doctor.id || "—",
    },
    {
      label: "Department",
      value: doctor.departmentName || doctor.department || "—",
    },
    {
      label: "Qualification",
      value: doctor.qualification || "—",
    },
    {
      label: "Experience",
      value: doctor.experienceLabel || (
        doctor.experience ? `${doctor.experience} Years` : "—"
      ),
    },
    {
      label: "Specialization",
      value: doctor.specialization || "—",
    },
    {
      label: "Registration No.",
      value: doctor.registrationNumber || "—",
    },
    {
      label: "Consultation Fee",
      value:
        doctor.consultationFee !== undefined &&
        doctor.consultationFee !== null
          ? `₹ ${Number(doctor.consultationFee).toLocaleString("en-IN")}`
          : "—",
    },
  ];

  return (
    <section className="doctor-professional-info">
      <div className="doctor-professional-info__header">
        <h3 className="doctor-professional-info__title">
          Professional Information
        </h3>
      </div>

      <div className="doctor-professional-info__grid">
        {professionalInfo.map((item) => (
          <div
            className="doctor-professional-info__item"
            key={item.label}
          >
            <span className="doctor-professional-info__label">
              {item.label}
            </span>

            <span className="doctor-professional-info__value">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorProfessionalInfo;