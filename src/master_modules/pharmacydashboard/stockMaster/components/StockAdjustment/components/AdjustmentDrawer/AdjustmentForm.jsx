import "./AdjustmentForm.css";

import { adjustmentFormConfig }
    from "../../config/adjustmentFormConfig";

const AdjustmentForm = ({

    formData,

    onChange,

}) => {

    return (

        <div className="adjustment-form">

            {/* ================================= */}

            <div className="adjustment-form-header">

                <h3>

                    Adjustment Details

                </h3>

            </div>

            {/* ================================= */}

            <div className="adjustment-form-body">

                {

                    adjustmentFormConfig.map((field) => (

                        <div

                            key={field.name}

                            className="adjustment-form-group"

                        >

                            <label>

                                {field.label}

                                {

                                    field.required && (

                                        <span>

                                            *

                                        </span>

                                    )

                                }

                            </label>

                            {

                                field.type === "select" ? (

                                    <select

                                        name={field.name}

                                        value={

                                            formData[field.name]

                                        }

                                        onChange={onChange}

                                    >

                                        <option value="">

                                            Select

                                        </option>

                                        {

                                            field.options.map((option) => (

                                                <option

                                                    key={option}

                                                    value={option}

                                                >

                                                    {option}

                                                </option>

                                            ))

                                        }

                                    </select>

                                ) : field.type === "textarea" ? (

                                    <textarea

                                        rows={field.rows}

                                        name={field.name}

                                        placeholder={field.placeholder}

                                        value={

                                            formData[field.name]

                                        }

                                        onChange={onChange}

                                    />

                                ) : (

                                    <input

                                        type={field.type}

                                        name={field.name}

                                        placeholder={field.placeholder}

                                        value={

                                            formData[field.name]

                                        }

                                        onChange={onChange}

                                    />

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AdjustmentForm;