import { useMemo, useState } from "react";

import "@/master_modules/pharmacydashboard/sales-return/styles/SalesReturn.css";

import ReturnInformation from "../components/ReturnInformation/ReturnInformation";
import OriginalInvoice from "../components/OriginalInvoice/OriginalInvoice";
import InvoiceSearchModal from "../components/InvoiceSearch/InvoiceSearchModal";
import ReturnItemsTable from "../components/ReturnItems/ReturnItemsTable";
import RefundSummary from "../components/RefundSummary/RefundSummary";

import invoiceSearchMock from "@/master_modules/pharmacydashboard/sales-return/mock/invoiceSearch.mock";
import returnItemsMock from "@/master_modules/pharmacydashboard/sales-return/mock/returnItems.mock";


const SalesReturn = () => {

    /* ============================================================
       Return Form
    ============================================================ */

    const [formData, setFormData] = useState({

        returnType: "",

        returnDate: "",

        customer: "",

        invoiceNo: "",

        returnReason: "",

        returnNote: "",

    });


    const [refundMethod, setRefundMethod] = useState("Cash");

    const [refundNote, setRefundNote] = useState("");

    /* ============================================================
       Invoice Details
    ============================================================ */

    const [invoiceData, setInvoiceData] = useState({

        invoiceNo: "",

        invoiceDate: "",

        patientName: "",

        doctorName: "",

        paymentMode: "",

        billAmount: "",

        paidAmount: "",

        dueAmount: "",

        uhid: "",

    });

    /* ============================================================
       Return Medicines
    ============================================================ */

    const [returnItems, setReturnItems] = useState([]);

    /* ============================================================
       Invoice Search Modal
    ============================================================ */

    const [invoiceModalOpen, setInvoiceModalOpen] = useState(false);

    /* ============================================================
       Search Filters
    ============================================================ */

    const [filters, setFilters] = useState({

        invoiceNo: "",

        patientName: "",

        fromDate: "",

        toDate: "",

        paymentMode: "",

    });

    /* ============================================================
       Pagination
    ============================================================ */

    const [currentPage, setCurrentPage] = useState(1);

    const [rowsPerPage, setRowsPerPage] = useState(10);



    const filteredInvoices = useMemo(() => {

        return invoiceSearchMock.filter((invoice) => {

            const invoiceMatch = invoice.invoiceNo
                .toLowerCase()
                .includes(filters.invoiceNo.toLowerCase());

            const patientMatch = invoice.patient
                .toLowerCase()
                .includes(filters.patientName.toLowerCase());

            const paymentMatch =

                filters.paymentMode === "" ||

                invoice.paymentMode === filters.paymentMode;

            return (

                invoiceMatch &&

                patientMatch &&

                paymentMatch

            );

        });

    }, [filters]);


    const paginatedInvoices = filteredInvoices.slice(

        (currentPage - 1) * rowsPerPage,

        currentPage * rowsPerPage

    );



    const refundSummary = useMemo(() => {

        const subTotal = returnItems.reduce(

            (sum, item) =>

                sum + item.refundAmount,

            0

        );

        const discount = 0;

        const gst = 0;

        const refund =

            subTotal -

            discount +

            gst;

        return {

            subTotal,

            discount,

            gst,

            refund,

        };

    }, [returnItems]);




    const handleRefundMethod = (event) => {

        setRefundMethod(event.target.value);

    };

    const handleRefundNote = (event) => {

        setRefundNote(event.target.value);

    };

    const handleSaveReturn = () => {

        console.log("Save Return");

    };

    const handleProcessRefund = () => {

        console.log("Process Refund");

    };

    const handlePrintReceipt = () => {

        console.log("Print Receipt");

    };



    /* ============================================================
   Return Form Change
============================================================ */

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    /* ============================================================
       Filter Change
    ============================================================ */

    const handleFilterChange = (event) => {

        const { name, value } = event.target;

        setFilters((prev) => ({

            ...prev,

            [name]: value,

        }));

        setCurrentPage(1);

    };

    /* ============================================================
       Invoice Search Modal
    ============================================================ */

    const handleOpenInvoiceModal = () => {

        setInvoiceModalOpen(true);

    };

    const handleCloseInvoiceModal = () => {

        setInvoiceModalOpen(false);

    };

    /* ============================================================
       Pagination
    ============================================================ */

    const handlePageChange = (event, page) => {

        setCurrentPage(page);

    };

    const handleRowsPerPageChange = (event) => {

        setRowsPerPage(parseInt(event.target.value, 10));

        setCurrentPage(1);

    };

    /* ============================================================
       Search
    ============================================================ */

    const handleSearch = () => {

        console.log("Invoice Search");

    };

    const handleReset = () => {

        setFilters({

            invoiceNo: "",

            patientName: "",

            fromDate: "",

            toDate: "",

            paymentMode: "",

        });

        setCurrentPage(1);

    };

    /* ============================================================
       Invoice Select
    ============================================================ */

    const handleInvoiceSelect = (invoice) => {

        setInvoiceData({

            invoiceNo: invoice.invoiceNo,

            invoiceDate: invoice.billDate,

            patientName: invoice.patient,

            doctorName: invoice.doctor,

            paymentMode: invoice.paymentMode,

            billAmount: invoice.amount,

            paidAmount: invoice.amount,

            dueAmount: 0,

            uhid: invoice.uhid || "UHID00001",

        });

        setFormData((prev) => ({

            ...prev,

            invoiceNo: invoice.invoiceNo,

            customer: invoice.patient,

        }));

        // Load Medicines

        setReturnItems(

            returnItemsMock.map((item) => ({

                ...item,

            }))

        );

        setInvoiceModalOpen(false);

    };

    /* ============================================================
       Qty Change
    ============================================================ */

    const handleQtyChange = (id, qty) => {

        setReturnItems((prev) =>

            prev.map((item) => {

                if (item.id !== id) {

                    return item;

                }

                return {

                    ...item,

                    returnQty: qty,

                    refundAmount: qty * item.mrp,

                };

            })

        );

    };

    /* ============================================================
       Return Reason
    ============================================================ */

    const handleReasonChange = (id, reason) => {

        setReturnItems((prev) =>

            prev.map((item) =>

                item.id === id

                    ? {

                        ...item,

                        reason,

                    }

                    : item

            )

        );

    };

    /* ============================================================
       Delete Item
    ============================================================ */

    const handleDeleteItem = (id) => {

        setReturnItems((prev) =>

            prev.filter((item) =>

                item.id !== id

            )

        );

    };

    /* ============================================================
       View Invoice
    ============================================================ */

    const handleViewInvoice = () => {

        console.log(invoiceData);

    };



    return (

        <div className="sales-return-page">

            {/* ============================================================
                Header
            ============================================================ */}

            <div className="sales-return-header">

                <div className="sales-return-title">

                    <h1>

                        Sales Return & Refund

                    </h1>

                    <p>

                        Create, process and manage medicine sales return and refund.

                    </p>

                </div>

                <button

                    type="button"

                    className="search-invoice-btn"

                    onClick={handleOpenInvoiceModal}

                >

                    Search Invoice

                </button>

            </div>

            {/* ============================================================
                Top Section
            ============================================================ */}

            <div className="sales-return-top-section">

                <ReturnInformation

                    formData={formData}

                    handleChange={handleChange}

                    onSearchInvoice={handleOpenInvoiceModal}

                />

                <OriginalInvoice

                    invoiceData={invoiceData}

                    onViewInvoice={handleViewInvoice}

                />

            </div>

            {/* ============================================================
                Return Items
            ============================================================ */}

            <ReturnItemsTable

                items={returnItems}

                onQtyChange={handleQtyChange}

                onReasonChange={handleReasonChange}

                onDelete={handleDeleteItem}

            />

            {/* ============================================================
                Refund Summary
            ============================================================ */}

            {/* <RefundSummary

                summary={refundSummary}

            /> */}


            <RefundSummary

                summary={refundSummary}

                refundMethod={refundMethod}

                refundNote={refundNote}

                onMethodChange={handleRefundMethod}

                onNoteChange={handleRefundNote}

                onSave={handleSaveReturn}

                onProcess={handleProcessRefund}

                onPrint={handlePrintReceipt}

            />


            {/* ============================================================
                Invoice Search Modal
            ============================================================ */}

            <InvoiceSearchModal

                open={invoiceModalOpen}

                onClose={handleCloseInvoiceModal}

                filters={filters}

                onFilterChange={handleFilterChange}

                onSearch={handleSearch}

                onReset={handleReset}

                invoices={paginatedInvoices}

                page={currentPage}

                rowsPerPage={rowsPerPage}

                totalRows={filteredInvoices.length}

                onPageChange={handlePageChange}

                onRowsPerPageChange={handleRowsPerPageChange}

                onViewInvoice={handleViewInvoice}

                onSelectInvoice={handleInvoiceSelect}

            />

        </div>

    );

};

export default SalesReturn;


