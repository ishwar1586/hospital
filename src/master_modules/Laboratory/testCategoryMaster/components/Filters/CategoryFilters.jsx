import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./CategoryFilters.css";

import categoryFilters from "../../config/filters";

const CategoryFilters = ({
    filters,
    onFilterChange,
}) => {

    const handleChange = (
        filterId,
        value
    ) => {

        const updatedFilters = {
            ...filters,
            [filterId]: value,
        };

        onFilterChange(updatedFilters);
    };


    return (
        <section className="category-filters">

            {categoryFilters.map((filter) => (

                <div
                    key={filter.id}
                    className={`category-filter category-filter--${filter.type}`}
                >

                    <label
                        htmlFor={`category-filter-${filter.id}`}
                        className="category-filter__label"
                    >
                        {filter.label}
                    </label>


                    {/* =========================
                        SEARCH
                    ========================= */}

                    {filter.type === "search" && (

                        <div className="category-filter__search-wrapper">

                            <input
                                id={`category-filter-${filter.id}`}
                                type="text"
                                value={
                                    filters[filter.id] || ""
                                }
                                placeholder={
                                    filter.placeholder
                                }
                                className="category-filter__input"
                                onChange={(event) =>
                                    handleChange(
                                        filter.id,
                                        event.target.value
                                    )
                                }
                            />

                            <SearchOutlinedIcon
                                className="category-filter__search-icon"
                            />

                        </div>

                    )}


                    {/* =========================
                        SELECT
                    ========================= */}

                    {filter.type === "select" && (

                        <div className="category-filter__select-wrapper">

                            <select
                                id={`category-filter-${filter.id}`}
                                value={
                                    filters[filter.id] || "all"
                                }
                                className="category-filter__select"
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

export default CategoryFilters;