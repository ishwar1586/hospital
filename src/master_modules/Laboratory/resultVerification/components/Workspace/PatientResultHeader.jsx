import ArrowBackOutlinedIcon
    from "@mui/icons-material/ArrowBackOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import PlayArrowOutlinedIcon
    from "@mui/icons-material/PlayArrowOutlined";

import ResultVerificationStatusChip
    from "../Table/VerificationStatusChip";

import "./PatientResultHeader.css";


// =========================================
// COMPONENT
// =========================================

const PatientResultHeader = ({
    result = {},

    status = "pending",

    isReviewing = false,

    onClose,

    onStartReview,

    canStartReview = false,

}) => {


    // =========================================
    // SAFE RESULT
    // =========================================

    const safeResult =
        result || {};


    // =========================================
    // PATIENT NAME
    // =========================================

    const patientName =
        safeResult.patientName ||
        safeResult.name ||
        "Unknown Patient";


    // =========================================
    // UHID
    // =========================================

    const uhid =
        safeResult.uhid ||
        safeResult.patientId ||
        "—";


    // =========================================
    // ACCESSION
    // =========================================

    const accessionNo =
        safeResult.accessionNo ||
        "—";


    // =========================================
    // TEST NAME
    // =========================================

    const testName =
        safeResult.testName ||
        safeResult.test ||
        safeResult.testProfile ||
        "—";


    // =========================================
    // TEST CODE
    // =========================================

    const testCode =
        safeResult.testCode ||
        "";


    // =========================================
    // DOCTOR
    // =========================================

    const doctorName =
        safeResult.doctorName ||
        safeResult.doctor ||
        "—";


    // =========================================
    // DEPARTMENT
    // =========================================

    const department =
        safeResult.department ||
        safeResult.departmentName ||
        "—";


    // =========================================
    // AGE / GENDER
    // =========================================

    const ageGender =
        safeResult.ageGender ||
        (
            safeResult.age ||
            safeResult.gender
                ? `${safeResult.age || "—"} / ${safeResult.gender || "—"}`
                : "—"
        );


    // =========================================
    // START REVIEW
    // =========================================

    const handleStartReview = () => {

        if (
            !canStartReview ||
            typeof onStartReview !==
            "function"
        ) {
            return;
        }


        onStartReview();

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <header
            className="
                patient-result-header
            "
        >

            {/* =================================
                LEFT SECTION
            ================================= */}

            <div
                className="
                    patient-result-header__left
                "
            >

                {/* =============================
                    BACK BUTTON
                ============================= */}

                <button
                    type="button"

                    className="
                        patient-result-header__back
                    "

                    onClick={
                        onClose
                    }

                    aria-label="
                        Back to verification worklist
                    "
                >

                    <ArrowBackOutlinedIcon />

                </button>


                {/* =============================
                    PATIENT AVATAR
                ============================= */}

                <div
                    className="
                        patient-result-header__avatar
                    "
                >

                    <PersonOutlineOutlinedIcon />

                </div>


                {/* =============================
                    PATIENT INFO
                ============================= */}

                <div
                    className="
                        patient-result-header__patient
                    "
                >

                    <div
                        className="
                            patient-result-header__name-row
                        "
                    >

                        <h2
                            title={patientName}
                        >
                            {patientName}
                        </h2>


                        <span
                            className="
                                patient-result-header__age-gender
                            "
                        >
                            {ageGender}
                        </span>

                    </div>


                    <div
                        className="
                            patient-result-header__identifiers
                        "
                    >

                        <span
                            title={`UHID: ${uhid}`}
                        >
                            UHID: {uhid}
                        </span>


                        <span
                            className="
                                patient-result-header__separator
                            "
                        >
                            •
                        </span>


                        <span
                            title={`Accession: ${accessionNo}`}
                        >
                            Accession: {accessionNo}
                        </span>

                    </div>

                </div>

            </div>


            {/* =================================
                CENTER / RESULT INFO
            ================================= */}

            <div
                className="
                    patient-result-header__result
                "
            >

                {/* =============================
                    TEST
                ============================= */}

                <div
                    className="
                        patient-result-header__test
                    "
                >

                    <ScienceOutlinedIcon />


                    <div>

                        <strong
                            title={testName}
                        >
                            {testName}
                        </strong>


                        {testCode && (

                            <span
                                title={testCode}
                            >
                                {testCode}
                            </span>

                        )}

                    </div>

                </div>


                {/* =============================
                    TEST META
                ============================= */}

                <div
                    className="
                        patient-result-header__meta
                    "
                >

                    <span
                        title={department}
                    >
                        {department}
                    </span>


                    <span
                        className="
                            patient-result-header__separator
                        "
                    >
                        •
                    </span>


                    <span
                        title={doctorName}
                    >
                        {doctorName}
                    </span>

                </div>

            </div>


            {/* =================================
                RIGHT SECTION
            ================================= */}

            <div
                className="
                    patient-result-header__right
                "
            >

                {/* =============================
                    STATUS
                ============================= */}

                <ResultVerificationStatusChip
                    status={status}
                />


                {/* =============================
                    START REVIEW
                ============================= */}

                {!isReviewing && (

                    <button
                        type="button"

                        className="
                            patient-result-header__review-btn
                        "

                        disabled={
                            !canStartReview
                        }

                        onClick={
                            handleStartReview
                        }
                    >

                        <PlayArrowOutlinedIcon />

                        <span>
                            Start Review
                        </span>

                    </button>

                )}


                {/* =============================
                    REVIEWING
                ============================= */}

                {isReviewing && (

                    <div
                        className="
                            patient-result-header__reviewing
                        "
                    >

                        <span
                            className="
                                patient-result-header__reviewing-dot
                            "
                        />


                        <span>
                            Review in progress
                        </span>

                    </div>

                )}

            </div>

        </header>

    );

};


export default PatientResultHeader;