
import React from "react";

import SearchOutlined from "@mui/icons-material/SearchOutlined";

import { opdFiltersConfig } from "../../config/opdFilters.config";
import { opdDoctorsMock } from "../../mock/opdDoctors.mock";

import "./OPDFilters.css";

const OPDFilters = ({
    filters,
    onFilterChange,
    onSearch,
    onClear,
    config = opdFiltersConfig,
    doctors = opdDoctorsMock,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch?.({ ...filters });
    };

    const handleClear = () => {
        onClear?.();
    };

    const handleChange = (field, value) => {
        onFilterChange?.(field, value);
    };

    const activeDoctors = doctors.filter(
        (doctor) => doctor.isActive
    );

    return (
        <section
            className="opd-filters"
            aria-label="Filter OPD appointments"
        >
            <form
                className="opd-filters__form"
                onSubmit={handleSubmit}
            >
                <div className="opd-filters__date">
                    <input
                        id="opd-filter-date"
                        className="opd-filters__control"
                        type="date"
                        aria-label={config.labels.appointmentDate}
                        value={filters.appointmentDate}
                        onChange={(event) =>
                            handleChange("appointmentDate", event.target.value)
                        }
                    />
                </div>

                <div className="opd-filters__field">
                    <label
                        className="opd-filters__sr-only"
                        htmlFor="opd-filter-doctor"
                    >
                        {config.labels.doctor}
                    </label>

                    <select
                        id="opd-filter-doctor"
                        className="opd-filters__control"
                        value={filters.doctorId}
                        onChange={(event) =>
                            handleChange("doctorId", event.target.value)
                        }
                    >
                        <option value="all">{config.placeholders.doctor}</option>

                        {activeDoctors.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {doctor.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="opd-filters__field">
                    <label
                        className="opd-filters__sr-only"
                        htmlFor="opd-filter-visit-type"
                    >
                        {config.labels.visitType}
                    </label>

                    <select
                        id="opd-filter-visit-type"
                        className="opd-filters__control"
                        value={filters.visitType}
                        onChange={(event) =>
                            handleChange("visitType", event.target.value)
                        }
                    >
                        {config.visitTypes.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="opd-filters__field">
                    <label
                        className="opd-filters__sr-only"
                        htmlFor="opd-filter-status"
                    >
                        {config.labels.status}
                    </label>

                    <select
                        id="opd-filter-status"
                        className="opd-filters__control"
                        value={filters.status}
                        onChange={(event) =>
                            handleChange("status", event.target.value)
                        }
                    >
                        {config.statuses.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="opd-filters__search">
                    <label
                        className="opd-filters__sr-only"
                        htmlFor="opd-filter-search"
                    >
                        {config.labels.search}
                    </label>

                    <SearchOutlined
                        className="opd-filters__search-icon"
                        aria-hidden="true"
                    />

                    <input
                        id="opd-filter-search"
                        className="opd-filters__search-input"
                        type="search"
                        value={filters.search}
                        placeholder={config.placeholders.search}
                        onChange={(event) =>
                            handleChange("search", event.target.value)
                        }
                    />
                </div>

                <button
                    className="opd-filters__button opd-filters__button--search"
                    type="submit"
                >
                    {config.buttons.search}
                </button>

                <button
                    className="opd-filters__button opd-filters__button--clear"
                    type="button"
                    onClick={handleClear}
                >
                    {config.buttons.clear}
                </button>
            </form>
        </section>
    );
};

export default OPDFilters;
