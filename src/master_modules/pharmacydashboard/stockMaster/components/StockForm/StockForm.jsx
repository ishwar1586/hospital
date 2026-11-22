import { useState } from "react";

import { ArrowBackOutlined } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import "./StockForm.css";

import BasicInformation from "./sections/BasicInformation";
import PricingInformation from "./sections/PricingInformation";
import StockInformation from "./sections/StockInformation";
import SupplierInformation from "./sections/SupplierInformation";
import BatchInformation from "./sections/BatchInformation";
import DocumentUpload from "./sections/DocumentUpload";
import AuditInformation from "./sections/AuditInformation";

const StockForm = ({

    mode = "add",

    initialData = {},

}) => {

    const navigate = useNavigate();

    const isEdit =

        mode === "edit";

    /* =======================================================
       FORM STATE
    ======================================================= */

    const [formData, setFormData] =

        useState({

            medicineName: "",

            medicineCode: "",

            genericName: "",

            category: "",

            unit: "",

            hsnCode: "",

            purchaseRate: "",

            sellingPrice: "",

            mrp: "",

            gst: "",

            discount: "",

            currentStock: "",

            minimumStock: "",

            maximumStock: "",

            reorderLevel: "",

            warehouse: "",

            rackNo: "",

            supplier: "",

            manufacturer: "",

            batchNo: "",

            expiryDate: "",

            manufacturingDate: "",

            barcode: "",

            ...initialData,

        });

    const [errors, setErrors] =

        useState({});

    /* =======================================================
       HANDLERS
    ======================================================= */

    const handleChange = (e) => {

        const {

            name,

            value,

        } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const handleReset = () => {

        setFormData({

            medicineName: "",

            medicineCode: "",

            genericName: "",

            category: "",

            unit: "",

            hsnCode: "",

            purchaseRate: "",

            sellingPrice: "",

            mrp: "",

            gst: "",

            discount: "",

            currentStock: "",

            minimumStock: "",

            maximumStock: "",

            reorderLevel: "",

            warehouse: "",

            rackNo: "",

            supplier: "",

            manufacturer: "",

            batchNo: "",

            expiryDate: "",

            manufacturingDate: "",

            barcode: "",

        });

        setErrors({});

    };

    const handleCancel = () => {

        console.log("Cancel");

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

    };

    /* =======================================================
       JSX
    ======================================================= */

    return (

        <div className="stock-form-page">

            {/* ====================================== */}

            {/* <div className="stock-form-header">

                <div>

                    <h2>

                        {

                            isEdit

                            ? "Edit Stock"

                            : "Add New Stock"

                        }

                    </h2>

                    <p>

                        {

                            isEdit

                            ? "Update medicine stock details."

                            : "Create a new medicine stock."

                        }

                    </p>

                </div>

            </div> */}

            <div className="stock-form-header">

                <div>

                    <button

                        type="button"

                        className="back-btn"

                        onClick={() =>

                            navigate("/module/stockmaster")

                        }

                    >

                        <ArrowBackOutlined />

                        Back to Stock Master

                    </button>

                    <h2>

                        {

                            isEdit

                                ? "Edit Stock"

                                : "Add New Stock"

                        }

                    </h2>

                    <p>

                        {

                            isEdit

                                ? "Update medicine stock information."

                                : "Create a new medicine stock record."

                        }

                    </p>

                </div>

            </div>

            {/* ====================================== */}

            <form

                className="stock-form"

                onSubmit={handleSubmit}

            >

                <BasicInformation

                    formData={formData}

                    handleChange={handleChange}

                    errors={errors}

                />

                <PricingInformation

                    formData={formData}

                    handleChange={handleChange}

                    errors={errors}

                />

                <StockInformation

                    formData={formData}

                    handleChange={handleChange}

                    errors={errors}

                />

                <SupplierInformation

                    formData={formData}

                    handleChange={handleChange}

                    errors={errors}

                />

                <BatchInformation

                    formData={formData}

                    handleChange={handleChange}

                    errors={errors}

                />

                <DocumentUpload

                    formData={formData}

                    setFormData={setFormData}

                />

                {

                    isEdit && (

                        <AuditInformation

                            formData={formData}

                        />

                    )

                }

                {/* ====================================== */}
                {/* FOOTER */}
                {/* ====================================== */}

                <div className="stock-form-footer">

                    <button

                        type="button"

                        className="btn btn-secondary"

                        onClick={handleCancel}

                    >

                        Cancel

                    </button>

                    <button

                        type="button"

                        className="btn btn-outline"

                        onClick={handleReset}

                    >

                        Reset

                    </button>

                    <button

                        type="submit"

                        className="btn btn-primary"

                    >

                        {

                            isEdit

                                ? "Save Changes"

                                : "Add Stock"

                        }

                    </button>

                </div>

            </form>

        </div>

    );

};

export default StockForm;