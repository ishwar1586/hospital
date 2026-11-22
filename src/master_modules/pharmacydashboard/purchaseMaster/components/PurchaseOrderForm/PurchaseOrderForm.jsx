import { useState } from "react";

import "./PurchaseOrderForm.css";

import {
    purchaseOrderFormConfig
} from "../../config/purchaseFormConfig";

const PurchaseOrderForm = ({
    mode = "add",
    initialData = {},
}) => {

    const [formData,
        setFormData] =
        useState({

            supplier: "",
            supplierInvoiceNo: "",
            supplierInvoiceDate: "",

            gstNumber: "",

            poNumber:
                "PO-2026-0001",

            poDate: "",

            expectedDeliveryDate: "",

            poType: "Regular",

            paymentTerms: "",

            transport: "",

            freightTerms: "",

            remarks: "",

            ...initialData,

        });

    const handleChange = (
        e
    ) => {

        const {
            name,
            value
        } = e.target;

        setFormData(
            (prev) => ({
                ...prev,
                [name]: value,
            })
        );

    };

    const renderField = (
        field
    ) => {

        if (
            field.type ===
            "textarea"
        ) {

            return (

                <textarea

                    name={field.name}

                    value={
                        formData[
                        field.name
                        ]
                    }

                    onChange={
                        handleChange
                    }

                    placeholder={
                        field.label
                    }

                />

            );
        }

        if (
            field.type ===
            "select"
        ) {

            return (

                <select

                    name={field.name}

                    value={
                        formData[
                        field.name
                        ]
                    }

                    onChange={
                        handleChange
                    }

                >

                    <option value="">
                        Select
                    </option>

                    {field.options?.map(
                        (
                            option
                        ) => (

                            <option
                                key={
                                    option
                                }
                                value={
                                    option
                                }
                            >

                                {
                                    option
                                }

                            </option>

                        )
                    )}

                </select>

            );
        }

        return (

            <input

                type={
                    field.type
                }

                name={field.name}

                value={
                    formData[
                    field.name
                    ]
                }

                onChange={
                    handleChange
                }

                disabled={
                    field.disabled
                }

                placeholder={
                    field.label
                }

            />

        );
    };

    return (

        <div className="purchase-order-form">

            {/* Supplier Information */}

            <div className="form-section">

                <h3>
                    Supplier Information
                </h3>

                <div className="form-grid">

                    {purchaseOrderFormConfig
                        .supplierInformation
                        .map(
                            (
                                field
                            ) => (

                                <div
                                    key={
                                        field.name
                                    }
                                    className="form-group"
                                >

                                    <label>

                                        {
                                            field.label
                                        }

                                    </label>

                                    {renderField(
                                        field
                                    )}

                                </div>

                            )
                        )}

                </div>

            </div>

            {/* Purchase Information */}

            <div className="form-section">

                <h3>
                    Purchase Information
                </h3>

                <div className="form-grid">

                    {purchaseOrderFormConfig
                        .purchaseInformation
                        .map(
                            (
                                field
                            ) => (

                                <div
                                    key={
                                        field.name
                                    }
                                    className="form-group"
                                >

                                    <label>

                                        {
                                            field.label
                                        }

                                    </label>

                                    {renderField(
                                        field
                                    )}

                                </div>

                            )
                        )}

                </div>

            </div>

            {/* Order Items */}

            <div className="form-section">

                <div className="section-header">

                    <h3>
                        Order Items
                    </h3>

                    <button
                        type="button"
                    >
                        + Add Item
                    </button>

                </div>

                <div className="items-placeholder">

                    Medicine Selection Table
                    Coming Next

                </div>

            </div>

            {/* Other Information */}

            <div className="form-section">

                <h3>
                    Other Information
                </h3>

                <div className="form-grid">

                    {purchaseOrderFormConfig
                        .otherInformation
                        .map(
                            (
                                field
                            ) => (

                                <div
                                    key={
                                        field.name
                                    }
                                    className="form-group"
                                >

                                    <label>

                                        {
                                            field.label
                                        }

                                    </label>

                                    {renderField(
                                        field
                                    )}

                                </div>

                            )
                        )}

                </div>

            </div>

            <div className="form-actions">

                <button
                    className="cancel-btn"
                    type="button"
                >
                    Cancel
                </button>

                <button
                    className="save-btn"
                    type="submit"
                >

                    {mode === "edit"
                        ? "Update Purchase Order"
                        : "Save Purchase Order"}

                </button>

            </div>

        </div>

    );
};

export default PurchaseOrderForm;