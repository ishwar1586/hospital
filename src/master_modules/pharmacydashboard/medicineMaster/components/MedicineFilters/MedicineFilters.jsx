import "./MedicineFilters.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

import { medicineFiltersConfig } from "../../config/medicineFilters";

const MedicineFilters = ({
  filters,
  setFilters,
  filterOptions,
}) => {

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      search: "",
      category: "",
      company: "",
      status: "",
    });
  };

  return (
    <div className="medicine-filters-card">

      <div className="medicine-filters-grid">

        {medicineFiltersConfig.map((filter) => {

          if (filter.type === "search") {
            return (
              <div
                key={filter.key}
                className="medicine-filter-group"
              >
                <label>{filter.label}</label>

                <input
                  type="text"
                  value={filters[filter.key]}
                  placeholder={filter.placeholder}
                  onChange={(e) =>
                    handleChange(
                      filter.key,
                      e.target.value
                    )
                  }
                />
              </div>
            );
          }

          return (
            <div
              key={filter.key}
              className="medicine-filter-group"
            >
              <label>{filter.label}</label>

              <select
                value={filters[filter.key]}
                onChange={(e) =>
                  handleChange(
                    filter.key,
                    e.target.value
                  )
                }
              >
                <option value="">
                  {filter.placeholder}
                </option>

                {filterOptions[
                  filter.key
                ]?.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        })}

      </div>

      <div className="medicine-filter-actions">

        <button className="search-btn">
          <SearchOutlinedIcon />
          Search
        </button>

        <button
          className="reset-btn"
          onClick={handleReset}
        >
          <RefreshOutlinedIcon />
          Reset
        </button>

      </div>

    </div>
  );
};

export default MedicineFilters;