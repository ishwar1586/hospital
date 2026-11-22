import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import RestartAltOutlinedIcon
    from "@mui/icons-material/RestartAltOutlined";

import filters
    from "../../config/filters";

import "./TestQueueFilters.css";


const TestQueueFilters = ({
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
    // CHANGE HANDLER
    // =========================================

    const handleChange = (
        filterId,
        value
    ) => {

        if (onFilterChange) {

            onFilterChange(
                filterId,
                value
            );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section className="test-queue-filters">


            {/* =================================
                FILTER HEADER
            ================================= */}

            <div className="test-queue-filters__header">

                <div className="test-queue-filters__title">

                    <span>
                        Filters
                    </span>

                </div>


                <button
                    type="button"
                    className="test-queue-filters__reset"
                    onClick={onReset}
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

            <div className="test-queue-filters__controls">

                {filters.map(
                    (filter) => {


                        // =========================
                        // SEARCH
                        // =========================

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
                                        test-queue-filter
                                        test-queue-filter--search
                                    "
                                    style={{
                                        "--filter-width":
                                            filter.width,
                                    }}
                                >

                                    <label
                                        htmlFor={
                                            `test-queue-${filter.id}`
                                        }
                                    >

                                        {filter.label}

                                    </label>


                                    <div className="test-queue-filter__input-wrapper">

                                        <SearchOutlinedIcon />


                                        <input
                                            id={
                                                `test-queue-${filter.id}`
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


                        // =========================
                        // SELECT
                        // =========================

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
                                        test-queue-filter
                                        test-queue-filter--select
                                    "
                                    style={{
                                        "--filter-width":
                                            filter.width,
                                    }}
                                >

                                    <label
                                        htmlFor={
                                            `test-queue-${filter.id}`
                                        }
                                    >

                                        {filter.label}

                                    </label>


                                    <select
                                        id={
                                            `test-queue-${filter.id}`
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


export default TestQueueFilters;