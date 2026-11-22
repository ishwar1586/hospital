import {

    useEffect,

    useState,

} from "react";

import "./WalkInCustomerModal.css";

/* ===========================================================
MUI
=========================================================== */

import Dialog
from "@mui/material/Dialog";

import DialogTitle
from "@mui/material/DialogTitle";

import DialogContent
from "@mui/material/DialogContent";

import DialogActions
from "@mui/material/DialogActions";

import Button
from "@mui/material/Button";

import Divider
from "@mui/material/Divider";

// import Grid
// from "@mui/material/Grid";

import MenuItem
from "@mui/material/MenuItem";

import TextField
from "@mui/material/TextField";

/* ===========================================================
Icons
=========================================================== */

import PersonOutlineRoundedIcon
from "@mui/icons-material/PersonOutlineRounded";

import CloseRoundedIcon
from "@mui/icons-material/CloseRounded";

import ShoppingCartCheckoutRoundedIcon
from "@mui/icons-material/ShoppingCartCheckoutRounded";

import PaymentsRoundedIcon
from "@mui/icons-material/PaymentsRounded";

/* ===========================================================
Initial Form
=========================================================== */

const initialForm = {

    customerName: "",

    mobile: "",

    gender: "",

    age: "",

    gstNumber: "",

    email: "",

    address: "",

    remarks: "",

};

/* ===========================================================
Component
=========================================================== */

const WalkInCustomerModal = ({

    open,

    onClose,

    onContinue,

    onCashCustomer,

    initialData = null,

}) => {

    /* =======================================================
       States
    ======================================================= */

    const [

        form,

        setForm,

    ] = useState(initialForm);

    /* =======================================================
       Load Existing Customer
    ======================================================= */

    useEffect(() => {

        if (

            open

        ) {

            setForm({

                ...initialForm,

                ...(initialData || {}),

            });

        }

    }, [

        open,

        initialData,

    ]);

    /* =======================================================
       Handle Input Change
    ======================================================= */

    const handleChange = (

        event

    ) => {

        const {

            name,

            value,

        } = event.target;

        setForm((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    /* =======================================================
       Continue Billing
    ======================================================= */

    const handleContinue = () => {

        if (

            !form.customerName.trim()

        ) {

            alert(

                "Customer Name is required."

            );

            return;

        }

        if (

            !form.mobile.trim()

        ) {

            alert(

                "Mobile Number is required."

            );

            return;

        }

        onContinue?.(

            form

        );

    };

    /* =======================================================
       Continue as Cash Customer
    ======================================================= */

    const handleCashCustomer = () => {

        onCashCustomer?.({

            customerName:

                "Cash Customer",

            mobile: "",

            gender: "",

            age: "",

            gstNumber: "",

            email: "",

            address: "",

            remarks: "",

        });

    };


        /* ===========================================================
       Render
    =========================================================== */

    return (

        <Dialog

            open={open}

            onClose={onClose}

            maxWidth="md"

            fullWidth

            PaperProps={{

                className: "walkin-modal-paper",

            }}

        >

            {/* ==========================================
                Header
            ========================================== */}

            <DialogTitle className="walkin-modal-title">

                <div className="walkin-modal-header">

                    <div className="walkin-modal-heading">

                        <div className="walkin-modal-icon">

                            <PersonOutlineRoundedIcon />

                        </div>

                        <div>

                            <h2>

                                Walk-in Customer Details

                            </h2>

                            <p>

                                Enter customer information for invoice generation.

                            </p>

                        </div>

                    </div>

                    <Button

                        onClick={onClose}

                        className="walkin-close-btn"

                    >

                        <CloseRoundedIcon />

                    </Button>

                </div>

            </DialogTitle>

            <Divider />

            {/* ==========================================
                Form
            ========================================== */}

           <DialogContent className="walkin-dialog-content">

    <div className="walkin-form">

        {/* Row-1 */}

        <div className="walkin-grid-2">

            <TextField
                fullWidth
                required
                label="Customer Name"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
            />

            <TextField
                fullWidth
                required
                label="Mobile Number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                inputProps={{
                    maxLength: 10,
                }}
                placeholder="Enter mobile number"
            />

        </div>

        {/* Row-2 */}

        <div className="walkin-grid-3">

            <TextField
                select
                fullWidth
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
            >
                <MenuItem value="">Select Gender</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField
                fullWidth
                type="number"
                label="Age"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="Enter age"
            />

            <TextField
                fullWidth
                label="GST Number"
                name="gstNumber"
                value={form.gstNumber}
                onChange={handleChange}
                placeholder="Optional"
            />

        </div>

        {/* Email */}

        <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email address"
        />

        {/* Address */}

        <TextField
            fullWidth
            multiline
            rows={3}
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter customer address"
        />

        {/* Remarks */}

        <TextField
            fullWidth
            multiline
            rows={3}
            label="Remarks"
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
            placeholder="Additional remarks"
        />

    </div>

</DialogContent>

                        {/* ==========================================
                Footer
            ========================================== */}

            <DialogActions className="walkin-dialog-actions">

                <div className="walkin-footer">

                    {/* ======================================
                        Note
                    ======================================= */}

                    <div className="walkin-footer-note">

                        <strong>

                            Note :

                        </strong>

                        <span>

                            Customer details help generate a proper
                            invoice and maintain purchase history.
                            If the customer doesn't want to provide
                            details, continue as a
                            <strong> Cash Customer</strong>.

                        </span>

                    </div>

                    {/* ======================================
                        Buttons
                    ======================================= */}

                    <div className="walkin-footer-buttons">

                        {/* Cancel */}

                        <Button

                            variant="outlined"

                            color="inherit"

                            onClick={onClose}

                            className="walkin-btn-cancel"

                        >

                            Cancel

                        </Button>

                        {/* Cash Customer */}

                        <Button

                            variant="outlined"

                            color="warning"

                            startIcon={

                                <PaymentsRoundedIcon />

                            }

                            onClick={handleCashCustomer}

                            className="walkin-btn-cash"

                        >

                            Continue as Cash Customer

                        </Button>

                        {/* Continue Billing */}

                        <Button

                            variant="contained"

                            startIcon={

                                <ShoppingCartCheckoutRoundedIcon />

                            }

                            onClick={handleContinue}

                            className="walkin-btn-primary"

                        >

                            Continue Billing

                        </Button>

                    </div>

                </div>

            </DialogActions>

        </Dialog>

    );

};

export default WalkInCustomerModal;