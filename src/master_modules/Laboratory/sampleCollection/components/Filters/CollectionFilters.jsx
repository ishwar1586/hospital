import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import collectionFilters
    from "../../config/filters";

import "./CollectionFilters.css";


const CollectionFilters = ({
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

            [filterId]: value,

        };


        onFilterChange(
            updatedFilters
        );

    };


    return (

        <section className="collection-filters">

            {collectionFilters.map(
                (filter) => (

                    <div
                        key={filter.id}
                        className={`collection-filter collection-filter--${filter.type}`}
                    >

                        {/* =================================
                            LABEL
                        ================================= */}

                        <label
                            htmlFor={`collection-filter-${filter.id}`}
                            className="collection-filter__label"
                        >

                            {filter.label}

                        </label>


                        {/* =================================
                            SEARCH
                        ================================= */}

                        {filter.type === "search" && (

                            <div className="collection-filter__search-wrapper">

                                <input
                                    id={`collection-filter-${filter.id}`}
                                    type="text"
                                    value={
                                        filters[
                                            filter.id
                                        ] || ""
                                    }
                                    placeholder={
                                        filter.placeholder
                                    }
                                    className="collection-filter__input"
                                    onChange={(event) =>
                                        handleChange(
                                            filter.id,
                                            event.target.value
                                        )
                                    }
                                />


                                <SearchOutlinedIcon
                                    className="collection-filter__search-icon"
                                />

                            </div>

                        )}


                        {/* =================================
                            DATE
                        ================================= */}

                        {filter.type === "date" && (

                            <div className="collection-filter__date-wrapper">

                                <input
                                    id={`collection-filter-${filter.id}`}
                                    type="date"
                                    value={
                                        filters[
                                            filter.id
                                        ] || ""
                                    }
                                    className="collection-filter__input"
                                    onChange={(event) =>
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

                            <div className="collection-filter__select-wrapper">

                                <select
                                    id={`collection-filter-${filter.id}`}
                                    value={
                                        filters[
                                            filter.id
                                        ] || "all"
                                    }
                                    className="collection-filter__select"
                                    onChange={(event) =>
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

                                                {option.label}

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


export default CollectionFilters;