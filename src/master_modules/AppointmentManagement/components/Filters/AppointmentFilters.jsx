// src/master_modules/AppointmentManagement/components/Filters/AppointmentFilters.jsx

import React from "react";

import CalendarMonthOutlinedIcon
    from "@mui/icons-material/CalendarMonthOutlined";

import FilterAltOutlinedIcon
    from "@mui/icons-material/FilterAltOutlined";

import RestartAltOutlinedIcon
    from "@mui/icons-material/RestartAltOutlined";

import {
    appointmentFilterFields,
} from "../../config/Filter.Config";

import "./AppointmentFilters.css";


const AppointmentFilters = ({
    filters,
    onFilterChange,
    onApply,
    onReset,
}) => {

    /* =====================================================
       FIELD CHANGE
    ===================================================== */

    const handleFieldChange = (event) => {

        const {
            name,
            value,
        } = event.target;

        if (typeof onFilterChange === "function") {
            onFilterChange(name, value);
        }
    };


    /* =====================================================
       RENDER FIELD
    ===================================================== */

    const renderField = (field) => {

        const {
            name,
            label,
            type,
            placeholder,
            options = [],
        } = field;

        const currentValue =
            filters?.[name] ?? "";


        /* ================================================
           SELECT
        ================================================ */

        if (type === "select") {

            return (
                <div
                    key={name}
                    className="appointment-filter-field"
                >

                    <label
                        htmlFor={`appointment-filter-${name}`}
                        className="appointment-filter-field__label"
                    >
                        {label}
                    </label>


                    <div className="appointment-filter-select-wrapper">

                        <select
                            id={`appointment-filter-${name}`}
                            name={name}
                            value={currentValue}
                            onChange={
                                handleFieldChange
                            }
                            className="appointment-filter-select"
                        >

                            {placeholder && (
                                <option
                                    value="all"
                                >
                                    {placeholder}
                                </option>
                            )}

                            {options.map(
                                (option) => (
                                    <option
                                        key={
                                            option.value
                                        }
                                        value={
                                            option.value
                                        }
                                    >
                                        {
                                            option.label
                                        }
                                    </option>
                                )
                            )}

                        </select>

                    </div>

                </div>
            );
        }


        /* ================================================
           DATE
        ================================================ */

        if (type === "date") {

            return (
                <div
                    key={name}
                    className="appointment-filter-field"
                >

                    <label
                        htmlFor={`appointment-filter-${name}`}
                        className="appointment-filter-field__label"
                    >
                        {label}
                    </label>


                    <div className="appointment-filter-date-wrapper">

                        <CalendarMonthOutlinedIcon
                            className="appointment-filter-date-icon"
                        />

                        <input
                            id={`appointment-filter-${name}`}
                            type="date"
                            name={name}
                            value={currentValue}
                            onChange={
                                handleFieldChange
                            }
                            className="appointment-filter-date"
                            placeholder={
                                placeholder
                            }
                        />

                    </div>

                </div>
            );
        }


        return null;
    };


    return (
        <section className="appointment-filters">

            {/* =================================================
                FILTER FIELDS
            ================================================= */}

            <div className="appointment-filters__fields">

                {appointmentFilterFields.map(
                    renderField
                )}

            </div>


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="appointment-filters__actions">

                <button
                    type="button"
                    className="appointment-filter-apply-button"
                    onClick={onApply}
                >

                    <FilterAltOutlinedIcon />

                    <span>
                        Apply Filters
                    </span>

                </button>


                <button
                    type="button"
                    className="appointment-filter-reset-button"
                    onClick={onReset}
                >

                    <RestartAltOutlinedIcon />

                    <span>
                        Reset
                    </span>

                </button>

            </div>

        </section>
    );
};


export default AppointmentFilters;