
import React from "react";
import "./DepartmentServices.css";

import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import { departmentServicesConfig } from "../../../../config/addDepartment/departmentServices.config";

const DepartmentServices = ({
  formData = {},
  onChange,
  services = [],
  specialties = [],
}) => {
  const { section, services: servicesConfig, specialties: specialtiesConfig } =
    departmentServicesConfig;

  const selectedServices = Array.isArray(formData[servicesConfig.name])
    ? formData[servicesConfig.name]
    : [];

  const selectedSpecialties = Array.isArray(
    formData[specialtiesConfig.name]
  )
    ? formData[specialtiesConfig.name]
    : [];

  const handleSelection = (fieldName, selectedValues, value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    onChange?.(fieldName, updatedValues);
  };

  const renderOptions = (items, selectedItems, fieldName) => {
    if (!items.length) {
      return (
        <p className="department-services__empty">
          {fieldName === servicesConfig.name
            ? servicesConfig.emptyMessage
            : specialtiesConfig.emptyMessage}
        </p>
      );
    }

    return items.map((item) => {
      const isSelected = selectedItems.includes(item.id);

      return (
        <button
          key={item.id}
          type="button"
          className={`department-services__option ${
            isSelected ? "department-services__option--selected" : ""
          }`}
          onClick={() =>
            handleSelection(fieldName, selectedItems, item.id)
          }
          aria-pressed={isSelected}
        >
          <span className="department-services__option-content">
            <span className="department-services__option-label">
              {item.label}
            </span>

            {item.description && (
              <span className="department-services__option-description">
                {item.description}
              </span>
            )}
          </span>

          <span className="department-services__checkbox">
            {isSelected && (
              <CheckCircleOutlinedIcon className="department-services__check-icon" />
            )}
          </span>
        </button>
      );
    });
  };

  return (
    <section className="department-services">
      <div className="department-services__header">
        <div className="department-services__icon-wrapper">
          <MedicalServicesOutlinedIcon className="department-services__header-icon" />
        </div>

        <div className="department-services__heading-content">
          <h3 className="department-services__title">
            {section.title}
          </h3>

          <p className="department-services__description">
            {section.description}
          </p>
        </div>
      </div>

      <div className="department-services__content">
        {/* Available Services */}
        <div className="department-services__group">
          <div className="department-services__group-header">
            <div>
              <h4 className="department-services__group-title">
                {servicesConfig.title}
              </h4>

              <p className="department-services__group-description">
                {servicesConfig.description}
              </p>
            </div>

            <span className="department-services__count">
              {selectedServices.length} Selected
            </span>
          </div>

          <div className="department-services__options">
            {renderOptions(
              services,
              selectedServices,
              servicesConfig.name
            )}
          </div>
        </div>

        {/* Department Specialties */}
        <div className="department-services__group">
          <div className="department-services__group-header">
            <div>
              <h4 className="department-services__group-title">
                {specialtiesConfig.title}
              </h4>

              <p className="department-services__group-description">
                {specialtiesConfig.description}
              </p>
            </div>

            <span className="department-services__count">
              {selectedSpecialties.length} Selected
            </span>
          </div>

          <div className="department-services__options department-services__options--specialties">
            {renderOptions(
              specialties,
              selectedSpecialties,
              specialtiesConfig.name
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentServices;
