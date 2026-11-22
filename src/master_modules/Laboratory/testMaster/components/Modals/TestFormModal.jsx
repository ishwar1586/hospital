import "./TestFormModal.css";

const TestForm = ({
    formData,
    onChange,
    mode = "create",
}) => {

    const isEditMode = mode === "edit";

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;

        onChange({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="test-form">

            {/* =========================
                BASIC INFORMATION
            ========================= */}

            <div className="test-form__section">

                <div className="test-form__section-header">

                    <h3>
                        Basic Information
                    </h3>

                    <p>
                        Enter the basic details of the laboratory test.
                    </p>

                </div>


                <div className="test-form__grid">

                    {/* Test Code */}

                    <div className="test-form__field">

                        <label htmlFor="testCode">
                            Test Code
                            <span>*</span>
                        </label>

                        <input
                            id="testCode"
                            name="testCode"
                            type="text"
                            value={formData.testCode || ""}
                            onChange={handleChange}
                            placeholder="e.g. CBC001"
                            disabled={isEditMode}
                        />

                        {isEditMode && (
                            <small>
                                Test code cannot be changed.
                            </small>
                        )}

                    </div>


                    {/* Test Name */}

                    <div className="test-form__field">

                        <label htmlFor="testName">
                            Test Name
                            <span>*</span>
                        </label>

                        <input
                            id="testName"
                            name="testName"
                            type="text"
                            value={formData.testName || ""}
                            onChange={handleChange}
                            placeholder="Enter test name"
                        />

                    </div>


                    {/* Category */}

                    <div className="test-form__field">

                        <label htmlFor="category">
                            Test Category
                            <span>*</span>
                        </label>

                        <select
                            id="category"
                            name="category"
                            value={formData.category || ""}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Category
                            </option>

                            <option value="Hematology">
                                Hematology
                            </option>

                            <option value="Biochemistry">
                                Biochemistry
                            </option>

                            <option value="Immunology">
                                Immunology
                            </option>

                            <option value="Microbiology">
                                Microbiology
                            </option>

                            <option value="Clinical Pathology">
                                Clinical Pathology
                            </option>

                        </select>

                    </div>


                    {/* Sample Type */}

                    <div className="test-form__field">

                        <label htmlFor="sampleType">
                            Sample Type
                            <span>*</span>
                        </label>

                        <select
                            id="sampleType"
                            name="sampleType"
                            value={formData.sampleType || ""}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select Sample Type
                            </option>

                            <option value="Whole Blood">
                                Whole Blood
                            </option>

                            <option value="Serum">
                                Serum
                            </option>

                            <option value="Plasma">
                                Plasma
                            </option>

                            <option value="Urine">
                                Urine
                            </option>

                            <option value="Stool">
                                Stool
                            </option>

                            <option value="Swab">
                                Swab
                            </option>

                        </select>

                    </div>

                </div>

            </div>


            {/* =========================
                TEST CONFIGURATION
            ========================= */}

            <div className="test-form__section">

                <div className="test-form__section-header">

                    <h3>
                        Test Configuration
                    </h3>

                    <p>
                        Configure methodology, turnaround time and pricing.
                    </p>

                </div>


                <div className="test-form__grid">

                    {/* Method */}

                    <div className="test-form__field">

                        <label htmlFor="method">
                            Method
                            <span>*</span>
                        </label>

                        <input
                            id="method"
                            name="method"
                            type="text"
                            value={formData.method || ""}
                            onChange={handleChange}
                            placeholder="e.g. Automated"
                        />

                    </div>


                    {/* TAT */}

                    <div className="test-form__field">

                        <label htmlFor="tat">
                            Turnaround Time
                            <span>*</span>
                        </label>

                        <input
                            id="tat"
                            name="tat"
                            type="text"
                            value={formData.tat || ""}
                            onChange={handleChange}
                            placeholder="e.g. 4 Hours"
                        />

                    </div>


                    {/* Price */}

                    <div className="test-form__field">

                        <label htmlFor="price">
                            Test Price
                            <span>*</span>
                        </label>

                        <div className="test-form__price-wrapper">

                            <span>
                                ₹
                            </span>

                            <input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                value={formData.price || ""}
                                onChange={handleChange}
                                placeholder="Enter price"
                            />

                        </div>

                    </div>


                    {/* Profiles */}

                    <div className="test-form__field">

                        <label htmlFor="profiles">
                            Profiles
                        </label>

                        <input
                            id="profiles"
                            name="profiles"
                            type="number"
                            min="0"
                            value={formData.profiles ?? ""}
                            onChange={handleChange}
                            placeholder="0"
                        />

                    </div>


                    {/* Status */}

                    <div className="test-form__field">

                        <label htmlFor="status">
                            Status
                        </label>

                        <select
                            id="status"
                            name="status"
                            value={formData.status || "Active"}
                            onChange={handleChange}
                        >

                            <option value="Active">
                                Active
                            </option>

                            <option value="Inactive">
                                Inactive
                            </option>

                        </select>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TestForm;