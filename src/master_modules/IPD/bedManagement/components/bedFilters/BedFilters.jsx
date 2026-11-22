import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "@/master_modules/IPD/bedManagement/styles/bedfilters.css";

const BedFilters = ({
  filters,
  onChange,
}) => {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="bed-filters-card">

      <div className="bed-filters-grid">

        <div className="bed-filter-group">
          <label>Ward</label>

          <select
            name="ward"
            value={filters.ward}
            onChange={onChange}
          >
            <option value="">
              All Wards
            </option>

            <option value="General Ward">
              General Ward
            </option>

            <option value="Semi Private">
              Semi Private
            </option>

            <option value="Private">
              Private
            </option>

            <option value="ICU">
              ICU
            </option>

            <option value="Deluxe">
              Deluxe
            </option>

            <option value="Maternity">
              Maternity
            </option>

          </select>
        </div>

        <div className="bed-filter-group">
          <label>Room</label>

          <input
            type="text"
            name="room"
            value={filters.room}
            onChange={onChange}
            placeholder="Search Room"
          />
        </div>

        <div className="bed-filter-group">
          <label>Status</label>

          <select
            name="status"
            value={filters.status}
            onChange={onChange}
          >
            <option value="">
              All Status
            </option>

            <option value="Available">
              Available
            </option>

            <option value="Occupied">
              Occupied
            </option>

            <option value="Reserved">
              Reserved
            </option>

            <option value="Maintenance">
              Maintenance
            </option>

          </select>
        </div>

        <div className="bed-filter-group">
          <label>
            Search Bed
          </label>

          <div className="bed-search-box">

            <SearchOutlinedIcon />

            <input
              type="text"
              name="search"
              value={filters.search}
              onChange={onChange}
              placeholder="Bed No / Patient Name"
            />

          </div>
        </div>

      </div>

      <button
        className="bed-refresh-btn"
        onClick={handleRefresh}
      >
        <RefreshOutlinedIcon />

        Refresh
      </button>

    </div>
  );
};

export default BedFilters;