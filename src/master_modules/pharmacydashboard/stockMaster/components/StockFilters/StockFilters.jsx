import "./StockFilters.css";

import {
    SearchOutlined,
    CalendarTodayOutlined,
    RestartAltOutlined,
} from "@mui/icons-material";

const StockFilters = ({

    filters,

    setFilters,

}) => {

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFilters((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const handleReset = () => {

        setFilters({

            search: "",

            category: "All Categories",

            supplier: "All Suppliers",

            status: "All Status",

            stockStatus: "All Stock",

            expiryDate: "",

        });

    };

    return (

        <div className="stock-filter-card">

            <div className="stock-filter-row">

                {/* Search */}

                <div className="filter-item filter-search">

                    <label>

                        Search

                    </label>

                    <div className="search-box">

                        <SearchOutlined />

                        <input

                            type="text"

                            name="search"

                            placeholder="Search by medicine name, batch, HSN..."

                            value={filters.search}

                            onChange={handleChange}

                        />

                    </div>

                </div>

                {/* Category */}

                <div className="filter-item">

                    <label>

                        Category

                    </label>

                    <select

                        name="category"

                        value={filters.category}

                        onChange={handleChange}

                    >

                        <option>

                            All Categories

                        </option>

                        <option>

                            Analgesic

                        </option>

                        <option>

                            Antibiotic

                        </option>

                        <option>

                            Antihistamine

                        </option>

                        <option>

                            Gastric

                        </option>

                    </select>

                </div>

                {/* Supplier */}

                <div className="filter-item">

                    <label>

                        Supplier

                    </label>

                    <select

                        name="supplier"

                        value={filters.supplier}

                        onChange={handleChange}

                    >

                        <option>

                            All Suppliers

                        </option>

                        <option>

                            Medicare Distributors

                        </option>

                        <option>

                            LifeLine Enterprises

                        </option>

                        <option>

                            Global Healthcare

                        </option>

                    </select>

                </div>

                {/* Status */}

                <div className="filter-item">

                    <label>

                        Status

                    </label>

                    <select

                        name="status"

                        value={filters.status}

                        onChange={handleChange}

                    >

                        <option>

                            All Status

                        </option>

                        <option>

                            Active

                        </option>

                        <option>

                            Inactive

                        </option>

                    </select>

                </div>

                {/* Stock Status */}

                <div className="filter-item">

                    <label>

                        Stock Status

                    </label>

                    <select

                        name="stockStatus"

                        value={filters.stockStatus}

                        onChange={handleChange}

                    >

                        <option>

                            All Stock

                        </option>

                        <option>

                            In Stock

                        </option>

                        <option>

                            Low Stock

                        </option>

                        <option>

                            Out Of Stock

                        </option>

                        <option>

                            Near Expiry

                        </option>

                    </select>

                </div>

                {/* Expiry */}

                <div className="filter-item">

                    <label>

                        Expiry Date

                    </label>

                    <div className="date-box">

                        <input

                            type="date"

                            name="expiryDate"

                            value={filters.expiryDate}

                            onChange={handleChange}

                        />

                        <CalendarTodayOutlined />

                    </div>

                </div>

                {/* Reset */}

                <div className="filter-reset">

                    <button

                        type="button"

                        onClick={handleReset}

                    >

                        <RestartAltOutlined />

                        Reset

                    </button>

                </div>

            </div>

        </div>

    );

};

export default StockFilters;