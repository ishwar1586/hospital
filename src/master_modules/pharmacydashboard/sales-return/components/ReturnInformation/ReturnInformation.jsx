import {
    AssignmentReturnOutlined,
    CalendarMonthOutlined,
    PersonOutlined,
    ReceiptLongOutlined,
    ReportProblemOutlined,
    NotesOutlined,
    SearchOutlined,
} from "@mui/icons-material";

import {
    returnReasonOptions,
    returnTypeOptions,
} from "../../config/returnFormConfig";

import "./ReturnInformation.css";

const ReturnInformation = ({
    formData,
    handleChange,
    onSearchInvoice,
}) => {

    return (

        <div className="return-information-card">

            <div className="card-header">

                <div className="card-title">

                    <AssignmentReturnOutlined />

                    <h3>

                        Return Information

                    </h3>

                </div>

            </div>

            <div className="return-form-grid">

                {/* Return Type */}

                <div className="form-group">

                    <label>

                        <AssignmentReturnOutlined fontSize="small" />

                        Return Type

                    </label>

                    <select

                        name="returnType"

                        value={formData.returnType}

                        onChange={handleChange}

                    >

                        <option value="">

                            Select Return Type

                        </option>

                        {

                            returnTypeOptions.map((item) => (

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

                {/* Return Date */}

                <div className="form-group">

                    <label>

                        <CalendarMonthOutlined fontSize="small" />

                        Return Date

                    </label>

                    <input

                        type="date"

                        name="returnDate"

                        value={formData.returnDate}

                        onChange={handleChange}

                    />

                </div>

                {/* Customer */}

                <div className="form-group">

                    <label>

                        <PersonOutlined fontSize="small" />

                        Customer

                    </label>

                    <input

                        type="text"

                        name="customer"

                        value={formData.customer}

                        placeholder="Auto Filled"

                        readOnly

                    />

                </div>

                {/* Invoice */}

                <div className="form-group">

                    <label>

                        <ReceiptLongOutlined fontSize="small" />

                        Reference Invoice

                    </label>

                    <div className="invoice-search-box">

                        <input

                            type="text"

                            name="invoiceNo"

                            value={formData.invoiceNo}

                            placeholder="Select Invoice"

                            readOnly

                        />

                        <button

                            type="button"

                            className="invoice-search-btn"

                            onClick={onSearchInvoice}

                        >

                            <SearchOutlined />

                            Search

                        </button>

                    </div>

                </div>

                {/* Reason */}

                <div className="form-group">

                    <label>

                        <ReportProblemOutlined fontSize="small" />

                        Return Reason

                    </label>

                    <select

                        name="returnReason"

                        value={formData.returnReason}

                        onChange={handleChange}

                    >

                        <option value="">

                            Select Reason

                        </option>

                        {

                            returnReasonOptions.map((item) => (

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

                {/* Notes */}

                <div className="form-group full-width">

                    <label>

                        <NotesOutlined fontSize="small" />

                        Return Note

                    </label>

                    <textarea

                        rows="4"

                        name="returnNote"

                        value={formData.returnNote}

                        placeholder="Write remarks..."

                        onChange={handleChange}

                    />

                </div>

            </div>

        </div>

    );

};

export default ReturnInformation;