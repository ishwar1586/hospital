import { useMemo, useState } from "react";

import "@/master_modules/pharmacydashboard/physical-stock-audit/styles/PhysicalStockAudit.css";

import AuditStats from "../components/AuditStats/AuditStats";
import AuditFilters from "../components/AuditFilters/AuditFilters";
import AuditTabs from "../components/AuditTabs/AuditTabs";
import AuditTable from "../components/AuditTable/AuditTable";
import AuditQuickActions from "../components/AuditQuickActions/AuditQuickActions";
import AuditDrawer from "../components/AuditDrawer/AuditDrawer";

import auditMock from "../mock/audit.mock";

const PhysicalStockAudit = () => {

    /* ==========================================================
       Drawer
    ========================================================== */

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [selectedAudit, setSelectedAudit] = useState(null);

    /* ==========================================================
       Tabs
    ========================================================== */

    const [activeTab, setActiveTab] = useState("All");

    /* ==========================================================
       Filters
    ========================================================== */

    const [filters, setFilters] = useState({

        search: "",

        status: "All",

        auditType: "All",

        store: "All",

        auditDate: "",

    });

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

            auditType: "All",

            store: "All",

            auditDate: "",

        });

        setActiveTab("All");

        setCurrentPage(1);

    };

    /* ==========================================================
       Drawer
    ========================================================== */

    const handleViewAudit = (audit) => {

        setSelectedAudit(audit);

        setDrawerOpen(true);

    };

    const handleCloseDrawer = () => {

        setDrawerOpen(false);

        setSelectedAudit(null);

    };


    // =========================================

    const handleContinueAudit = (row) => {

        console.log("Continue Audit", row);

    };

    const handlePrintAudit = (row) => {

        console.log("Print Audit", row);

    };

    const handleExportAudit = (row) => {

        console.log("Export PDF", row);

    };

    const handleCancelAudit = (row) => {

        console.log("Cancel Audit", row);

    };
    // =========================================

    /* ==========================================================
       Pagination
    ========================================================== */

    const handleRowsPerPageChange = (event) => {

        setRowsPerPage(

            parseInt(event.target.value, 10)

        );

        setCurrentPage(1);

    };

    /* ==========================================================
       Filter Data
    ========================================================== */

    const filteredAudits = useMemo(() => {

        return auditMock.filter((audit) => {

            const searchMatch =

                audit.auditNo
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())

                ||

                audit.store
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())

                ||

                audit.auditor
                    .toLowerCase()
                    .includes(filters.search.toLowerCase());

            const statusMatch =

                filters.status === "All"

                ||

                audit.status === filters.status;

            const typeMatch =

                filters.auditType === "All"

                ||

                audit.auditType === filters.auditType;

            const storeMatch =

                filters.store === "All"

                ||

                audit.store === filters.store;

            const tabMatch =

                activeTab === "All"

                ||

                audit.status === activeTab;

            return (

                searchMatch &&

                statusMatch &&

                typeMatch &&

                storeMatch &&

                tabMatch

            );

        });

    }, [filters, activeTab]);

    /* ==========================================================
       Pagination Data
    ========================================================== */

    const paginatedAudits = filteredAudits.slice(

        (currentPage - 1) * rowsPerPage,

        currentPage * rowsPerPage

    );


    return (

        <div className="physical-stock-audit-page">

            {/* ======================================================
            Header
        ====================================================== */}

            <div className="audit-header">

                <div>

                    <h1>

                        Physical Stock Audit

                    </h1>

                    <p>

                        Perform inventory audits, compare physical stock with system stock and resolve inventory variance.

                    </p>

                </div>

            </div>

            {/* ======================================================
            Audit Stats
        ====================================================== */}

            <AuditStats />

            {/* ======================================================
            Filters
        ====================================================== */}

            <AuditFilters

                filters={filters}

                onChange={handleFilterChange}

                onReset={handleResetFilters}

            />

            {/* ======================================================
            Tabs
        ====================================================== */}

            <AuditTabs

                activeTab={activeTab}

                onChange={(tab) => {

                    setActiveTab(tab);

                    setCurrentPage(1);

                }}

            />

            {/* ======================================================
            Audit Table
        ====================================================== */}

            <AuditTable

                data={paginatedAudits}

                page={currentPage}

                rowsPerPage={rowsPerPage}

                totalRows={filteredAudits.length}

                onPageChange={setCurrentPage}

                onRowsPerPageChange={handleRowsPerPageChange}

                onView={handleViewAudit}

                onContinue={handleContinueAudit}

                onPrint={handlePrintAudit}

                onExport={handleExportAudit}

                onCancel={handleCancelAudit}

            />

            {/* ======================================================
            Bottom Dashboard
        ====================================================== */}

            <div className="audit-bottom-grid">

            {/* <AuditSummary />

            <AuditTypes /> 

            <AuditProcess /> */}

             <AuditQuickActions />

        </div>

            {/* ======================================================
            Drawer
        ====================================================== */}

             <AuditDrawer

            open={drawerOpen}

            data={selectedAudit}

            onClose={handleCloseDrawer}

        /> 

        </div>

    );

};

export default PhysicalStockAudit;