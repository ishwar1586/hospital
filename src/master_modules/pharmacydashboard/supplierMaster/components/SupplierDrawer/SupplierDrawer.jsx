import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./SupplierDrawer.css";

const SupplierDrawer = ({
    open,
    onClose,
    supplier,
}) => {

    if (!supplier) return null;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
        >

            <div className="supplier-drawer">

                <div className="drawer-header">

                    <div>

                        <h2>
                            Supplier Details
                        </h2>

                        <p>
                            {supplier.supplierCode}
                        </p>

                    </div>

                    <IconButton
                        onClick={onClose}
                    >
                        <CloseOutlinedIcon />
                    </IconButton>

                </div>

                <div className="supplier-status-chip">
                    {supplier.status}
                </div>

                {/* Basic Info */}

                <div className="drawer-card">

                    <h3>
                        Basic Information
                    </h3>

                    <div className="info-row">
                        <span>Supplier Code</span>
                        <strong>{supplier.supplierCode}</strong>
                    </div>

                    <div className="info-row">
                        <span>Supplier Name</span>
                        <strong>{supplier.supplierName}</strong>
                    </div>

                    <div className="info-row">
                        <span>Supplier Type</span>
                        <strong>{supplier.supplierType}</strong>
                    </div>

                    <div className="info-row">
                        <span>Contact Person</span>
                        <strong>{supplier.contactPerson}</strong>
                    </div>

                </div>

                {/* Contact Info */}

                <div className="drawer-card">

                    <h3>
                        Contact Information
                    </h3>

                    <div className="info-row">
                        <span>Mobile</span>
                        <strong>{supplier.mobile}</strong>
                    </div>

                    <div className="info-row">
                        <span>Email</span>
                        <strong>{supplier.email}</strong>
                    </div>

                </div>

                {/* Address */}

                <div className="drawer-card">

                    <h3>
                        Address Information
                    </h3>

                    <div className="info-row">
                        <span>City</span>
                        <strong>{supplier.city}</strong>
                    </div>

                </div>

                {/* GST */}

                <div className="drawer-card">

                    <h3>
                        Tax Information
                    </h3>

                    <div className="info-row">
                        <span>GST Number</span>
                        <strong>{supplier.gstNumber}</strong>
                    </div>

                </div>

                {/* Purchase Summary */}

                <div className="drawer-card">

                    <h3>
                        Purchase Summary
                    </h3>

                    <div className="info-row">
                        <span>Outstanding Amount</span>

                        <strong className="outstanding">
                            ₹ {supplier.outstandingAmount}
                        </strong>
                    </div>

                    <div className="info-row">
                        <span>Created Date</span>

                        <strong>
                            {supplier.createdDate}
                        </strong>
                    </div>

                </div>

            </div>

        </Drawer>
    );
};

export default SupplierDrawer;