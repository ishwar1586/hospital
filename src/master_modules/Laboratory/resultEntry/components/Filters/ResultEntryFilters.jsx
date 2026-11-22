import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import RestartAltOutlinedIcon
    from "@mui/icons-material/RestartAltOutlined";

import filters
    from "../../config/filters";

import "./ResultEntryFilters.css";


const ResultEntryFilters = ({
    filterValues = {},
    onFilterChange,
    onReset,
}) => {


    // =========================================
    // GET FILTER VALUE
    // =========================================

    const getFilterValue = (
        filterId
    ) => {

        return (
            filterValues[
                filterId
            ] ?? "all"
        );

    };


    // =========================================
    // HANDLE CHANGE
    // =========================================

    const handleChange = (
        filterId,
        value
    ) => {

        if (
            typeof onFilterChange ===
            "function"
        ) {

            onFilterChange(
                filterId,
                value
            );

        }

    };


    // =========================================
    // HANDLE RESET
    // =========================================

    const handleReset = () => {

        if (
            typeof onReset ===
            "function"
        ) {

            onReset();

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-entry-filters
            "
        >


            {/* =================================
                FILTER HEADER
            ================================= */}

            <div
                className="
                    result-entry-filters__header
                "
            >

                <div
                    className="
                        result-entry-filters__title
                    "
                >

                    <span>
                        Filters
                    </span>

                </div>


                <button

                    type="button"

                    className="
                        result-entry-filters__reset
                    "

                    onClick={
                        handleReset
                    }

                >

                    <RestartAltOutlinedIcon />

                    <span>
                        Reset
                    </span>

                </button>

            </div>


            {/* =================================
                FILTER CONTROLS
            ================================= */}

            <div
                className="
                    result-entry-filters__controls
                "
            >

                {filters.map(
                    (filter) => {


                        // =================================
                        // SEARCH
                        // =================================

                        if (
                            filter.type ===
                            "search"
                        ) {

                            return (

                                <div
                                    key={
                                        filter.id
                                    }

                                    className="
                                        result-entry-filter
                                        result-entry-filter--search
                                    "

                                    style={{
                                        "--filter-width":
                                            filter.width,
                                    }}

                                >

                                    <label
                                        htmlFor={
                                            `result-entry-${filter.id}`
                                        }
                                    >

                                        {
                                            filter.label
                                        }

                                    </label>


                                    <div
                                        className="
                                            result-entry-filter__input-wrapper
                                        "
                                    >

                                        <SearchOutlinedIcon />


                                        <input

                                            id={
                                                `result-entry-${filter.id}`
                                            }

                                            type="search"

                                            value={
                                                filterValues[
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

                                            placeholder={
                                                filter.placeholder
                                            }

                                            autoComplete="off"

                                        />

                                    </div>

                                </div>

                            );

                        }


                        // =================================
                        // SELECT
                        // =================================

                        if (
                            filter.type ===
                            "select"
                        ) {

                            return (

                                <div
                                    key={
                                        filter.id
                                    }

                                    className="
                                        result-entry-filter
                                        result-entry-filter--select
                                    "

                                    style={{
                                        "--filter-width":
                                            filter.width,
                                    }}

                                >

                                    <label
                                        htmlFor={
                                            `result-entry-${filter.id}`
                                        }
                                    >

                                        {
                                            filter.label
                                        }

                                    </label>


                                    <select

                                        id={
                                            `result-entry-${filter.id}`
                                        }

                                        value={
                                            getFilterValue(
                                                filter.id
                                            )
                                        }

                                        onChange={(
                                            event
                                        ) =>
                                            handleChange(
                                                filter.id,
                                                event.target.value
                                            )
                                        }

                                    >

                                        {(
                                            filter.options ||
                                            []
                                        ).map(
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

                        }


                        return null;

                    }
                )}

            </div>

        </section>

    );

};


export default ResultEntryFilters;