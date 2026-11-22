// import { useState } from "react";

// import "@/master_modules/pharmacydashboard/expiry-management/styles/ExpiryManagement.css";

// import ExpiryStats from "../components/ExpiryStats/ExpiryStats";
// import ExpiryFilters from "../components/ExpiryFilters/ExpiryFilters";
// // import ExpiryTabs from "../components/ExpiryTabs/ExpiryTabs";
// // import ExpiryTable from "../components/ExpiryTable/ExpiryTable";
// // import ExpiryDrawer from "../components/ExpiryDrawer/ExpiryDrawer";

// const ExpiryManagement = () => {

//     /* ==========================================================
//        Drawer
//     ========================================================== */

//     // const [drawerOpen, setDrawerOpen] = useState(false);

//     // const [selectedMedicine, setSelectedMedicine] = useState(null);

//     /* ==========================================================
//        Filters
//     ========================================================== */

//     const [filters, setFilters] = useState({

//         search: "",

//         status: "All",

//         dateRange: "",

//         category: "All",

//         warehouse: "All",

//     });


//     const handleResetFilters = () => {

//     setFilters({

//         search: "",

//         status: "All",

//         dateRange: "",

//         category: "All",

//         warehouse: "All",

//     });

// };

//     /* ==========================================================
//        Tabs
//     ========================================================== */

//     // const [activeTab, setActiveTab] = useState("All");

//     /* ==========================================================
//        Drawer Handlers
//     ========================================================== */

//     // const handleViewMedicine = (medicine) => {

//     //     setSelectedMedicine(medicine);

//     //     setDrawerOpen(true);

//     // };

//     // const handleCloseDrawer = () => {

//     //     setDrawerOpen(false);

//     //     setSelectedMedicine(null);

//     // };

//     /* ==========================================================
//        Filter Change
//     ========================================================== */

//     const handleFilterChange = (event) => {

//         const { name, value } = event.target;

//         setFilters((prev) => ({

//             ...prev,

//             [name]: value,

//         }));

//     };

//     return (

//         <div className="expiry-management-page">

//             {/* ======================================================
//                 Header
//             ====================================================== */}

//             <div className="expiry-header">

//                 <div>

//                     <h1>

//                         Expiry Management

//                     </h1>

//                     <p>

//                         Monitor and manage medicine expiry to minimize stock loss.

//                     </p>

//                 </div>

//             </div>

//             {/* ======================================================
//                 Stats
//             ====================================================== */}

//             <ExpiryStats />

//             {/* ======================================================
//                 Filters
//             ====================================================== */}

//             <ExpiryFilters

//                 filters={filters}

//                 onChange={handleFilterChange}

//                 onReset={handleResetFilters}

//             />

//             {/* ======================================================
//                 Tabs
//             ====================================================== */}

//             {/* <ExpiryTabs

//                 activeTab={activeTab}

//                 onChange={setActiveTab}

//             /> */}

//             {/* ======================================================
//                 Table
//             ====================================================== */}

//             {/* <ExpiryTable

//                 activeTab={activeTab}

//                 filters={filters}

//                 onView={handleViewMedicine}

//             /> */}

//             {/* ======================================================
//                 Drawer
//             ====================================================== */}

//             {/* <ExpiryDrawer

//                 open={drawerOpen}

//                 data={selectedMedicine}

//                 onClose={handleCloseDrawer}

//             /> */}

//         </div>

//     );

// };

// export default ExpiryManagement;



import { useMemo, useState } from "react";

import "@/master_modules/pharmacydashboard/expiry-management/styles/ExpiryManagement.css";

import ExpiryStats from "../components/ExpiryStats/ExpiryStats";
import ExpiryFilters from "../components/ExpiryFilters/ExpiryFilters";
import ExpiryTabs from "../components/ExpiryTabs/ExpiryTabs";
import ExpiryTable from "../components/ExpiryTable/ExpiryTable";
import ExpiryDrawer from "../components/ExpiryDrawer/ExpiryDrawer";

import expiryMock from "../mock/expiry.mock";

const ExpiryManagement = () => {

    /* ==========================================================
       Drawer
    ========================================================== */

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [selectedMedicine, setSelectedMedicine] = useState(null);

    /* ==========================================================
       Filters
    ========================================================== */

    const [filters, setFilters] = useState({

        search: "",

        status: "All",

        dateRange: "",

        category: "All",

        warehouse: "All",

    });

    /* ==========================================================
       Tabs
    ========================================================== */

    const [activeTab, setActiveTab] = useState("All");

    /* ==========================================================
       Pagination
    ========================================================== */

    const [currentPage, setCurrentPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    /* ==========================================================
       Filter Change
    ========================================================== */

    const handleFilterChange = (event) => {

        const { name, value } = event.target;

        setFilters((prev) => ({

            ...prev,

            [name]: value,

        }));

        setCurrentPage(1);

    };

    /* ==========================================================
       Reset Filters
    ========================================================== */

    const handleResetFilters = () => {

        setFilters({

            search: "",

            status: "All",

            dateRange: "",

            category: "All",

            warehouse: "All",

        });

        setActiveTab("All");

        setCurrentPage(1);

    };

    /* ==========================================================
       Drawer
    ========================================================== */

    const handleViewMedicine = (medicine) => {

        setSelectedMedicine(medicine);

        setDrawerOpen(true);

    };

    const handleCloseDrawer = () => {

        setDrawerOpen(false);

        setSelectedMedicine(null);

    };

    /* ==========================================================
       Rows Per Page
    ========================================================== */

    const handleRowsPerPageChange = (event) => {

        setRowsPerPage(

            parseInt(event.target.value, 10)

        );

        setCurrentPage(1);

    };

    /* ==========================================================
       Filter Medicines
    ========================================================== */

    const filteredMedicines = useMemo(() => {

        return expiryMock.filter((medicine) => {

            const searchMatch =

                medicine.medicineName
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())

                ||

                medicine.batchNo
                    .toLowerCase()
                    .includes(filters.search.toLowerCase());

            const statusMatch =

                filters.status === "All"

                ||

                medicine.status === filters.status;

            const categoryMatch =

                filters.category === "All"

                ||

                medicine.category === filters.category;

            const warehouseMatch =

                filters.warehouse === "All"

                ||

                medicine.warehouse === filters.warehouse;

            const tabMatch =

                activeTab === "All"

                ||

                medicine.status === activeTab;

            return (

                searchMatch &&

                statusMatch &&

                categoryMatch &&

                warehouseMatch &&

                tabMatch

            );

        });

    }, [filters, activeTab]);

    /* ==========================================================
       Pagination Data
    ========================================================== */

    const paginatedMedicines = filteredMedicines.slice(

        (currentPage - 1) * rowsPerPage,

        currentPage * rowsPerPage

    );

    return (

    <div className="expiry-management-page">

        {/* ======================================================
            Header
        ====================================================== */}

        <div className="expiry-header">

            <div>

                <h1>

                    Expiry Management

                </h1>

                <p>

                    Monitor, track and manage medicine expiry to reduce inventory loss.

                </p>

            </div>

        </div>

        {/* ======================================================
            Stats
        ====================================================== */}

        <ExpiryStats />

        {/* ======================================================
            Filters
        ====================================================== */}

        <ExpiryFilters

            filters={filters}

            onChange={handleFilterChange}

            onReset={handleResetFilters}

        />

        {/* ======================================================
            Tabs
        ====================================================== */}

        <ExpiryTabs

            activeTab={activeTab}

            onChange={(tab) => {

                setActiveTab(tab);

                setCurrentPage(1);

            }}

        />

        {/* ======================================================
            Table
        ====================================================== */}

        <ExpiryTable

            data={paginatedMedicines}

            page={currentPage}

            rowsPerPage={rowsPerPage}

            totalRows={filteredMedicines.length}

            onPageChange={setCurrentPage}

            onRowsPerPageChange={handleRowsPerPageChange}

            onView={handleViewMedicine}

        />

        {/* ======================================================
            Drawer
        ====================================================== */}

        <ExpiryDrawer

            open={drawerOpen}

            data={selectedMedicine}

            onClose={handleCloseDrawer}

        />

    </div>

);

};

export default ExpiryManagement;