import "./GRNInformationSection.css";

const GRNInformationSection = ({
    formData,
    handleChange,
    config,
}) => {

    const renderField = (field) => {

        switch (field.type) {

            case "textarea":

                return (

                    <textarea

                        name={field.name}

                        value={
                            formData[field.name] || ""
                        }

                        onChange={handleChange}

                        rows={3}

                        disabled={field.disabled}

                    />

                );

            case "select":

                return (

                    <select

                        name={field.name}

                        value={
                            formData[field.name] || ""
                        }

                        onChange={handleChange}

                        disabled={field.disabled}

                    >

                        <option value="">
                            Select
                        </option>

                        {field.options?.map((option) => (

                            <option
                                key={option.value || option}
                                value={option.value || option}
                            >

                                {option.label || option}

                            </option>

                        ))}

                    </select>

                );

            default:

                return (

                    <input

                        type={field.type}

                        name={field.name}

                        value={
                            formData[field.name] || ""
                        }

                        onChange={handleChange}

                        disabled={field.disabled}

                    />

                );

        }

    };

    return (

        <div className="grn-info-card">

            <h3>
                GRN Information
            </h3>

            <div className="grn-info-grid">

                {config.purchaseInformation.map((field) => (

                    <div
                        key={field.name}
                        className={`grn-field ${field.type === "textarea"
                                ? "full-width"
                                : ""
                            }`}
                    >

                        <label>

                            {field.label}

                            {field.required && (
                                <span className="required">
                                    *
                                </span>
                            )}

                        </label>

                        {renderField(field)}

                    </div>

                ))}

            </div>

        </div>

    );

};

export default GRNInformationSection;