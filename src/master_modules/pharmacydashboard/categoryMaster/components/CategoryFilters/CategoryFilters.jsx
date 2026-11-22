import "./CategoryFilters.css";

const CategoryFilters = ({
  filters,
  setFilters,
}) => {

  const handleChange = (
    field,
    value
  ) => {

    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetFilters = () => {

    setFilters({
      search: "",
      status: "",
    });
  };

  return (
    <div className="category-filters">

      <input
        type="text"
        placeholder="Search Category..."
        value={filters.search}
        onChange={(e) =>
          handleChange(
            "search",
            e.target.value
          )
        }
      />

      <select
        value={filters.status}
        onChange={(e) =>
          handleChange(
            "status",
            e.target.value
          )
        }
      >

        <option value="">
          All Status
        </option>

        <option value="Active">
          Active
        </option>

        <option value="Inactive">
          Inactive
        </option>

      </select>

      <button
        className="reset-btn"
        onClick={resetFilters}
      >
        Reset
      </button>

    </div>
  );
};

export default CategoryFilters;