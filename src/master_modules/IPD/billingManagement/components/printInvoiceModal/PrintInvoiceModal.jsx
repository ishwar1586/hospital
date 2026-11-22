import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    IconButton,
    Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import "@/master_modules/IPD/billingManagement/styles/printInvoiceModal.css";

import {
    printInvoice,
    downloadInvoicePDF,
}
    from "@/master_modules/IPD/billingManagement/utils/billingPrint";

const PrintInvoiceModal = ({
    open,
    patient,
    onClose,
}) => {

    if (!patient) return null;

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >

            <DialogTitle
                className="invoice-header"
            >

                <div>

                    <h2>
                        Invoice Preview
                    </h2>

                    <p>
                        {patient.billNo}
                    </p>

                </div>

                <IconButton
                    onClick={onClose}
                >

                    <CloseIcon />

                </IconButton>

            </DialogTitle>

            <Divider />

            <DialogContent>

                <div className="invoice-preview">

                    <div className="hospital-header">

                        <div>

                            <h1>
                                City Care Hospital
                            </h1>

                            <p>
                                Gorakhpur, Uttar Pradesh
                            </p>

                        </div>

                        <div className="invoice-badge">

                            TAX INVOICE

                        </div>

                    </div>

                    <div className="invoice-info">

                        <div>

                            <label>
                                Invoice No
                            </label>

                            <span>
                                {patient.billNo}
                            </span>

                        </div>

                        <div>

                            <label>
                                Invoice Date
                            </label>

                            <span>
                                {patient.billDate}
                            </span>

                        </div>

                    </div>

                    <div className="patient-info-card">

                        <div>
                            <label>
                                Patient Name
                            </label>

                            <span>
                                {patient.patientName}
                            </span>
                        </div>

                        <div>
                            <label>
                                IPD No
                            </label>

                            <span>
                                {patient.ipdNo}
                            </span>
                        </div>

                        <div>
                            <label>
                                Doctor
                            </label>

                            <span>
                                {patient.doctor}
                            </span>
                        </div>

                        <div>
                            <label>
                                Department
                            </label>

                            <span>
                                {patient.department}
                            </span>
                        </div>

                    </div>

                    <div className="invoice-table">

                        <table>

                            <thead>

                                <tr>

                                    <th>
                                        Description
                                    </th>

                                    <th>
                                        Amount
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>
                                    <td>
                                        Room Charges
                                    </td>
                                    <td>
                                        ₹12,000
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Doctor Charges
                                    </td>
                                    <td>
                                        ₹5,000
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Nursing Charges
                                    </td>
                                    <td>
                                        ₹2,500
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Lab Charges
                                    </td>
                                    <td>
                                        ₹3,000
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        Pharmacy Charges
                                    </td>
                                    <td>
                                        ₹4,500
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="invoice-summary">

                        <div>

                            <label>
                                Total Amount
                            </label>

                            <h3>
                                ₹
                                {patient.billAmount?.toLocaleString()}
                            </h3>

                        </div>

                        <div>

                            <label>
                                Paid Amount
                            </label>

                            <h3>
                                ₹
                                {patient.paidAmount?.toLocaleString()}
                            </h3>

                        </div>

                        <div>

                            <label>
                                Due Amount
                            </label>

                            <h3>
                                ₹
                                {patient.dueAmount?.toLocaleString()}
                            </h3>

                        </div>

                    </div>

                </div>

            </DialogContent>

            <DialogActions
                className="invoice-footer"
            >

                <Button
                    variant="outlined"
                    startIcon={
                        <DownloadOutlinedIcon />
                    }
                    onClick={() =>
                        downloadInvoicePDF(
                            patient
                        )
                    }
                >
                    Download PDF
                </Button>

                <Button
                    variant="contained"
                    startIcon={
                        <PrintOutlinedIcon />
                    }
                    onClick={() =>
                        printInvoice(
                            patient
                        )
                    }
                >
                    Print Invoice
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default PrintInvoiceModal;