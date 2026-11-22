import "./SupplierFilters.css";

const SupplierFilters = ({
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
      supplierType: "",
    });
  };

  return (
    <div className="supplier-filters">

      <input
        type="text"
        placeholder="Search Supplier..."
        value={filters.search}
        onChange={(e) =>
          handleChange(
            "search",
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="City"
        value={filters.city}
        onChange={(e) =>
          handleChange(
            "city",
            e.target.value
          )
        }
      />

      <select
        value={filters.supplierType}
        onChange={(e) =>
          handleChange(
            "supplierType",
            e.target.value
          )
        }
      >

        <option value="">
          Supplier Type
        </option>

        <option value="Wholesaler">
          Wholesaler
        </option>

        <option value="Distributor">
          Distributor
        </option>

        <option value="Manufacturer">
          Manufacturer
        </option>

      </select>

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

export default SupplierFilters;