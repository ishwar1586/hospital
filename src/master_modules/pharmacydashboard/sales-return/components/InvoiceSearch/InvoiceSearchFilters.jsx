import {
    SearchOutlined,
    RestartAltOutlined,
    ReceiptLongOutlined,
    PersonOutlineOutlined,
    CalendarMonthOutlined,
    PaymentsOutlined,
} from "@mui/icons-material";

import "./InvoiceSearch.css";

const InvoiceSearchFilters = ({
    filters,
    onChange,
    onSearch,
    onReset,
}) => {

    return (

        <div className="invoice-search-filters">

            <div className="filter-group">

                <label>

                    <ReceiptLongOutlined fontSize="small"/>

                    Invoice No

                </label>

                <input
                    type="text"
                    name="invoiceNo"
                    placeholder="Search Invoice"
                    value={filters.invoiceNo}
                    onChange={onChange}
                />

            </div>

            <div className="filter-group">

                <label>

                    <PersonOutlineOutlined fontSize="small"/>

                    Patient

                </label>

                <input
                    type="text"
                    name="patientName"
                    placeholder="Patient Name"
                    value={filters.patientName}
                    onChange={onChange}
                />

            </div>

            <div className="filter-group">

                <label>

                    <CalendarMonthOutlined fontSize="small"/>

                    From

                </label>

                <input
                    type="date"
                    name="fromDate"
                    value={filters.fromDate}
                    onChange={onChange}
                />

            </div>

            <div className="filter-group">

                <label>

                    <CalendarMonthOutlined fontSize="small"/>

                    To

                </label>

                <input
                    type="date"
                    name="toDate"
                    value={filters.toDate}
                    onChange={onChange}
                />

            </div>

            <div className="filter-group">

                <label>

                    <PaymentsOutlined fontSize="small"/>

                    Payment

                </label>

                <select
                    name="paymentMode"
                    value={filters.paymentMode}
                    onChange={onChange}
                >

                    <option value="">
                        All
                    </option>

                    <option value="Cash">
                        Cash
                    </option>

                    <option value="Card">
                        Card
                    </option>

                    <option value="UPI">
                        UPI
                    </option>

                    <option value="Insurance">
                        Insurance
                    </option>

                </select>

            </div>

            <div className="filter-actions">

                <button
                    className="search-btn"
                    onClick={onSearch}
                >

                    <SearchOutlined/>

                    Search

                </button>

                <button
                    className="reset-btn"
                    onClick={onReset}
                >

                    <RestartAltOutlined/>

                    Reset

                </button>

            </div>

        </div>

    );

};

export default InvoiceSearchFilters;