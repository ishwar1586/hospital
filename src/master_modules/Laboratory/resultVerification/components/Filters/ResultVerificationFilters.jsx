import SearchOutlinedIcon
    from "@mui/icons-material/SearchOutlined";

import RestartAltOutlinedIcon
    from "@mui/icons-material/RestartAltOutlined";

    import "./ResultVerificationFilters.css";

// =========================================
// COMPONENT
// =========================================

const ResultVerificationFilters = ({
    filterValues = {},

    onFilterChange,

    onReset,

    departments = [],

    analyzers = [],

    testNames = [],

}) => {


    // =========================================
    // SAFE VALUES
    // =========================================

    const search =
        filterValues.search || "";

    const department =
        filterValues.department || "all";

    const analyzer =
        filterValues.analyzer || "all";

    const testName =
        filterValues.testName || "all";

    const verificationStatus =
        filterValues.verificationStatus || "all";

    const priority =
        filterValues.priority || "all";


    // =========================================
    // CHANGE HANDLER
    // =========================================

    const handleChange = (
        filterId,
        value
    ) => {

        if (
            typeof onFilterChange !==
            "function"
        ) {

            return;

        }


        onFilterChange(
            filterId,
            value
        );

    };


    // =========================================
    // SEARCH
    // =========================================

    const handleSearchChange = (
        event
    ) => {

        handleChange(
            "search",
            event.target.value
        );

    };


    // =========================================
    // RESET
    // =========================================

    const handleReset = () => {

        if (
            typeof onReset ===
            "function"
        ) {

            onReset();

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-verification-filters
            "
        >

            {/* =================================
                SEARCH
            ================================= */}

            <div
                className="
                    result-verification-filters__search
                "
            >

                <SearchOutlinedIcon />

                <input

                    type="search"

                    value={
                        search
                    }

                    onChange={
                        handleSearchChange
                    }

                    placeholder="
                        Search patient, UHID, accession no...
                    "

                    aria-label="
                        Search result verification
                    "

                />

            </div>


            {/* =================================
                DEPARTMENT
            ================================= */}

            <div
                className="
                    result-verification-filters__field
                "
            >

                <label
                    htmlFor="
                        result-verification-department
                    "
                >
                    Department
                </label>

                <select

                    id="
                        result-verification-department
                    "

                    value={
                        department
                    }

                    onChange={(event) =>
                        handleChange(
                            "department",
                            event.target.value
                        )
                    }

                >

                    <option value="all">
                        All Departments
                    </option>


                    {departments.map(
                        (
                            departmentItem,
                            index
                        ) => {

                            const value =
                                typeof departmentItem ===
                                "string"
                                    ? departmentItem
                                    : departmentItem.value;

                            const label =
                                typeof departmentItem ===
                                "string"
                                    ? departmentItem
                                    : departmentItem.label;

                            return (

                                <option
                                    key={
                                        value ||
                                        index
                                    }

                                    value={
                                        value
                                    }
                                >
                                    {label}
                                </option>

                            );

                        }
                    )}

                </select>

            </div>


            {/* =================================
                ANALYZER
            ================================= */}

            <div
                className="
                    result-verification-filters__field
                "
            >

                <label
                    htmlFor="
                        result-verification-analyzer
                    "
                >
                    Analyzer
                </label>

                <select

                    id="
                        result-verification-analyzer
                    "

                    value={
                        analyzer
                    }

                    onChange={(event) =>
                        handleChange(
                            "analyzer",
                            event.target.value
                        )
                    }

                >

                    <option value="all">
                        All Analyzers
                    </option>


                    {analyzers.map(
                        (
                            analyzerItem,
                            index
                        ) => {

                            const value =
                                typeof analyzerItem ===
                                "string"
                                    ? analyzerItem
                                    : analyzerItem.value;

                            const label =
                                typeof analyzerItem ===
                                "string"
                                    ? analyzerItem
                                    : analyzerItem.label;

                            return (

                                <option
                                    key={
                                        value ||
                                        index
                                    }

                                    value={
                                        value
                                    }
                                >
                                    {label}
                                </option>

                            );

                        }
                    )}

                </select>

            </div>


            {/* =================================
                TEST
            ================================= */}

            <div
                className="
                    result-verification-filters__field
                "
            >

                <label
                    htmlFor="
                        result-verification-test
                    "
                >
                    Test
                </label>

                <select

                    id="
                        result-verification-test
                    "

                    value={
                        testName
                    }

                    onChange={(event) =>
                        handleChange(
                            "testName",
                            event.target.value
                        )
                    }

                >

                    <option value="all">
                        All Tests
                    </option>


                    {testNames.map(
                        (
                            testItem,
                            index
                        ) => {

                            const value =
                                typeof testItem ===
                                "string"
                                    ? testItem
                                    : testItem.value;

                            const label =
                                typeof testItem ===
                                "string"
                                    ? testItem
                                    : testItem.label;

                            return (

                                <option
                                    key={
                                        value ||
                                        index
                                    }

                                    value={
                                        value
                                    }
                                >
                                    {label}
                                </option>

                            );

                        }
                    )}

                </select>

            </div>


            {/* =================================
                VERIFICATION STATUS
            ================================= */}

            <div
                className="
                    result-verification-filters__field
                "
            >

                <label
                    htmlFor="
                        result-verification-status
                    "
                >
                    Status
                </label>

                <select

                    id="
                        result-verification-status
                    "

                    value={
                        verificationStatus
                    }

                    onChange={(event) =>
                        handleChange(
                            "verificationStatus",
                            event.target.value
                        )
                    }

                >

                    <option value="all">
                        All Status
                    </option>

                    <option value="pending">
                        Pending Verification
                    </option>

                    <option value="underReview">
                        Under Review
                    </option>

                    <option value="verified">
                        Verified
                    </option>

                    <option value="rejected">
                        Rejected
                    </option>

                </select>

            </div>


            {/* =================================
                PRIORITY
            ================================= */}

            <div
                className="
                    result-verification-filters__field
                "
            >

                <label
                    htmlFor="
                        result-verification-priority
                    "
                >
                    Priority
                </label>

                <select

                    id="
                        result-verification-priority
                    "

                    value={
                        priority
                    }

                    onChange={(event) =>
                        handleChange(
                            "priority",
                            event.target.value
                        )
                    }

                >

                    <option value="all">
                        All Priority
                    </option>

                    <option value="normal">
                        Normal
                    </option>

                    <option value="high">
                        High
                    </option>

                    <option value="critical">
                        Critical
                    </option>

                </select>

            </div>


            {/* =================================
                RESET
            ================================= */}

            <button

                type="button"

                className="
                    result-verification-filters__reset
                "

                onClick={
                    handleReset
                }

                title="
                    Reset filters
                "

            >

                <RestartAltOutlinedIcon />

                <span>
                    Reset
                </span>

            </button>

        </section>

    );

};


export default ResultVerificationFilters;