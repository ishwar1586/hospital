import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./TestFilters.css";

import testFilters from "../../config/filters";

const TestFilters = ({
    filters,
    onFilterChange,
}) => {

    const handleChange = (filterId, value) => {

        const updatedFilters = {
            ...filters,
            [filterId]: value,
        };

        onFilterChange(updatedFilters);
    };

    return (
        <section className="test-filters">

            {testFilters.map((filter) => (

                <div
                    key={filter.id}
                    className={`test-filter test-filter--${filter.type}`}
                >

                    <label
                        htmlFor={`test-filter-${filter.id}`}
                        className="test-filter__label"
                    >
                        {filter.label}
                    </label>


                    {/* =========================
                        SEARCH
                    ========================= */}

                    {filter.type === "search" && (

                        <div className="test-filter__search-wrapper">

                            <input
                                id={`test-filter-${filter.id}`}
                                type="text"
                                value={filters[filter.id] || ""}
                                placeholder={filter.placeholder}
                                className="test-filter__input"
                                onChange={(event) =>
                                    handleChange(
                                        filter.id,
                                        event.target.value
                                    )
                                }
                            />

                            <SearchOutlinedIcon
                                className="test-filter__search-icon"
                            />

                        </div>

                    )}


                    {/* =========================
                        SELECT
                    ========================= */}

                    {filter.type === "select" && (

                        <div className="test-filter__select-wrapper">

                            <select
                                id={`test-filter-${filter.id}`}
                                value={
                                    filters[filter.id] || "all"
                                }
                                className="test-filter__select"
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
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    )
                                )}

                            </select>

                        </div>

                    )}

                </div>

            ))}

        </section>
    );
};

export default TestFilters;