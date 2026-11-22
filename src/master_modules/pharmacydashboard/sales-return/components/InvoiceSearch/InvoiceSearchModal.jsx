import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import InvoiceSearchFilters from "./InvoiceSearchFilters";
import InvoiceSearchTable from "./InvoiceSearchTable";

import "./InvoiceSearch.css";

const InvoiceSearchModal = ({
    open,
    onClose,

    filters,
    onFilterChange,
    onSearch,
    onReset,

    invoices,

    page,
    // totalPages,
    onPageChange,

    onViewInvoice,

    onSelectInvoice,
}) => {

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="xl"

        >

            <DialogTitle className="invoice-search-dialog-title">

                <div className="invoice-search-title">

                    <h2>

                        Search Invoice

                    </h2>

                    <p>

                        Search and select original sales invoice.

                    </p>

                </div>

                <IconButton onClick={onClose}>

                    <CloseRoundedIcon />

                </IconButton>

            </DialogTitle>

            <DialogContent>

                <InvoiceSearchFilters

                    filters={filters}

                    onChange={onFilterChange}

                    onSearch={onSearch}

                    onReset={onReset}

                />

                <InvoiceSearchTable

                    invoices={invoices}

                    page={page}

                    rowsPerPage={10}

                    totalRows={invoices.length}

                    onPageChange={onPageChange}

                    onRowsPerPageChange={() => { }}

                    onView={onViewInvoice}

                    onSelect={(invoice) => {

                        onSelectInvoice(invoice);

                        onClose();

                    }}

                />

            </DialogContent>

        </Dialog>

    );

};

export default InvoiceSearchModal;