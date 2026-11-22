import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/dischargefilters.css";

const DischargeFilters = ({
  filters,
  onChange,
}) => {




  return (

    <div className="discharge-filters-card">

      <div className="filter-group">

        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={onChange}
          className="filter-input"
        />

      </div>

      <div className="filter-group">

        <select
          name="status"
          value={filters.status}
          onChange={onChange}
          className="filter-select"
        >

          <option value="">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Approved">
            Approved
          </option>

          <option value="Ready">
            Ready To Discharge
          </option>

          <option value="Completed">
            Discharged
          </option>

        </select>

      </div>

      <div className="filter-group">

        <select
          name="doctor"
          value={filters.doctor}
          onChange={onChange}
          className="filter-select"
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

          <option value="Dr. Ankit Verma">
            Dr. Ankit Verma
          </option>

          <option value="Dr. Pooja Gupta">
            Dr. Pooja Gupta
          </option>

        </select>

      </div>

      <div className="filter-group">

        <select
          name="department"
          value={filters.department}
          onChange={onChange}
          className="filter-select"
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

        </select>

      </div>

      <div className="search-box">

        <SearchOutlinedIcon />

        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={onChange}
          placeholder="Search patient, IPD No..."
        />

      </div>

      <button className="filter-btn">

        <FilterListOutlinedIcon />

        Filters

      </button>

    </div>

  );

};

export default DischargeFilters;