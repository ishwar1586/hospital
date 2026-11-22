import "./LedgerFilters.css";

// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const LedgerFilters = ({
    filters,
    setFilters,
    onApply,
    onExport,
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

        <div className="ledger-filters">

            <div className="filter-group">

                <label>
                    From Date
                </label>

                <div className="date-input-wrapper">

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

                    {/* <CalendarMonthOutlinedIcon /> */}

                </div>

            </div>

            <div className="filter-group">

                <label>
                    To Date
                </label>

                <div className="date-input-wrapper">

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

                    {/* <CalendarMonthOutlinedIcon /> */}

                </div>

            </div>

            <div className="filter-group">

                <label>
                    Transaction Type
                </label>

                <select
                    value={
                        filters.transactionType
                    }
                    onChange={(e) =>
                        handleChange(
                            "transactionType",
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        All Transactions
                    </option>

                    <option value="Opening Balance">
                        Opening Balance
                    </option>

                    <option value="Purchase Bill">
                        Purchase Bill
                    </option>

                    <option value="Payment">
                        Payment
                    </option>

                    <option value="Credit Note">
                        Credit Note
                    </option>

                    <option value="Debit Note">
                        Debit Note
                    </option>

                </select>

            </div>

            <div className="filter-actions">

                <button
                    className="apply-btn"
                    onClick={onApply}
                >
                    Apply
                </button>

                <button
                    className="export-btn"
                    onClick={onExport}
                >

                    <FileDownloadOutlinedIcon />

                    Export Excel

                </button>

            </div>

        </div>
    );
};

export default LedgerFilters;