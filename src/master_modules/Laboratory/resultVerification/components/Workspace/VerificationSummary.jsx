import FactCheckOutlinedIcon
    from "@mui/icons-material/FactCheckOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import WarningAmberOutlinedIcon
    from "@mui/icons-material/WarningAmberOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";

import BadgeOutlinedIcon
    from "@mui/icons-material/BadgeOutlined";

import "./VerificationSummary.css";
// =========================================
// COMPONENT
// =========================================

const VerificationSummary = ({

    result = {},

    verificationValidation = {},

    rejectionValidation = {},

}) => {


    // =========================================
    // SAFE RESULT
    // =========================================

    const safeResult =
        result || {};


    // =========================================
    // PATIENT
    // =========================================

    const patientName =
        safeResult.patientName ||
        safeResult.name ||
        "—";


    const uhid =
        safeResult.uhid ||
        "—";


    const age =
        safeResult.age ||
        "—";


    const gender =
        safeResult.gender ||
        "—";


    // =========================================
    // TEST
    // =========================================

    const testName =
        safeResult.testName ||
        safeResult.test ||
        "—";


    const testCode =
        safeResult.testCode ||
        "—";


    const sampleType =
        safeResult.sampleType ||
        "—";


    // =========================================
    // DEPARTMENT
    // =========================================

    const department =
        safeResult.department ||
        safeResult.departmentName ||
        "—";


    const analyzer =
        safeResult.analyzer ||
        "—";


    // =========================================
    // DOCTOR
    // =========================================

    const doctorName =
        safeResult.doctorName ||
        safeResult.doctor ||
        "—";


    // =========================================
    // RECEIVED
    // =========================================

    const receivedAt =
        safeResult.receivedAt ||
        "—";


    // =========================================
    // PRIORITY
    // =========================================

    const priority =
        safeResult.priority ||
        "normal";


    const isCritical =
        priority === "critical" ||
        priority === "urgent" ||
        safeResult.critical === true;


    // =========================================
    // ENTERED BY
    // =========================================

    const enteredBy =
        safeResult.enteredBy ||
        "—";


    // =========================================
    // VERIFIED BY
    // =========================================

    const verifiedBy =
        safeResult.verifiedBy ||
        "Not verified";


    // =========================================
    // REMARKS
    // =========================================

    const remarks =
        safeResult.remarks ||
        "";


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                verification-summary
            "
        >

            {/* =================================
                CRITICAL ALERT
            ================================= */}

            {isCritical && (

                <div
                    className="
                        verification-summary__critical
                    "
                >

                    <div
                        className="
                            verification-summary__critical-icon
                        "
                    >

                        <WarningAmberOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__critical-content
                        "
                    >

                        <strong>
                            Critical Result Requires Attention
                        </strong>

                        <span>
                            This result has been marked as
                            critical and should be reviewed
                            carefully before verification.
                        </span>

                    </div>

                </div>

            )}


            {/* =================================
                SUMMARY GRID
            ================================= */}

            <div
                className="
                    verification-summary__grid
                "
            >


                {/* =================================
                    PATIENT
                ================================= */}

                <div
                    className="
                        verification-summary__card
                    "
                >

                    <div
                        className="
                            verification-summary__icon
                            verification-summary__icon--patient
                        "
                    >

                        <PersonOutlineOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__content
                        "
                    >

                        <span>
                            Patient
                        </span>

                        <strong>
                            {patientName}
                        </strong>

                        <small>
                            UHID: {uhid}
                        </small>

                    </div>

                </div>


                {/* =================================
                    TEST
                ================================= */}

                <div
                    className="
                        verification-summary__card
                    "
                >

                    <div
                        className="
                            verification-summary__icon
                            verification-summary__icon--test
                        "
                    >

                        <ScienceOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__content
                        "
                    >

                        <span>
                            Test / Profile
                        </span>

                        <strong>
                            {testName}
                        </strong>

                        <small>
                            Code: {testCode}
                        </small>

                    </div>

                </div>


                {/* =================================
                    SAMPLE
                ================================= */}

                <div
                    className="
                        verification-summary__card
                    "
                >

                    <div
                        className="
                            verification-summary__icon
                            verification-summary__icon--sample
                        "
                    >

                        <FactCheckOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__content
                        "
                    >

                        <span>
                            Sample
                        </span>

                        <strong>
                            {sampleType}
                        </strong>

                        <small>
                            Analyzer: {analyzer}
                        </small>

                    </div>

                </div>


                {/* =================================
                    RECEIVED
                ================================= */}

                <div
                    className="
                        verification-summary__card
                    "
                >

                    <div
                        className="
                            verification-summary__icon
                            verification-summary__icon--time
                        "
                    >

                        <AccessTimeOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__content
                        "
                    >

                        <span>
                            Received
                        </span>

                        <strong>
                            {receivedAt}
                        </strong>

                        <small>
                            Department: {department}
                        </small>

                    </div>

                </div>


                {/* =================================
                    DOCTOR
                ================================= */}

                <div
                    className="
                        verification-summary__card
                    "
                >

                    <div
                        className="
                            verification-summary__icon
                            verification-summary__icon--doctor
                        "
                    >

                        <BadgeOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__content
                        "
                    >

                        <span>
                            Ordering Doctor
                        </span>

                        <strong>
                            {doctorName}
                        </strong>

                        <small>
                            Entered by: {enteredBy}
                        </small>

                    </div>

                </div>


                {/* =================================
                    VERIFICATION
                ================================= */}

                <div
                    className="
                        verification-summary__card
                    "
                >

                    <div
                        className="
                            verification-summary__icon
                            verification-summary__icon--verification
                        "
                    >

                        <VerifiedOutlinedIcon />

                    </div>


                    <div
                        className="
                            verification-summary__content
                        "
                    >

                        <span>
                            Verification
                        </span>

                        <strong>
                            {verifiedBy}
                        </strong>

                        <small>
                            {verificationValidation?.canVerify
                                ? "Ready for verification"
                                : "Verification restricted"}
                        </small>

                    </div>

                </div>

            </div>


            {/* =================================
                REMARKS
            ================================= */}

            {remarks && (

                <div
                    className="
                        verification-summary__remarks
                    "
                >

                    <span>
                        Result Remarks
                    </span>

                    <p>
                        {remarks}
                    </p>

                </div>

            )}


            {/* =================================
                VERIFICATION STATE
            ================================= */}

            <div
                className="
                    verification-summary__state
                "
            >

                <div>

                    <span>
                        Verification State
                    </span>

                    <strong>
                        {
                            verificationValidation?.canVerify
                                ? "Ready for Review"
                                : "Review Restricted"
                        }
                    </strong>

                </div>


                <div>

                    <span>
                        Rejection
                    </span>

                    <strong>
                        {
                            rejectionValidation?.canReject
                                ? "Available"
                                : "Not Available"
                        }
                    </strong>

                </div>

            </div>

        </section>

    );

};


export default VerificationSummary;