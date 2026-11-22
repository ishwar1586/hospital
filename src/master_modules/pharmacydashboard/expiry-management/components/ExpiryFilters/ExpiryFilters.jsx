import {
    SearchOutlined,
    RestartAltOutlined,
    CalendarMonthOutlined,
} from "@mui/icons-material";

import {

    expiryStatusOptions,

    categoryOptions,

    warehouseOptions,

} from "../../config/expiryFilters";

import "./ExpiryFilters.css";

const ExpiryFilters = ({

    filters,

    onChange,

    onReset,

}) => {

    return (

        <div className="expiry-filter-card">

            <div className="expiry-filter-grid">

                {/* Search */}

                <div className="search-group">

                    <SearchOutlined />

                    <input

                        type="text"

                        name="search"

                        placeholder="Search by medicine, batch, HSN, supplier..."

                        value={filters.search}

                        onChange={onChange}

                    />

                </div>

                {/* Status */}

                <select

                    name="status"

                    value={filters.status}

                    onChange={onChange}

                >

                    {

                        expiryStatusOptions.map((item)=>(

                            <option

                                key={item.value}

                                value={item.value}

                            >

                                {item.label}

                            </option>

                        ))

                    }

                </select>

                {/* Date */}

                <div className="date-input">

                    <CalendarMonthOutlined />

                    <input

                        type="date"

                        name="dateRange"

                        value={filters.dateRange}

                        onChange={onChange}

                    />

                </div>

                {/* Category */}

                <select

                    name="category"

                    value={filters.category}

                    onChange={onChange}

                >

                    {

                        categoryOptions.map((item)=>(

                            <option

                                key={item.value}

                                value={item.value}

                            >

                                {item.label}

                            </option>

                        ))

                    }

                </select>

                {/* Warehouse */}

                <select

                    name="warehouse"

                    value={filters.warehouse}

                    onChange={onChange}

                >

                    {

                        warehouseOptions.map((item)=>(

                            <option

                                key={item.value}

                                value={item.value}

                            >

                                {item.label}

                            </option>

                        ))

                    }

                </select>

                {/* Reset */}

                <button

                    type="button"

                    className="reset-filter-btn"

                    onClick={onReset}

                >

                    <RestartAltOutlined />

                    Reset

                </button>

            </div>

        </div>

    );

};

export default ExpiryFilters;