import {

    useEffect,

    useMemo,

    useState,

} from "react";

import "@/master_modules/pharmacydashboard/posBilling/components/MedicineSelection/components/ManualMode/ManualMode.css";

/* ===========================================================
Components
=========================================================== */

import MedicineToolbar
from "../MedicineToolbar/MedicineToolbar";

import MedicineCatalog
from "../MedicineCatalog/MedicineCatalog";

/* ===========================================================
Services
=========================================================== */

import {

    getMedicineCatalog,

} from "../MedicineCatalog/services/medicineCatalog.service";

/* ===========================================================
Component
=========================================================== */

const ManualMode = ({

    customerType,

    walkInCustomer,

    cartItems = [],

    onAddMedicine,

}) => {

    /* ===========================================================
       Search
    =========================================================== */

    const [

        searchText,

        setSearchText,

    ] = useState("");

    /* ===========================================================
       Category
    =========================================================== */

    const [

        activeCategory,

        setActiveCategory,

    ] = useState("all");

    /* ===========================================================
       Medicines
    =========================================================== */

    const [

        medicines,

        setMedicines,

    ] = useState([]);

    /* ===========================================================
       Load Medicine Catalog
    =========================================================== */

    useEffect(() => {

        const data =

            getMedicineCatalog();

        setMedicines(

            Array.isArray(data)

                ? data

                : []

        );

    }, []);

    /* ===========================================================
       Filter Medicines
    =========================================================== */

    const filteredMedicines = useMemo(() => {

        let data = [...medicines];

        /* -----------------------------------------
           Search
        ----------------------------------------- */

        if (

            searchText.trim()

        ) {

            const keyword =

                searchText

                    .trim()

                    .toLowerCase();

            data = data.filter(

                (medicine) =>

                    medicine.medicineName

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    medicine.genericName

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    medicine.manufacturer

                        ?.toLowerCase()

                        .includes(keyword)

                    ||

                    medicine.medicineCode

                        ?.toLowerCase()

                        .includes(keyword)

            );

        }

        /* -----------------------------------------
           Category
        ----------------------------------------- */

        if (

            activeCategory !== "all"

        ) {

            data = data.filter(

                (medicine) =>

                    medicine.category

                        ?.toLowerCase()

                        .replace(/\s+/g, "-")

                    ===

                    activeCategory

            );

        }

        return data;

    }, [

        medicines,

        searchText,

        activeCategory,

    ]);

    /* ===========================================================
       Refresh
    =========================================================== */

    const handleRefresh = () => {

        setSearchText("");

        setActiveCategory("all");

    };

    /* ===========================================================
       Customer Details
    =========================================================== */

    const customer =

        walkInCustomer || {};

    const customerName =

        customer.customerName ||

        "Cash Customer";

    const customerMobile =

        customer.mobile ||

        "-";

    const customerGender =

        customer.gender ||

        "-";

    const customerAge =

        customer.age ||

        "-";

    const customerGST =

        customer.gstNumber ||

        "-";

    const customerLabel =

        customer.customerType ===

        "CASH_CUSTOMER"

            ? "Cash Customer"

            : "Walk-in Customer";

    /* ===========================================================
       Statistics
    =========================================================== */

    const totalMedicines =

        medicines.length;

    const filteredCount =

        filteredMedicines.length;

    const cartCount =

        cartItems.length;

    const customerCount =

        walkInCustomer

            ? 1

            : 0;


                /* ===========================================================
       Render
    =========================================================== */

    return (

        <section className="manual-mode">

            {/* ==========================================
                Manual Billing Banner
            ========================================== */}

            <div className="manual-mode-banner">

                <div className="manual-mode-banner-left">

                    <span className="manual-mode-badge">

                        Manual Billing

                    </span>

                    <h2>

                        Manual Medicine Billing

                    </h2>

                    <p>

                        Search medicines from pharmacy inventory,
                        verify customer information and add medicines
                        directly to the billing cart.

                    </p>

                </div>

                <div className="manual-mode-banner-right">

                    <div className="manual-mode-stat">

                        <span>

                            Total Medicines

                        </span>

                        <strong>

                            {totalMedicines}

                        </strong>

                    </div>

                    <div className="manual-mode-stat">

                        <span>

                            Search Result

                        </span>

                        <strong>

                            {filteredCount}

                        </strong>

                    </div>

                    <div className="manual-mode-stat">

                        <span>

                            Cart Items

                        </span>

                        <strong>

                            {cartCount}

                        </strong>

                    </div>

                    <div className="manual-mode-stat">

                        <span>

                            Customer

                        </span>

                        <strong>

                            {customerCount}

                        </strong>

                    </div>

                </div>

            </div>

            {/* ==========================================
                Customer Summary
            ========================================== */}

            <div className="manual-customer-card">

                <div className="manual-customer-header">

                    <div>

                        <h3>

                            Customer Information

                        </h3>

                        <p>

                            Billing customer details

                        </p>

                    </div>

                    <span className="customer-type-chip">

                        {customerLabel}

                    </span>

                </div>

                <div className="manual-customer-grid">

                    <div className="manual-customer-item">

                        <label>

                            Customer Name

                        </label>

                        <span>

                            {customerName}

                        </span>

                    </div>

                    <div className="manual-customer-item">

                        <label>

                            Mobile Number

                        </label>

                        <span>

                            {customerMobile}

                        </span>

                    </div>

                    <div className="manual-customer-item">

                        <label>

                            Gender

                        </label>

                        <span>

                            {customerGender}

                        </span>

                    </div>

                    <div className="manual-customer-item">

                        <label>

                            Age

                        </label>

                        <span>

                            {customerAge}

                        </span>

                    </div>

                    <div className="manual-customer-item">

                        <label>

                            GST Number

                        </label>

                        <span>

                            {customerGST}

                        </span>

                    </div>

                    <div className="manual-customer-item">

                        <label>

                            Billing Mode

                        </label>

                        <span>

                            Manual Billing

                        </span>

                    </div>

                </div>

            </div>

            {/* ==========================================
                Toolbar
            ========================================== */}

            <MedicineToolbar

                searchText={

                    searchText

                }

                onSearchChange={

                    setSearchText

                }

                cartCount={

                    cartItems.length

                }

                onRefresh={

                    handleRefresh

                }

            />


                        {/* ==========================================
                Medicine Catalog
            ========================================== */}

            {

                filteredMedicines.length > 0 ? (

                    <MedicineCatalog

                        medicines={

                            filteredMedicines

                        }

                        cartItems={

                            cartItems

                        }

                        activeCategory={

                            activeCategory

                        }

                        searchText={

                            searchText

                        }

                        onSearchChange={

                            setSearchText

                        }

                        onCategoryChange={

                            setActiveCategory

                        }

                        onQuickAdd={() => {

                            console.log(

                                "Quick Add"

                            );

                        }}

                        onViewAll={() => {

                            setActiveCategory(

                                "all"

                            );

                            setSearchText("");

                        }}

                        onAddMedicine={

                            onAddMedicine

                        }

                    />

                ) : (

                    <div className="manual-empty-state">

                        <div className="manual-empty-icon">

                            💊

                        </div>

                        <h3>

                            No Medicines Found

                        </h3>

                        <p>

                            No medicines matched your current
                            search or selected category.

                        </p>

                        <button

                            className="manual-reset-btn"

                            onClick={handleRefresh}

                        >

                            Reset Filters

                        </button>

                    </div>

                )

            }

        </section>

    );

};

export default ManualMode;