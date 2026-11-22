import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import "@/master_modules/IPD/billingManagement/styles/billingFilters.css";

const BillingFilters = ({
  filters,
  onChange,
  onReset,
}) => {

  return (

    <div className="billing-filters-card">

      <div className="billing-filters-grid">

        <div className="billing-filter-item">

          <label>
            Date Range
          </label>

          <input
            type="date"
            name="date"
            value={filters?.date || ""}
            onChange={onChange}
            className="billing-filter-input"
          />

        </div>

        <div className="billing-filter-item">

          <label>
            Bill Status
          </label>

          <select
            name="billStatus"
            value={filters?.billStatus || ""}
            onChange={onChange}
            className="billing-filter-select"
          >

            <option value="">
              All Status
            </option>

            <option value="Generated">
              Generated
            </option>

            <option value="Paid">
              Paid
            </option>

            <option value="Pending">
              Pending
            </option>

          </select>

        </div>

        <div className="billing-filter-item">

          <label>
            Payment Status
          </label>

          <select
            name="paymentStatus"
            value={filters?.paymentStatus || ""}
            onChange={onChange}
            className="billing-filter-select"
          >

            <option value="">
              All
            </option>

            <option value="Paid">
              Paid
            </option>

            <option value="Partial">
              Partial
            </option>

            <option value="Pending">
              Pending
            </option>

          </select>

        </div>

        <div className="billing-filter-item">

          <label>
            Department
          </label>

          <select
            name="department"
            value={filters?.department || ""}
            onChange={onChange}
            className="billing-filter-select"
          >

            <option value="">
              All Departments
            </option>

            <option value="Cardiology">
              Cardiology
            </option>

            <option value="Neurology">
              Neurology
            </option>

            <option value="Orthopedics">
              Orthopedics
            </option>

            <option value="General Medicine">
              General Medicine
            </option>

          </select>

        </div>

        <div className="billing-filter-item">

          <label>
            Doctor
          </label>

          <select
            name="doctor"
            value={filters?.doctor || ""}
            onChange={onChange}
            className="billing-filter-select"
          >

            <option value="">
              All Doctors
            </option>

            <option value="Dr. Amit Kumar">
              Dr. Amit Kumar
            </option>

            <option value="Dr. Neha Sharma">
              Dr. Neha Sharma
            </option>

            <option value="Dr. Rajesh Singh">
              Dr. Rajesh Singh
            </option>

            <option value="Dr. Pooja Gupta">
              Dr. Pooja Gupta
            </option>

          </select>

        </div>

        <div className="billing-filter-item">

          <label>
            Search
          </label>

          <div className="billing-search-box">

            <SearchOutlinedIcon />

            <input
              type="text"
              name="search"
              value={filters?.search || ""}
              onChange={onChange}
              placeholder="Patient, IPD No, Bill No..."
            />

          </div>

        </div>

      </div>

      <div className="billing-filter-actions">

        <button
          className="billing-reset-btn"
          onClick={onReset}
        >

          <RestartAltOutlinedIcon />

          Reset

        </button>

        <button
          className="billing-apply-btn"
        >

          <FilterAltOutlinedIcon />

          Apply Filters

        </button>

      </div>

    </div>

  );

};

export default BillingFilters;