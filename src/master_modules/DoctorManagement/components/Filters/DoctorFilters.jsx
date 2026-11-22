import React, {
    useMemo,
} from "react";

import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import KeyboardArrowDownOutlinedIcon
    from "@mui/icons-material/KeyboardArrowDownOutlined";

import FilterAltOutlinedIcon
    from "@mui/icons-material/FilterAltOutlined";

import FileDownloadOutlinedIcon
    from "@mui/icons-material/FileDownloadOutlined";

import {
    DOCTOR_DEPARTMENTS,
    DOCTOR_STATUSES,
    DOCTOR_STATUS_CONFIG,
    DOCTOR_AVAILABILITY,
    DOCTOR_AVAILABILITY_CONFIG,
} from "../../config/doctorConfig";

import "./DoctorFilters.css";


// =========================================
// OPTION NORMALIZER
// =========================================

const normalizeOptions = (
    source,
    config = {}
) => {

    if (!source) {
        return [];
    }


    // -----------------------------------------
    // ARRAY
    // -----------------------------------------

    if (Array.isArray(source)) {

        return source.map(
            (item) => {

                // String option

                if (
                    typeof item ===
                    "string"
                ) {
                    return {
                        value: item,
                        label:
                            config?.[item]
                                ?.label ||
                            item,
                    };
                }


                // Object option

                return {
                    value:
                        item?.value ??
                        item?.id ??
                        item?.key ??
                        "",

                    label:
                        item?.label ??
                        item?.name ??
                        item?.title ??
                        "",
                };

            }
        ).filter(
            (item) =>
                item.value !== ""
        );
    }


    // -----------------------------------------
    // OBJECT
    // -----------------------------------------

    if (
        typeof source ===
        "object"
    ) {

        return Object.entries(
            source
        ).map(
            ([key, item]) => {

                if (
                    typeof item ===
                    "string"
                ) {
                    return {
                        value: key,
                        label: item,
                    };
                }


                return {
                    value: key,

                    label:
                        item?.label ??
                        item?.name ??
                        key,
                };

            }
        );
    }


    return [];
};


// =========================================
// LABEL FORMATTER
// =========================================

const formatFallbackLabel = (
    value
) => {

    if (!value) {
        return "";
    }


    return value
        .replace(/[-_]/g, " ")
        .replace(
            /\b\w/g,
            (letter) =>
                letter.toUpperCase()
        );
};


// =========================================
// COMPONENT
// =========================================

const DoctorFilters = ({
    filters = {},

    onSearchChange,
    onDepartmentChange,
    onStatusChange,
    onAvailabilityChange,

    onClear,

    onExport,

    disabled = false,
}) => {

    // =========================================
    // NORMALIZED OPTIONS
    // =========================================

    const departmentOptions = useMemo(
        () => {

            return normalizeOptions(
                DOCTOR_DEPARTMENTS
            );

        },
        []
    );


    const statusOptions = useMemo(
        () => {

            const options =
                normalizeOptions(
                    DOCTOR_STATUSES,
                    DOCTOR_STATUS_CONFIG
                );


            return options.map(
                (option) => ({
                    ...option,

                    label:
                        option.label ||
                        formatFallbackLabel(
                            option.value
                        ),
                })
            );

        },
        []
    );


    const availabilityOptions =
        useMemo(
            () => {

                const options =
                    normalizeOptions(
                        DOCTOR_AVAILABILITY,
                        DOCTOR_AVAILABILITY_CONFIG
                    );


                return options.map(
                    (option) => ({
                        ...option,

                        label:
                            option.label ||
                            formatFallbackLabel(
                                option.value
                            ),
                    })
                );

            },
            []
        );


    // =========================================
    // SAFE VALUES
    // =========================================

    const search =
        filters?.search ?? "";

    const department =
        filters?.department ?? "all";

    const status =
        filters?.status ?? "all";

    const availability =
        filters?.availability ?? "all";


    // =========================================
    // HANDLERS
    // =========================================

    const handleSearchChange = (
        event
    ) => {

        const value =
            event.target.value;


        if (
            typeof onSearchChange ===
            "function"
        ) {

            onSearchChange(value);

        }

    };


    const handleDepartmentChange = (
        event
    ) => {

        const value =
            event.target.value;


        if (
            typeof onDepartmentChange ===
            "function"
        ) {

            onDepartmentChange(value);

        }

    };


    const handleStatusChange = (
        event
    ) => {

        const value =
            event.target.value;


        if (
            typeof onStatusChange ===
            "function"
        ) {

            onStatusChange(value);

        }

    };


    const handleAvailabilityChange = (
        event
    ) => {

        const value =
            event.target.value;


        if (
            typeof onAvailabilityChange ===
            "function"
        ) {

            onAvailabilityChange(value);

        }

    };


    const handleClear = () => {

        if (
            typeof onClear ===
            "function"
        ) {

            onClear();

        }

    };


    const handleExport = () => {

        if (
            typeof onExport ===
            "function"
        ) {

            onExport();

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="doctor-filters"
            aria-label="Doctor filters"
        >

            <div className="doctor-filters__row">

                {/* =================================
                    SEARCH
                ================================= */}

                <div
                    className="
                        doctor-filter-field
                        doctor-filter-field--search
                    "
                >

                    <label
                        htmlFor="doctor-search"
                        className="
                            doctor-filter-field__label
                        "
                    >
                        Search
                    </label>


                    <div
                        className="
                            doctor-filter-input-wrapper
                        "
                    >

                        <SearchOutlinedIcon
                            className="
                                doctor-filter-input__icon
                            "
                        />


                        <input
                            id="doctor-search"
                            type="search"
                            value={search}
                            onChange={
                                handleSearchChange
                            }
                            placeholder="
                                Search by name, department, qualification...
                            "
                            disabled={disabled}
                            className="
                                doctor-filter-input
                            "
                        />

                    </div>

                </div>


                {/* =================================
                    DEPARTMENT
                ================================= */}

                <div
                    className="doctor-filter-field"
                >

                    <label
                        htmlFor="doctor-department"
                        className="
                            doctor-filter-field__label
                        "
                    >
                        Department
                    </label>


                    <div
                        className="
                            doctor-filter-select-wrapper
                        "
                    >

                        <select
                            id="doctor-department"
                            value={department}
                            onChange={
                                handleDepartmentChange
                            }
                            disabled={disabled}
                            className="
                                doctor-filter-select
                            "
                        >

                            <option value="all">
                                All Departments
                            </option>


                            {departmentOptions.map(
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
                                            option.label ||
                                            formatFallbackLabel(
                                                option.value
                                            )
                                        }
                                    </option>

                                )
                            )}

                        </select>


                        <KeyboardArrowDownOutlinedIcon
                            className="
                                doctor-filter-select__icon
                            "
                        />

                    </div>

                </div>


                {/* =================================
                    STATUS
                ================================= */}

                <div
                    className="doctor-filter-field"
                >

                    <label
                        htmlFor="doctor-status"
                        className="
                            doctor-filter-field__label
                        "
                    >
                        Status
                    </label>


                    <div
                        className="
                            doctor-filter-select-wrapper
                        "
                    >

                        <select
                            id="doctor-status"
                            value={status}
                            onChange={
                                handleStatusChange
                            }
                            disabled={disabled}
                            className="
                                doctor-filter-select
                            "
                        >

                            <option value="all">
                                All Status
                            </option>


                            {statusOptions.map(
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
                                            option.label ||
                                            formatFallbackLabel(
                                                option.value
                                            )
                                        }
                                    </option>

                                )
                            )}

                        </select>


                        <KeyboardArrowDownOutlinedIcon
                            className="
                                doctor-filter-select__icon
                            "
                        />

                    </div>

                </div>


                {/* =================================
                    AVAILABILITY
                ================================= */}

                <div
                    className="doctor-filter-field"
                >

                    <label
                        htmlFor="doctor-availability"
                        className="
                            doctor-filter-field__label
                        "
                    >
                        Availability
                    </label>


                    <div
                        className="
                            doctor-filter-select-wrapper
                        "
                    >

                        <select
                            id="doctor-availability"
                            value={availability}
                            onChange={
                                handleAvailabilityChange
                            }
                            disabled={disabled}
                            className="
                                doctor-filter-select
                            "
                        >

                            <option value="all">
                                All
                            </option>


                            {availabilityOptions.map(
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
                                            option.label ||
                                            formatFallbackLabel(
                                                option.value
                                            )
                                        }
                                    </option>

                                )
                            )}

                        </select>


                        <KeyboardArrowDownOutlinedIcon
                            className="
                                doctor-filter-select__icon
                            "
                        />

                    </div>

                </div>


                {/* =================================
                    CLEAR
                ================================= */}

                <button
                    type="button"
                    className="
                        doctor-filter-clear
                    "
                    onClick={
                        handleClear
                    }
                    disabled={
                        disabled
                    }
                >

                    <FilterAltOutlinedIcon />

                    <span>
                        Clear Filters
                    </span>

                </button>


                {/* =================================
                    EXPORT
                ================================= */}

                <button
                    type="button"
                    className="
                        doctor-filter-export
                    "
                    onClick={
                        handleExport
                    }
                    disabled={
                        disabled
                    }
                >

                    <FileDownloadOutlinedIcon />

                    <span>
                        Export
                    </span>

                </button>

            </div>

        </section>

    );

};


export default DoctorFilters;