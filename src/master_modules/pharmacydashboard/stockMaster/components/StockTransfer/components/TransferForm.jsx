import "./TransferForm.css";

import transferFormConfig
    from "@/master_modules/pharmacydashboard/stockMaster/components/StockTransfer/config/transferFormConfig";

const TransferForm = ({

    formData,

    onChange,

    errors = {},

}) => {

    return (

        <div className="transfer-form">

            {/* ================================= */}
            {/* Header */}
            {/* ================================= */}

            <div className="transfer-form-header">

                <h3>

                    Transfer Details

                </h3>

            </div>

            {/* ================================= */}
            {/* Body */}
            {/* ================================= */}

            <div className="transfer-form-body">

                {

                    transferFormConfig.map((field) => (

                        <div

                            key={field.name}

                            className="transfer-form-group"

                        >

                            {/* =============================== */}
                            {/* Label */}
                            {/* =============================== */}

                            <label>

                                {field.label}

                                {

                                    field.required && (

                                        <span className="required">

                                            *

                                        </span>

                                    )

                                }

                            </label>

                            {/* =============================== */}
                            {/* Select */}
                            {/* =============================== */}

                            {

                                field.type === "select"

                                ? (

                                    <select

                                        name={field.name}

                                        value={

                                            formData[field.name] || ""

                                        }

                                        onChange={onChange}

                                    >

                                        <option value="">

                                            Select {field.label}

                                        </option>

                                        {

                                            field.options?.map((option) => (

                                                <option

                                                    key={option}

                                                    value={option}

                                                >

                                                    {option}

                                                </option>

                                            ))

                                        }

                                    </select>

                                )

                                /* =========================== */
                                /* Textarea */
                                /* =========================== */

                                : field.type === "textarea"

                                ? (

                                    <textarea

                                        name={field.name}

                                        rows={field.rows || 4}

                                        placeholder={field.placeholder}

                                        value={

                                            formData[field.name] || ""

                                        }

                                        onChange={onChange}

                                        maxLength={

                                            field.maxLength

                                        }

                                    />

                                )

                                /* =========================== */
                                /* Input */
                                /* =========================== */

                                : (

                                    <input

                                        type={field.type}

                                        name={field.name}

                                        value={

                                            formData[field.name] || ""

                                        }

                                        placeholder={field.placeholder}

                                        onChange={onChange}

                                        readOnly={field.readOnly}

                                        min={field.min}

                                    />

                                )

                            }

                            {/* =============================== */}
                            {/* Error */}
                            {/* =============================== */}

                            {

                                errors[field.name] && (

                                    <span className="transfer-error">

                                        {

                                            errors[field.name]

                                        }

                                    </span>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default TransferForm;