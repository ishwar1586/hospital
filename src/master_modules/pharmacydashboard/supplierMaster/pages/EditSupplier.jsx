import { useState } from "react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/editSupplier.css";

import {
    supplierMock,
} from "../mock/supplier.mock";

import SupplierForm from "../components/SupplierForm/SupplierForm";

const EditSupplier = () => {

    const navigate = useNavigate();

    const { supplierId } =
        useParams();

    const selectedSupplier =
        supplierMock.find(
            (supplier) =>
                supplier.id ===
                Number(supplierId)
        );

    const initialData = {

        supplierCode:
            selectedSupplier?.supplierCode || "",

        supplierName:
            selectedSupplier?.supplierName || "",

        supplierType:
            selectedSupplier?.supplierType || "",

        contactPerson:
            selectedSupplier?.contactPerson || "",

        mobile:
            selectedSupplier?.mobile || "",

        email:
            selectedSupplier?.email || "",

        website:
            selectedSupplier?.website || "",

        address:
            selectedSupplier?.address || "",

        city:
            selectedSupplier?.city || "",

        state:
            selectedSupplier?.state || "",

        pincode:
            selectedSupplier?.pincode || "",

        gstNumber:
            selectedSupplier?.gstNumber || "",

        panNumber:
            selectedSupplier?.panNumber || "",

        drugLicense:
            selectedSupplier?.drugLicense || "",

        bankName:
            selectedSupplier?.bankName || "",

        accountNumber:
            selectedSupplier?.accountNumber || "",

        ifscCode:
            selectedSupplier?.ifscCode || "",

        upiId:
            selectedSupplier?.upiId || "",

        status:
            selectedSupplier?.status || "",
    };

    const [formData, setFormData] =
        useState(initialData);

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(
            "Updated Supplier",
            formData
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
        <div className="edit-supplier-container">

            <div className="page-header">

                <h2>
                    Edit Supplier
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
                mode="edit"
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />

        </div>
    );
};

export default EditSupplier;