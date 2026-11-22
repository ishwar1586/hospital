const FormSection = ({

    title,

    fields = [],

    formData = {},

    handleChange = () => {},

    errors = {},

}) => {
 
    return (

        <div className="stock-form-section">

            <div className="stock-form-section-header">

                <h3>

                    {title}

                </h3>

            </div>

            <div className="stock-form-section-body">

                <div className="form-grid">

                    {

                        fields.map((field) => (

                            <div

                                key={field.name}

                                className="form-group"

                            >

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

                                {

                                    field.type === "select"

                                    ? (

                                        <select

                                            name={field.name}

                                            value={

                                                formData[field.name] || ""

                                            }

                                            onChange={handleChange}

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

                                    : (

                                        <input

                                            type={field.type}

                                            name={field.name}

                                            placeholder={field.placeholder}

                                            value={

                                                formData[field.name] || ""

                                            }

                                            onChange={handleChange}

                                        />

                                    )

                                }

                                {

                                    errors[field.name] && (

                                        <span className="field-error">

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

        </div>

    );

};

export default FormSection;