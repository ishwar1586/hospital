import "./ManufacturerFilters.css";

const ManufacturerFilters = ({
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
      city: "",
      status: "",
    });
  };

  return (
    <div className="manufacturer-filters">

      <input
        type="text"
        placeholder="Search Manufacturer..."
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

      <select
        value={filters.city}
        onChange={(e) =>
          handleChange(
            "city",
            e.target.value
          )
        }
      >

        <option value="">
          All Cities
        </option>

        <option value="Mumbai">
          Mumbai
        </option>

        <option value="Delhi">
          Delhi
        </option>

        <option value="Lucknow">
          Lucknow
        </option>

        <option value="Noida">
          Noida
        </option>

        <option value="Gurgaon">
          Gurgaon
        </option>

        <option value="Ahmedabad">
          Ahmedabad
        </option>

        <option value="Pune">
          Pune
        </option>

        <option value="Hyderabad">
          Hyderabad
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

export default ManufacturerFilters;