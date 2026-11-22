// =========================================
// REPORT GENERATION FILTERS
// =========================================

import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import RestartAltOutlinedIcon
    from "@mui/icons-material/RestartAltOutlined";

import reportGenerationFilters
    from "../../config/filters";

import "./ReportGenerationFilters.css";


// =========================================
// REPORT GENERATION FILTERS
// =========================================

const ReportGenerationFilters = ({
    values = {},
    onChange,
    onReset,
}) => {

    // =========================================
    // SAFE VALUES
    // =========================================

    const safeValues =
        values &&
        typeof values === "object"
            ? values
            : {};


    // =========================================
    // CHANGE HANDLER
    // =========================================

    const handleChange = (
        filterId,
        value
    ) => {

        if (
            typeof onChange !==
            "function"
        ) {
            return;
        }


        onChange(
            filterId,
            value
        );

    };


    // =========================================
    // SEARCH FILTER
    // =========================================

    const renderSearchFilter = (
        filter
    ) => {

        return (

            <div
                className="
                    report-generation-filters__search
                "
                key={
                    filter.id
                }
            >

                <SearchOutlinedIcon
                    className="
                        report-generation-filters__search-icon
                    "
                />


                <input
                    type="text"

                    value={
                        safeValues[
                            filter.id
                        ] || ""
                    }

                    placeholder={
                        filter.placeholder ||
                        "Search..."
                    }

                    onChange={(
                        event
                    ) =>
                        handleChange(
                            filter.id,
                            event.target.value
                        )
                    }

                    className="
                        report-generation-filters__search-input
                    "

                    aria-label={
                        filter.label ||
                        "Search reports"
                    }
                />

            </div>

        );

    };


    // =========================================
    // SELECT FILTER
    // =========================================

    const renderSelectFilter = (
        filter
    ) => {

        const options =
            Array.isArray(
                filter.options
            )
                ? filter.options
                : [];


        return (

            <div
                className="
                    report-generation-filters__field
                "
                key={
                    filter.id
                }
            >

                {filter.label && (

                    <label
                        htmlFor={
                            `report-filter-${filter.id}`
                        }

                        className="
                            report-generation-filters__label
                        "
                    >
                        {
                            filter.label
                        }
                    </label>

                )}


                <select
                    id={
                        `report-filter-${filter.id}`
                    }

                    value={
                        safeValues[
                            filter.id
                        ] ??
                        filter.defaultValue ??
                        "all"
                    }

                    onChange={(
                        event
                    ) =>
                        handleChange(
                            filter.id,
                            event.target.value
                        )
                    }

                    className="
                        report-generation-filters__select
                    "
                >

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

        );

    };


    // =========================================
    // DATE FILTER
    // =========================================

    const renderDateFilter = (
        filter
    ) => {

        return (

            <div
                className="
                    report-generation-filters__field
                "
                key={
                    filter.id
                }
            >

                {filter.label && (

                    <label
                        htmlFor={
                            `report-filter-${filter.id}`
                        }

                        className="
                            report-generation-filters__label
                        "
                    >
                        {
                            filter.label
                        }
                    </label>

                )}


                <input
                    id={
                        `report-filter-${filter.id}`
                    }

                    type="date"

                    value={
                        safeValues[
                            filter.id
                        ] || ""
                    }

                    onChange={(
                        event
                    ) =>
                        handleChange(
                            filter.id,
                            event.target.value
                        )
                    }

                    className="
                        report-generation-filters__date
                    "
                />

            </div>

        );

    };


    // =========================================
    // FILTER RENDERER
    // =========================================

    const renderFilter = (
        filter
    ) => {

        if (
            !filter ||
            !filter.id
        ) {
            return null;
        }


        switch (
            filter.type
        ) {

            case "search":

                return renderSearchFilter(
                    filter
                );


            case "select":

                return renderSelectFilter(
                    filter
                );


            case "date":

                return renderDateFilter(
                    filter
                );


            default:

                return null;

        }

    };


    // =========================================
    // RESET
    // =========================================

    const handleReset = () => {

        if (
            typeof onReset !==
            "function"
        ) {
            return;
        }


        onReset();

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                report-generation-filters
            "
        >

            {/* =================================
                FILTER CONTENT
            ================================= */}

            <div
                className="
                    report-generation-filters__content
                "
            >

                {reportGenerationFilters.map(
                    (filter) =>
                        renderFilter(
                            filter
                        )
                )}

            </div>


            {/* =================================
                RESET
            ================================= */}

            <button
                type="button"

                className="
                    report-generation-filters__reset
                "

                onClick={
                    handleReset
                }

                title="
                    Reset filters
                "
            >

                <RestartAltOutlinedIcon />

                <span>
                    Reset
                </span>

            </button>

        </section>

    );

};


export default ReportGenerationFilters;