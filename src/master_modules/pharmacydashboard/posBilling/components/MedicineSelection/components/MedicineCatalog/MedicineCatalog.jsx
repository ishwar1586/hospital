import {

    useEffect,

    useMemo,

    useState,

} from "react";

import "./MedicineCatalog.css";

/* ===========================================================
Components
=========================================================== */

import SearchHeader from "./components/SearchHeader/SearchHeader";

import CategoryTabs from "./components/CategoryTabs/CategoryTabs";

import SectionHeader from "./components/SectionHeader/SectionHeader";

import MedicineList from "./components/MedicineList/MedicineList";

import Pagination from "@/master_shared/components/Pagination/Pagination";

/* ===========================================================
Component
=========================================================== */

const MedicineCatalog = ({

    medicines = [],

    cartItems = [],

    activeCategory = "all",

    searchText = "",

    onSearchChange,

    onCategoryChange,

    onQuickAdd,

    onViewAll,

    onAddMedicine,

}) => {

    /* ===========================================================
       Pagination
    =========================================================== */

    const [

        page,

        setPage,

    ] = useState(1);

    const [

        rowsPerPage,

        setRowsPerPage,

    ] = useState(10);

    /* ===========================================================
       Reset Page
    =========================================================== */

    useEffect(() => {

        setPage(1);

    }, [

        searchText,

        activeCategory,

    ]);

    /* ===========================================================
       Pagination
    =========================================================== */

    const paginatedMedicines =

        useMemo(() => {

            const startIndex =

                (page - 1) *

                rowsPerPage;

            const endIndex =

                startIndex +

                rowsPerPage;

            return medicines.slice(

                startIndex,

                endIndex

            );

        }, [

            medicines,

            page,

            rowsPerPage,

        ]);

    /* ===========================================================
       Rows Per Page
    =========================================================== */

    const handleRowsPerPageChange = (

        event

    ) => {

        setRowsPerPage(

            parseInt(

                event.target.value,

                10

            )

        );

        setPage(1);

    };

        /* ===========================================================
       Render
    =========================================================== */

    return (

        <section className="medicine-catalog">

            {/* ==========================================
                Search Header
            ========================================== */}

            <SearchHeader

                searchText={

                    searchText

                }

                onSearchChange={

                    onSearchChange

                }

                onQuickAdd={

                    onQuickAdd

                }

            />

            {/* ==========================================
                Category Tabs
            ========================================== */}

            <CategoryTabs

                activeCategory={

                    activeCategory

                }

                onCategoryChange={

                    onCategoryChange

                }

            />

            {/* ==========================================
                Section Header
            ========================================== */}

            <SectionHeader

                title="Prescription Medicines"

                actionLabel="View All"

                onAction={

                    onViewAll

                }

            />

            {/* ==========================================
                Medicine List
            ========================================== */}

            <MedicineList

                medicines={

                    paginatedMedicines

                }

                cartItems={

                    cartItems

                }

                onAddMedicine={

                    onAddMedicine

                }

            />

            {/* ==========================================
                Empty State
            ========================================== */}

            {

                paginatedMedicines.length === 0 && (

                    <div className="medicine-catalog-empty">

                        <h3>

                            No Medicines Found

                        </h3>

                        <p>

                            No medicines matched your search
                            or selected category.

                        </p>

                    </div>

                )

            }


                        {/* ==========================================
                Pagination
            ========================================== */}

            <Pagination

                page={page}

                rowsPerPage={rowsPerPage}

                totalRows={medicines.length}

                onPageChange={(event, newPage) =>

                    setPage(newPage)

                }

                onRowsPerPageChange={

                    handleRowsPerPageChange

                }

            />

        </section>

    );

};

export default MedicineCatalog;