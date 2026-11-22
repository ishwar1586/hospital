import "@/master_modules/IPD/styles/admissionfilter.css";

const AdmissionFilters = ({
  filters = {
    ipdNo: "",
    uhid: "",
    patientName: "",
    doctor: "",
    ward: "",
    status: "",
  },
  onChange,
  onSearch,
  onReset,
  onExport,
  onAddAdmission,

}) => {
  return (
    <div className="admission-filters-container">
      <div className="filters-grid">

        <div className="filter-group">
          <label>IPD No</label>
          <input
            type="text"
            name="ipdNo"
            value={filters.ipdNo}
            onChange={onChange}
            placeholder="Enter IPD No"
          />
        </div>

        <div className="filter-group">
          <label>UHID</label>
          <input
            type="text"
            name="uhid"
            value={filters.uhid}
            onChange={onChange}
            placeholder="Enter UHID"
          />
        </div>

        <div className="filter-group">
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={filters.patientName}
            onChange={onChange}
            placeholder="Patient Name"
          />
        </div>

        <div className="filter-group">
          <label>Doctor</label>
          <input
            type="text"
            name="doctor"
            value={filters.doctor}
            onChange={onChange}
            placeholder="Doctor Name"
          />
        </div>

        <div className="filter-group">
          <label>Ward</label>
          <select
            name="ward"
            value={filters.ward}
            onChange={onChange}
          >
            <option value="">All Wards</option>
            <option value="General Ward">
              General Ward
            </option>
            <option value="Private Ward">
              Private Ward
            </option>
            <option value="ICU">
              ICU
            </option>
          </select>
        </div>

        <div className="filter-group">
          <label>Status</label>
          <select
            name="status"
            value={filters.status}
            onChange={onChange}
          >
            <option value="">All Status</option>
            <option value="Admitted">
              Admitted
            </option>
            <option value="Pending Discharge">
              Pending Discharge
            </option>
            <option value="Discharged">
              Discharged
            </option>
          </select>
        </div>
      </div>

      <div className="filter-actions">

        <button
          className="btn btn-search"
          onClick={onSearch}
        >
          Search
        </button>

        <button
          className="btn btn-reset"
          onClick={onReset}
        >
          Reset
        </button>

        <button
          className="btn btn-export"
          onClick={onExport}
        >
          Export
        </button>

        <button
          className="btn btn-add"
          onClick={onAddAdmission}
        >
          + New Admission
        </button>

      </div>
    </div>
  );
};

export default AdmissionFilters;