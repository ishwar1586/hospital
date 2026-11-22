// =========================================
// REPORT DISPATCH FILTERS
// =========================================

import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import ClearOutlinedIcon
    from "@mui/icons-material/ClearOutlined";

import KeyboardArrowDownOutlinedIcon
    from "@mui/icons-material/KeyboardArrowDownOutlined";

import "./ReportDispatchFilters.css";


// =========================================
// REPORT DISPATCH FILTERS
// =========================================

const ReportDispatchFilters = ({
    filters = {},
    filterConfig = [],

    onFilterChange,
    onClearFilters,
}) => {

    // =========================================
    // SAFE FILTER VALUES
    // =========================================

    const searchValue =
        filters.search ?? "";



    // =========================================
    // FILTER CHANGE
    // =========================================

    const handleFilterChange = (
        key,
        value
    ) => {

        if (
            typeof onFilterChange !==
            "function"
        ) {
            return;
        }


        onFilterChange(
            key,
            value
        );

    };


    // =========================================
    // SEARCH CHANGE
    // =========================================

    const handleSearchChange = (
        event
    ) => {

        handleFilterChange(
            "search",
            event.target.value
        );

    };


    // =========================================
    // CLEAR FILTERS
    // =========================================

    const handleClearFilters = () => {

        if (
            typeof onClearFilters !==
            "function"
        ) {
            return;
        }


        onClearFilters();

    };


    // =========================================
    // RENDER FILTER
    // =========================================

    const renderFilter = (
        filter
    ) => {

        if (
            !filter ||
            !filter.key
        ) {
            return null;
        }


        const value =
            filters[
                filter.key
            ] ?? "";


        // =====================================
        // SELECT
        // =====================================

        if (
            filter.type ===
            "select"
        ) {

            return (

                <div
                    key={
                        filter.key
                    }

                    className="
                        report-dispatch-filters__field
                    "
                >

                    <label
                        htmlFor={`
                            report-dispatch-filter-${filter.key}
                        `}
                    >
                        {
                            filter.label
                        }
                    </label>


                    <div
                        className="
                            report-dispatch-filters__select-wrapper
                        "
                    >

                        <select
                            id={`
                                report-dispatch-filter-${filter.key}
                            `}

                            className="
                                report-dispatch-filters__select
                            "

                            value={
                                value
                            }

                            onChange={(
                                event
                            ) =>
                                handleFilterChange(
                                    filter.key,
                                    event.target.value
                                )
                            }
                        >

                            <option value="">
                                {
                                    filter.placeholder ||
                                    "All"
                                }
                            </option>


                            {(
                                filter.options ||
                                []
                            ).map(
                                (
                                    option
                                ) => {

                                    const optionValue =
                                        typeof option ===
                                        "object"
                                            ? option.value
                                            : option;


                                    const optionLabel =
                                        typeof option ===
                                        "object"
                                            ? option.label
                                            : option;


                                    return (

                                        <option
                                            key={
                                                optionValue
                                            }

                                            value={
                                                optionValue
                                            }
                                        >
                                            {
                                                optionLabel
                                            }
                                        </option>

                                    );

                                }
                            )}

                        </select>


                        <KeyboardArrowDownOutlinedIcon
                            className="
                                report-dispatch-filters__select-icon
                            "
                        />

                    </div>

                </div>

            );

        }


        // =====================================
        // DATE
        // =====================================

        if (
            filter.type ===
            "date"
        ) {

            return (

                <div
                    key={
                        filter.key
                    }

                    className="
                        report-dispatch-filters__field
                    "
                >

                    <label
                        htmlFor={`
                            report-dispatch-filter-${filter.key}
                        `}
                    >
                        {
                            filter.label
                        }
                    </label>


                    <input
                        id={`
                            report-dispatch-filter-${filter.key}
                        `}

                        type="date"

                        className="
                            report-dispatch-filters__date
                        "

                        value={
                            value
                        }

                        onChange={(
                            event
                        ) =>
                            handleFilterChange(
                                filter.key,
                                event.target.value
                            )
                        }
                    />

                </div>

            );

        }


        return null;

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                report-dispatch-filters
            "
        >

            <div
                className="
                    report-dispatch-filters__container
                "
            >

                {/* =================================
                    SEARCH
                ================================= */}

                <div
                    className="
                        report-dispatch-filters__search
                    "
                >

                    <SearchOutlinedIcon
                        className="
                            report-dispatch-filters__search-icon
                        "
                    />


                    <input
                        type="search"

                        value={
                            searchValue
                        }

                        onChange={
                            handleSearchChange
                        }

                        placeholder="
                            Search patient, UHID or accession no.
                        "

                        aria-label="
                            Search reports
                        "
                    />

                </div>


                {/* =================================
                    CONFIGURED FILTERS
                ================================= */}

                <div
                    className="
                        report-dispatch-filters__controls
                    "
                >

                    {(
                        filterConfig ||
                        []
                    ).map(
                        renderFilter
                    )}

                </div>


                {/* =================================
                    CLEAR
                ================================= */}

                <button
                    type="button"

                    className="
                        report-dispatch-filters__clear
                    "

                    onClick={
                        handleClearFilters
                    }

                    aria-label="
                        Clear filters
                    "

                    title="
                        Clear filters
                    "
                >

                    <ClearOutlinedIcon />

                    <span>
                        Clear
                    </span>

                </button>

            </div>

        </section>

    );

};


export default ReportDispatchFilters;