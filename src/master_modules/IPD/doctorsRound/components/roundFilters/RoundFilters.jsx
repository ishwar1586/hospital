import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "@/master_modules/IPD/doctorsRound/styles/roundfilters.css";

const RoundFilters = ({
  filters,
  onChange,
}) => {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="round-filters-card">

      <div className="round-filters-grid">

        <div className="round-filter-group">
          <label>
            IPD No
          </label>

          <input
            type="text"
            name="ipdNo"
            value={filters.ipdNo}
            onChange={onChange}
            placeholder="Search IPD No"
          />
        </div>

        <div className="round-filter-group">
          <label>
            Patient Name
          </label>

          <input
            type="text"
            name="patientName"
            value={filters.patientName}
            onChange={onChange}
            placeholder="Patient Name"
          />
        </div>

        <div className="round-filter-group">
          <label>
            Doctor
          </label>

          <input
            type="text"
            name="doctor"
            value={filters.doctor}
            onChange={onChange}
            placeholder="Doctor Name"
          />
        </div>

        <div className="round-filter-group">
          <label>
            Status
          </label>

          <select
            name="status"
            value={filters.status}
            onChange={onChange}
          >
            <option value="">
              All Status
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Pending">
              Pending
            </option>
          </select>
        </div>

        <div className="round-filter-group">
          <label>
            Search
          </label>

          <div className="round-search-box">

            <SearchOutlinedIcon />

            <input
              type="text"
              name="search"
              value={filters.search || ""}
              onChange={onChange}
              placeholder="Patient / UHID"
            />

          </div>
        </div>

      </div>

      <button
        className="round-refresh-btn"
        onClick={handleRefresh}
      >
        <RefreshOutlinedIcon />
        Refresh
      </button>

    </div>
  );
};

export default RoundFilters;