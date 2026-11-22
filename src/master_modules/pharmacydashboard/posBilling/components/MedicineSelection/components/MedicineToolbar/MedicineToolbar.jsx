import "./MedicineToolbar.css";

import {
    SearchOutlined,
    QrCodeScannerOutlined,
    RefreshRounded,
    ShoppingCartOutlined,
    KeyboardOutlined,
} from "@mui/icons-material";

const MedicineToolbar = ({

    searchText = "",

    onSearchChange,

    prescriptionOnly = true,

    onPrescriptionToggle,

    cartCount = 0,

    onRefresh,

}) => {

    return (

        <section className="medicine-toolbar">

            {/* ================================================= */}
            {/* Search Section */}
            {/* ================================================= */}

            <div className="toolbar-search-section">

                <div className="toolbar-search">

                    <SearchOutlined className="toolbar-search-icon" />

                    <input

                        type="text"

                        placeholder="Search medicine by name, generic, code, manufacturer..."

                        value={searchText}

                        onChange={(event) =>

                            onSearchChange?.(

                                event.target.value

                            )

                        }

                    />

                    <div className="toolbar-shortcut">

                        <KeyboardOutlined />

                        <span>

                            Ctrl + K

                        </span>

                    </div>

                </div>

            </div>

            {/* ================================================= */}
            {/* Actions */}
            {/* ================================================= */}

            <div className="toolbar-actions">

                {/* Barcode */}

                <button

                    type="button"

                    className="toolbar-secondary-btn"

                >

                    <QrCodeScannerOutlined />

                    <span>

                        Scan Barcode

                    </span>

                </button>

                {/* Prescription Toggle */}

                <label className="toolbar-switch">

                    <input

                        type="checkbox"

                        checked={prescriptionOnly}

                        onChange={(event) =>

                            onPrescriptionToggle?.(

                                event.target.checked

                            )

                        }

                    />

                    <span className="toolbar-slider" />

                    <span className="toolbar-switch-text">

                        Prescription Only

                    </span>

                </label>

                {/* Refresh */}

                <button

                    type="button"

                    className="toolbar-primary-btn"

                    onClick={onRefresh}

                >

                    <RefreshRounded />

                    <span>

                        Refresh

                    </span>

                </button>

                {/* Cart */}

                <button

                    type="button"

                    className="toolbar-cart-btn"

                >

                    <ShoppingCartOutlined />

                    <span>

                        Cart

                    </span>

                    <div className="toolbar-cart-badge">

                        {cartCount}

                    </div>

                </button>

            </div>

        </section>

    );

};

export default MedicineToolbar;