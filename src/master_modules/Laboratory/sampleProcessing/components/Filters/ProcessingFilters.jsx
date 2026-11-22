import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import processingFilters
    from "../../config/filters";

import "./ProcessingFilters.css";


const ProcessingFilters = ({
    filters,
    onFilterChange,
}) => {


    // =========================================
    // HANDLE CHANGE
    // =========================================

    const handleChange = (
        filterId,
        value
    ) => {

        const updatedFilters = {

            ...filters,

            [filterId]:
                value,

        };


        if (onFilterChange) {

            onFilterChange(
                updatedFilters
            );

        }

    };


    return (

        <section className="processing-filters">

            {processingFilters.map(
                (filter) => (

                    <div
                        key={filter.id}
                        className={`
                            processing-filter
                            processing-filter--${filter.type}
                        `}
                    >

                        {/* =================================
                            LABEL
                        ================================= */}

                        <label
                            htmlFor={
                                `processing-filter-${filter.id}`
                            }
                            className="processing-filter__label"
                        >

                            {filter.label}

                        </label>


                        {/* =================================
                            SEARCH
                        ================================= */}

                        {filter.type === "search" && (

                            <div className="processing-filter__search-wrapper">

                                <input
                                    id={
                                        `processing-filter-${filter.id}`
                                    }

                                    type="text"

                                    value={
                                        filters?.[
                                            filter.id
                                        ] || ""
                                    }

                                    placeholder={
                                        filter.placeholder
                                    }

                                    className="processing-filter__input"

                                    onChange={(
                                        event
                                    ) =>
                                        handleChange(
                                            filter.id,
                                            event.target.value
                                        )
                                    }
                                />


                                <SearchOutlinedIcon
                                    className="processing-filter__search-icon"
                                />

                            </div>

                        )}


                        {/* =================================
                            DATE
                        ================================= */}

                        {filter.type === "date" && (

                            <div className="processing-filter__date-wrapper">

                                <input
                                    id={
                                        `processing-filter-${filter.id}`
                                    }

                                    type="date"

                                    value={
                                        filters?.[
                                            filter.id
                                        ] || ""
                                    }

                                    className="processing-filter__date"

                                    onChange={(
                                        event
                                    ) =>
                                        handleChange(
                                            filter.id,
                                            event.target.value
                                        )
                                    }
                                />

                            </div>

                        )}


                        {/* =================================
                            SELECT
                        ================================= */}

                        {filter.type === "select" && (

                            <div className="processing-filter__select-wrapper">

                                <select
                                    id={
                                        `processing-filter-${filter.id}`
                                    }

                                    value={
                                        filters?.[
                                            filter.id
                                        ] || "all"
                                    }

                                    className="processing-filter__select"

                                    onChange={(
                                        event
                                    ) =>
                                        handleChange(
                                            filter.id,
                                            event.target.value
                                        )
                                    }
                                >

                                    {filter.options.map(
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

                        )}

                    </div>

                )
            )}

        </section>

    );

};


export default ProcessingFilters;