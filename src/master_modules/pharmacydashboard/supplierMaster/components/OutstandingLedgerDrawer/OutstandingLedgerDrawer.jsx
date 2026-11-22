import { useState } from "react";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./OutstandingLedgerDrawer.css";

import LedgerSummaryCards from "./components/LedgerSummaryCards/LedgerSummaryCards";
import LedgerTabs from "./components/LedgerTabs/LedgerTabs";
import LedgerFilters from "./components/LedgerFilters/LedgerFilters";
import LedgerTable from "./components/LedgerTable/LedgerTable";

import AgeingSummary
    from "./components/AgeingSummary/AgeingSummary";

import {
    ageingSummaryMock,
    ageingInvoiceMock
}
    from "./mock/ageingSummary.mock";

// import PaymentHistory
//     from "./components/PaymentHistory/PaymentHistory";

// import {
//     paymentHistoryMock
// }
//     from "./mock/paymentHistory.mock";

// import LedgerNotes
// from "./components/LedgerNotes/LedgerNotes";

// import {
//     ledgerNotesMock
// }
// from "./mock/ledgerNotes.mock";


import Pagination from "@/master_shared/components/Pagination/Pagination";

import { ledgerSummaryMock } from "./mock/ledgerSummary.mock";
import { ledgerTransactionsMock } from "./mock/ledgerTransactions.mock";

import { ledgerTabs } from "./config/ledgerTabs";
import { ledgerColumns } from "./config/ledgerColumns";

const OutstandingLedgerDrawer = ({
    open,
    onClose,
    supplier,
}) => {

    const [activeTab,
        setActiveTab] =
        useState("ledger-summary");

    const [filters,
        setFilters] =
        useState({
            fromDate: "",
            toDate: "",
            transactionType: "",
        });

    const [page,
        setPage] =
        useState(0);

    const [rowsPerPage,
        setRowsPerPage] =
        useState(5);

    const paginatedData =
        ledgerTransactionsMock.slice(
            page * rowsPerPage,
            page * rowsPerPage +
            rowsPerPage
        );

    const handlePageChange = (
        event,
        newPage
    ) => {

        setPage(newPage);
    };

    const handleRowsPerPageChange =
        (event) => {

            setRowsPerPage(
                parseInt(
                    event.target.value,
                    10
                )
            );

            setPage(0);
        };

    if (!supplier)
        return null;

    return (

        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <div className="outstanding-ledger-drawer">

                {/* Header */}

                <div className="ledger-header">

                    <div>

                        <h2>
                            Outstanding Ledger
                        </h2>

                        <p>

                            {supplier.supplierName}

                            {" • "}

                            {
                                supplier.supplierCode
                            }

                        </p>

                    </div>

                    <IconButton
                        onClick={onClose}
                    >

                        <CloseOutlinedIcon />

                    </IconButton>

                </div>

                {/* Summary Cards */}

                <LedgerSummaryCards
                    cards={
                        ledgerSummaryMock
                    }
                />

                {/* Tabs */}

                <LedgerTabs
                    tabs={ledgerTabs}
                    activeTab={activeTab}
                    onTabChange={
                        setActiveTab
                    }
                />

                {/* Filters */}

                <LedgerFilters
                    filters={filters}
                    setFilters={
                        setFilters
                    }
                    onApply={() => {
                        console.log(
                            filters
                        );
                    }}
                    onExport={() => {
                        console.log(
                            "Export Ledger"
                        );
                    }}
                />

                {/* Tab Content */}

                {activeTab ===
                    "ledger-summary" && (
                        <>
                            <LedgerTable
                                columns={
                                    ledgerColumns
                                }
                                data={
                                    paginatedData
                                }
                            />

                            <Pagination
                                page={page}
                                rowsPerPage={
                                    rowsPerPage
                                }
                                totalRows={
                                    ledgerTransactionsMock.length
                                }
                                onPageChange={
                                    handlePageChange
                                }
                                onRowsPerPageChange={
                                    handleRowsPerPageChange
                                }
                            />
                        </>
                    )}

                {activeTab ===
                    "ageing-summary" && (

                        <div className="coming-soon">

                            {/* Ageing Summary
                            Coming Soon */}

                            <AgeingSummary
                                summaryData={
                                    ageingSummaryMock
                                }
                                invoiceData={
                                    ageingInvoiceMock
                                }
                            />

                        </div>

                    )}

                {activeTab ===
                    "payment-history" && (

                        <div className="coming-soon">

                            Payment History
                            Coming Soon

                        </div>

                    )}

                {/* {
                    activeTab ===
                    "payment-history" && (

                        <PaymentHistory
                            data={
                                paymentHistoryMock
                            }
                        />

                    )
                } */}

                {activeTab ===
                    "ledger-notes" && (

                        <div className="coming-soon">

                            Ledger Notes
                            Coming Soon

                        </div>

                    )}


                {/* {
    activeTab ===
    "ledger-notes" && (

        <LedgerNotes
            notes={
                ledgerNotesMock
            }
        />

    )
} */}

            </div>

        </Drawer>

    );
};

export default OutstandingLedgerDrawer;