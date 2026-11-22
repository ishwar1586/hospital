import {

    useEffect,

    useMemo,

    useState,

} from "react";

import "./PrescriptionMode.css";

/* ===========================================================
Components
=========================================================== */

import PrescriptionBanner
from "../PrescriptionBanner/PrescriptionBanner";

import PrescriptionProgress
from "../MedicineCatalog/components/PrescriptionProgress/PrescriptionProgress";

import MedicineToolbar
from "../MedicineToolbar/MedicineToolbar";

import MedicineCatalog
from "../MedicineCatalog/MedicineCatalog";

/* ===========================================================
Component
=========================================================== */

const PrescriptionMode = ({

    prescriptionData,

    cartItems = [],

    prescriptionCompleted,

    onAddMedicine,

    onGoToBilling,

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
       Load Prescription Medicines
    =========================================================== */

    useEffect(() => {

        if (

            prescriptionData?.medicines

        ) {

            setMedicines(

                prescriptionData.medicines

            );

        }

        else {

            setMedicines([]);

        }

    }, [

        prescriptionData,

    ]);

    /* ===========================================================
       Progress
    =========================================================== */

    const totalMedicines =

        medicines.length;

    const addedMedicines =

        cartItems.length;

            /* ===========================================================
       Filter Medicines
    =========================================================== */

    const filteredMedicines = useMemo(() => {

        let data = [...medicines];

        /* -----------------------------------------
           Search Filter
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
           Category Filter
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
       Empty State
    =========================================================== */

    if (

        !prescriptionData

    ) {

        return (

            <section className="medicine-selection-empty">

                <h2>

                    No Prescription Loaded

                </h2>

                <p>

                    Please load a patient prescription
                    to continue medicine dispensing.

                </p>

            </section>

        );

    }


        /* ===========================================================
       Render
    =========================================================== */

    return (

        <section className="prescription-mode">

            {/* ==========================================
                Prescription Banner
            ========================================== */}

            <PrescriptionBanner

                prescriptionData={

                    prescriptionData

                }

            />

            {/* ==========================================
                Prescription Progress
            ========================================== */}

            <PrescriptionProgress

                totalMedicines={

                    totalMedicines

                }

                addedMedicines={

                    addedMedicines

                }

            />

            {/* ==========================================
                Medicine Toolbar
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

                    console.log(

                        "View All"

                    );

                }}

                onAddMedicine={

                    onAddMedicine

                }

            />

        </section>

    );

};

export default PrescriptionMode;