import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import FlagOutlinedIcon
    from "@mui/icons-material/FlagOutlined";

import "./PatientResultHeader.css";


// =========================================
// COMPONENT
// =========================================

const PatientResultHeader = ({
    data = {},
    onClose,
}) => {

    // =========================================
    // SAFE DATA
    // =========================================

    const patientName =
        data?.patientName ||
        "Unknown Patient";


    const accessionNo =
        data?.accessionNo ||
        "—";


    const uhid =
        data?.uhid ||
        data?.patientId ||
        "—";


    const age =
        data?.age ??
        "—";


    const gender =
        data?.gender ||
        "—";


    const sampleType =
        data?.sampleType ||
        "—";


    const collectedOn =
        data?.collectedOn ||
        "—";


    const receivedOn =
        data?.receivedOn ||
        "—";


    const testName =
        data?.testProfile ||
        data?.testName ||
        "—";


    const department =
        data?.department ||
        "—";


    const priority =
        data?.priority ||
        "Normal";


    const status =
        data?.resultStatus ||
        data?.status ||
        "Pending";


    const tat =
        data?.tat ||
        "—";


    const tatStatus =
        data?.tatStatus ||
        "normal";


    // =========================================
    // NORMALIZE PRIORITY
    // =========================================

    const normalizedPriority =
        String(priority)
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");


    // =========================================
    // NORMALIZE STATUS
    // =========================================

    const normalizedStatus =
        String(status)
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");


    // =========================================
    // NORMALIZE TAT
    // =========================================

    const normalizedTat =
        String(tatStatus)
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-");


    // =========================================
    // CLOSE WORKSPACE
    // =========================================

    const handleClose = () => {

        if (
            typeof onClose ===
            "function"
        ) {
            onClose();
        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <header
            className="
                result-entry-patient-header
            "
        >

            {/* =================================
                TOP BAR
            ================================= */}

            <div
                className="
                    result-entry-patient-header__top
                "
            >

                {/* =============================
                    ACCESSION + PRIORITY
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__identity
                    "
                >

                    {/* ACCESSION NUMBER */}

                    <strong
                        className="
                            result-entry-patient-header__accession
                        "
                        title={accessionNo}
                    >
                        {accessionNo}
                    </strong>


                    {/* PRIORITY */}

                    <span
                        className={`
                            result-entry-patient-header__priority
                            result-entry-patient-header__priority--${normalizedPriority}
                        `}
                    >

                        <FlagOutlinedIcon />

                        {priority}

                    </span>

                </div>


                {/* =============================
                    HEADER ACTIONS
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__actions
                    "
                >

                    {/* STATUS */}

                    <span
                        className={`
                            result-entry-patient-header__status
                            result-entry-patient-header__status--${normalizedStatus}
                        `}
                    >
                        {status}
                    </span>


                    {/* CLOSE BUTTON */}

                    <button
                        type="button"
                        className="
                            result-entry-patient-header__close
                        "
                        aria-label="
                            Close result workspace
                        "
                        onClick={
                            handleClose
                        }
                    >

                        <CloseOutlinedIcon />

                    </button>

                </div>

            </div>


            {/* =================================
                PATIENT INFORMATION
            ================================= */}

            <div
                className="
                    result-entry-patient-header__patient
                "
            >

                {/* =============================
                    PATIENT
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__patient-main
                    "
                >

                    {/* PATIENT AVATAR */}

                    <div
                        className="
                            result-entry-patient-header__patient-avatar
                        "
                    >

                        <PersonOutlineOutlinedIcon />

                    </div>


                    {/* PATIENT INFO */}

                    <div
                        className="
                            result-entry-patient-header__patient-info
                        "
                    >

                        <div
                            className="
                                result-entry-patient-header__patient-name
                            "
                            title={patientName}
                        >
                            {patientName}
                        </div>


                        <div
                            className="
                                result-entry-patient-header__patient-meta
                            "
                        >

                            <span>
                                {age} Years
                            </span>

                            <span>
                                •
                            </span>

                            <span>
                                {gender}
                            </span>

                        </div>

                    </div>

                </div>


                {/* =============================
                    UHID
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__info-item
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        UHID
                    </span>


                    <span
                        className="
                            result-entry-patient-header__value
                        "
                        title={uhid}
                    >
                        {uhid}
                    </span>

                </div>


                {/* =============================
                    SAMPLE TYPE
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__info-item
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        Sample Type
                    </span>


                    <span
                        className="
                            result-entry-patient-header__value
                        "
                        title={sampleType}
                    >
                        {sampleType}
                    </span>

                </div>


                {/* =============================
                    COLLECTED ON
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__info-item
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        Collected On
                    </span>


                    <span
                        className="
                            result-entry-patient-header__value
                        "
                        title={collectedOn}
                    >
                        {collectedOn}
                    </span>

                </div>

            </div>


            {/* =================================
                TEST DETAILS
            ================================= */}

            <div
                className="
                    result-entry-patient-header__details
                "
            >

                {/* =============================
                    TEST / PROFILE
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__detail
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        Test / Profile
                    </span>


                    <span
                        className="
                            result-entry-patient-header__value
                        "
                        title={testName}
                    >
                        {testName}
                    </span>

                </div>


                {/* =============================
                    DEPARTMENT
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__detail
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        Department
                    </span>


                    <span
                        className="
                            result-entry-patient-header__value
                        "
                        title={department}
                    >
                        {department}
                    </span>

                </div>


                {/* =============================
                    RECEIVED ON
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__detail
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        Received On
                    </span>


                    <span
                        className="
                            result-entry-patient-header__value
                        "
                        title={receivedOn}
                    >
                        {receivedOn}
                    </span>

                </div>


                {/* =============================
                    TAT
                ============================= */}

                <div
                    className="
                        result-entry-patient-header__detail
                    "
                >

                    <span
                        className="
                            result-entry-patient-header__label
                        "
                    >
                        TAT
                    </span>


                    <span
                        className={`
                            result-entry-patient-header__tat
                            result-entry-patient-header__tat--${normalizedTat}
                        `}
                    >

                        <AccessTimeOutlinedIcon />

                        {tat}

                    </span>

                </div>

            </div>

        </header>

    );

};


export default PatientResultHeader;