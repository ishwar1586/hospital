import "./PurchaseFilters.css";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";

const PurchaseFilters = ({
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

    return (

        <div className="purchase-filters">

            <div className="purchase-search">

                <SearchOutlinedIcon />

                <input
                    type="text"
                    placeholder="Search by PO No., Supplier, Invoice No..."
                    value={
                        filters.search
                    }
                    onChange={(e) =>
                        handleChange(
                            "search",
                            e.target.value
                        )
                    }
                />

            </div>

            <div className="purchase-date-range">

                <input
                    type="date"
                    value={
                        filters.fromDate
                    }
                    onChange={(e) =>
                        handleChange(
                            "fromDate",
                            e.target.value
                        )
                    }
                />

                <span>
                    -
                </span>

                <input
                    type="date"
                    value={
                        filters.toDate
                    }
                    onChange={(e) =>
                        handleChange(
                            "toDate",
                            e.target.value
                        )
                    }
                />

            </div>

            <select
                value={
                    filters.status
                }
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

                <option value="Draft">
                    Draft
                </option>

                <option value="Pending">
                    Pending
                </option>

                <option value="Partially Received">
                    Partially Received
                </option>

                <option value="Completed">
                    Completed
                </option>

                <option value="Cancelled">
                    Cancelled
                </option>

            </select>

            <select
                value={
                    filters.supplier
                }
                onChange={(e) =>
                    handleChange(
                        "supplier",
                        e.target.value
                    )
                }
            >

                <option value="">
                    All Suppliers
                </option>

                <option value="Medicare Distributors">
                    Medicare Distributors
                </option>

                <option value="HealthCare Suppliers">
                    HealthCare Suppliers
                </option>

                <option value="LifeLine Enterprises">
                    LifeLine Enterprises
                </option>

            </select>

            <select
                value={
                    filters.poType
                }
                onChange={(e) =>
                    handleChange(
                        "poType",
                        e.target.value
                    )
                }
            >

                <option value="">
                    All Types
                </option>

                <option value="Regular">
                    Regular
                </option>

                <option value="Urgent">
                    Urgent
                </option>

            </select>

            {/* <button
                className="purchase-filter-btn"
            >

                <FilterListOutlinedIcon />

                More Filters

            </button> */}

            {/* <button
                className="purchase-column-btn"
            >

                <ViewColumnOutlinedIcon />

                Columns

            </button> */}

        </div>

    );
};

export default PurchaseFilters;