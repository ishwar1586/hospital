import {
    SearchOutlined,
    RestartAltOutlined,
    FilterAltOutlined,
    CalendarTodayOutlined,
    ClearOutlined,
} from "@mui/icons-material";

import {
    auditStatusOptions,
    auditTypeOptions,
    auditStoreOptions,
} from "../../config/auditFilters";

import "./AuditFilters.css";

const AuditFilters = ({

    filters,

    onChange,

    onReset,

}) => {

    const clearSearch = () => {

        onChange({

            target:{

                name:"search",

                value:"",

            },

        });

    };

    return (

        <div className="audit-filters-card">

            <div className="audit-filters-grid">

                {/* ==========================================
                    Search
                ========================================== */}

                <div className="audit-form-group search-column">

                    <label>

                        Search

                    </label>

                    <div className="audit-search-box">

                        <SearchOutlined className="search-icon"/>

                        <input

                            type="text"

                            name="search"

                            value={filters.search}

                            onChange={onChange}

                            placeholder="Search by audit no, store or auditor..."

                        />

                        {

                            filters.search && (

                                <button

                                    type="button"

                                    className="clear-search-btn"

                                    onClick={clearSearch}

                                >

                                    <ClearOutlined/>

                                </button>

                            )

                        }

                    </div>

                </div>

                {/* ==========================================
                    Audit Status
                ========================================== */}

                <div className="audit-form-group">

                    <label>

                        Audit Status

                    </label>

                    <select

                        name="status"

                        value={filters.status}

                        onChange={onChange}

                    >

                        {

                            auditStatusOptions.map((item)=>(

                                <option

                                    key={item.value}

                                    value={item.value}

                                >

                                    {item.label}

                                </option>

                            ))

                        }

                    </select>

                </div>

                {/* ==========================================
                    Audit Type
                ========================================== */}

                <div className="audit-form-group">

                    <label>

                        Audit Type

                    </label>

                    <select

                        name="auditType"

                        value={filters.auditType}

                        onChange={onChange}

                    >

                        {

                            auditTypeOptions.map((item)=>(

                                <option

                                    key={item.value}

                                    value={item.value}

                                >

                                    {item.label}

                                </option>

                            ))

                        }

                    </select>

                </div>


                                {/* ==========================================
                    Store
                ========================================== */}

                <div className="audit-form-group">

                    <label>

                        Store / Warehouse

                    </label>

                    <select

                        name="store"

                        value={filters.store}

                        onChange={onChange}

                    >

                        {

                            auditStoreOptions.map((item) => (

                                <option

                                    key={item.value}

                                    value={item.value}

                                >

                                    {item.label}

                                </option>

                            ))

                        }

                    </select>

                </div>

                {/* ==========================================
                    Audit Date
                ========================================== */}

                <div className="audit-form-group">

                    <label>

                        Audit Date

                    </label>

                    <div className="audit-date-box">

                        <input

                            type="date"

                            name="auditDate"

                            value={filters.auditDate}

                            onChange={onChange}

                        />

                        <CalendarTodayOutlined

                            className="calendar-icon"

                        />

                    </div>

                </div>

            </div>

            {/* ==========================================
                Footer Actions
            ========================================== */}

            <div className="audit-filter-footer">

                <button

                    type="button"

                    className="audit-filter-btn secondary"

                    onClick={onReset}

                >

                    <RestartAltOutlined />

                    Reset

                </button>

                <button

                    type="button"

                    className="audit-filter-btn primary"

                >

                    <FilterAltOutlined />

                    Apply Filters

                </button>

            </div>

        </div>

    );

};

export default AuditFilters;