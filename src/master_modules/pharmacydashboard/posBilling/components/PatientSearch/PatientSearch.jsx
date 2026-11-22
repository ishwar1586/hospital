import "./PatientSearch.css";

import {
    SearchOutlined,
    QrCodeScannerOutlined,
    PersonSearchOutlined,
    ClearOutlined,
} from "@mui/icons-material";

const PatientSearch = ({

    customerType = "walkin",

    searchValue = "",

    onSearch = () => {},

    onBarcode = () => {},

}) => {

    /* ==========================================
       Walk-in Customer
    ========================================== */

    if (customerType === "walkin") {

        return (

            <section className="patient-search walkin">

                <div className="walkin-content">

                    <PersonSearchOutlined />

                    <div>

                        <h3>

                            Walk-in Customer

                        </h3>

                        <p>

                            No patient search is required.
                            Proceed directly with medicine billing.

                        </p>

                    </div>

                </div>

            </section>

        );

    }

    /* ==========================================
       Dynamic Placeholder
    ========================================== */

    const placeholders = {

        opd:
            "Search by UHID / Patient Name / Mobile / OPD No.",

        ipd:
            "Search by Admission No. / UHID / Patient Name",

        staff:
            "Search by Employee ID / Name",

    };

    /* ==========================================
       Input Change
    ========================================== */

    const handleChange = (e) => {

        onSearch({

            target: {

                value: e.target.value.trimStart(),

            },

        });

    };

    /* ==========================================
       Clear Search
    ========================================== */

    const handleClear = () => {

        onSearch({

            target: {

                value: "",

            },

        });

    };

    /* ==========================================
       Enter Key
    ========================================== */

    const handleKeyDown = (e) => {

        if (e.key === "Enter") {

            e.preventDefault();

        }

    };

    return (

        <section className="patient-search">

            {/* ========================================== */}
            {/* Header */}
            {/* ========================================== */}

            <div className="patient-search-header">

                <h3>

                    Patient Search

                </h3>

                <p>

                    Search patient using UHID, Mobile, OPD/IPD Number or Name.

                </p>

            </div>

            {/* ========================================== */}
            {/* Body */}
            {/* ========================================== */}

            <div className="patient-search-body">

                {/* Search Box */}

                <div className="patient-search-box">

                    <SearchOutlined className="search-icon" />

                    <input

                        type="text"

                        autoComplete="off"

                        autoFocus

                        maxLength={100}

                        value={searchValue}

                        placeholder={

                            placeholders[customerType] ||

                            "Search Patient"

                        }

                        onChange={handleChange}

                        onKeyDown={handleKeyDown}

                    />

                    {

                        searchValue && (

                            <button

                                type="button"

                                className="clear-search-btn"

                                onClick={handleClear}

                            >

                                <ClearOutlined />

                            </button>

                        )

                    }

                </div>

                {/* Barcode */}

                <button

                    type="button"

                    className="barcode-btn"

                    onClick={onBarcode}

                >

                    <QrCodeScannerOutlined />

                    <span>

                        Scan Card

                    </span>

                </button>

            </div>

        </section>

    );

};

export default PatientSearch;