import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/addSupplier.css";

import SupplierForm from "../components/SupplierForm/SupplierForm";

const AddSupplier = () => {

    const navigate = useNavigate();

    const initialData = {
        supplierCode: `SUP${Date.now()
            .toString()
            .slice(-4)}`,

        supplierName: "",
        supplierType: "",
        contactPerson: "",
        mobile: "",
        email: "",
        website: "",

        address: "",
        city: "",
        state: "",
        pincode: "",

        gstNumber: "",
        panNumber: "",
        drugLicense: "",

        bankName: "",
        accountNumber: "",
        ifscCode: "",
        upiId: "",

        status: "Active",
    };

    const [formData, setFormData] =
        useState(initialData);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(
            "New Supplier",
            formData
        );

        navigate(
            "/module/suppliermaster"
        );
    };

    const handleCancel = () => {

        const confirmed =
            window.confirm(
                "Discard changes?"
            );

        if (confirmed) {

            navigate(
                "/module/suppliermaster"
            );

        }
    };

    return (
        <div className="add-supplier-container">

            <div className="page-header">

                <h2>
                    Add Supplier
                </h2>

                <button
                    className="back-btn"
                    onClick={() =>
                        navigate(
                            "/module/suppliermaster"
                        )
                    }
                >
                    <ArrowBackOutlinedIcon />

                    Back To Supplier List

                </button>

            </div>

            <SupplierForm
                formData={formData}
                setFormData={setFormData}
                mode="add"
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />

        </div>
    );
};

export default AddSupplier;