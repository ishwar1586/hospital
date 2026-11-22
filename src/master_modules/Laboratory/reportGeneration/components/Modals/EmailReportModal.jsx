// =========================================
// EMAIL REPORT MODAL
// =========================================

import {
    useEffect,
    useState,
} from "react";


// =========================================
// MATERIAL UI
// =========================================

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import AttachFileOutlinedIcon
    from "@mui/icons-material/AttachFileOutlined";

import SendOutlinedIcon
    from "@mui/icons-material/SendOutlined";

import CircularProgress
    from "@mui/material/CircularProgress";


// =========================================
// STYLES
// =========================================

import "./EmailReportModal.css";


// =========================================
// EMAIL REPORT MODAL
// =========================================

const EmailReportModal = ({
    open = false,

    report = null,

    onClose,

    onSend,

}) => {

    // =========================================
    // SAFE REPORT
    // =========================================

    const safeReport =
        report &&
        typeof report === "object"
            ? report
            : {};


    // =========================================
    // FORM STATE
    // =========================================

    const [
        to,
        setTo,
    ] = useState("");


    const [
        cc,
        setCc,
    ] = useState("");


    const [
        bcc,
        setBcc,
    ] = useState("");


    const [
        subject,
        setSubject,
    ] = useState("");


    const [
        message,
        setMessage,
    ] = useState("");


    const [
        isSending,
        setIsSending,
    ] = useState(false);


    const [
        error,
        setError,
    ] = useState("");


    // =========================================
    // RESET / INITIALIZE FORM
    // =========================================

    useEffect(
        () => {

            if (
                !open
            ) {
                return;
            }


            const patientName =
                safeReport.patientName ||
                "Patient";


            const accessionNo =
                safeReport.accessionNo ||
                "";


            setTo(
                safeReport.email ||
                safeReport.patientEmail ||
                ""
            );


            setCc(
                ""
            );


            setBcc(
                ""
            );


            setSubject(
                accessionNo
                    ? `Laboratory Report - ${patientName} - ${accessionNo}`
                    : `Laboratory Report - ${patientName}`
            );


            setMessage(
                `Dear Recipient,

Please find attached the laboratory report for ${patientName}${accessionNo ? ` (${accessionNo})` : ""}.

Kindly review the attached report.

Regards,
City Care Diagnostics`
            );


            setError(
                ""
            );


            setIsSending(
                false
            );

        },
        [
            open,
            report,
        ]
    );


    // =========================================
    // CLOSE
    // =========================================

    const handleClose = () => {

        if (
            isSending
        ) {
            return;
        }


        if (
            typeof onClose ===
            "function"
        ) {

            onClose();

        }

    };


    // =========================================
    // EMAIL VALIDATION
    // =========================================

    const validateEmailList = (
        value
    ) => {

        if (
            !value.trim()
        ) {
            return true;
        }


        const emails =
            value
                .split(",")
                .map(
                    (email) =>
                        email.trim()
                )
                .filter(
                    Boolean
                );


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        return emails.every(
            (email) =>
                emailPattern.test(
                    email
                )
        );

    };


    // =========================================
    // SUBMIT
    // =========================================

    const handleSubmit = async (
        event
    ) => {

        event.preventDefault();


        setError(
            ""
        );


        // =============================
        // REQUIRED RECIPIENT
        // =============================

        if (
            !to.trim()
        ) {

            setError(
                "Please enter at least one recipient email address."
            );

            return;

        }


        // =============================
        // VALIDATE TO
        // =============================

        if (
            !validateEmailList(
                to
            )
        ) {

            setError(
                "Please enter valid recipient email addresses."
            );

            return;

        }


        // =============================
        // VALIDATE CC
        // =============================

        if (
            !validateEmailList(
                cc
            )
        ) {

            setError(
                "Please enter valid CC email addresses."
            );

            return;

        }


        // =============================
        // VALIDATE BCC
        // =============================

        if (
            !validateEmailList(
                bcc
            )
        ) {

            setError(
                "Please enter valid BCC email addresses."
            );

            return;

        }


        // =============================
        // SUBJECT
        // =============================

        if (
            !subject.trim()
        ) {

            setError(
                "Subject is required."
            );

            return;

        }


        // =============================
        // SENDING
        // =============================

        setIsSending(
            true
        );


        try {

            const payload = {

                report:
                    safeReport,

                to:
                    to
                        .split(",")
                        .map(
                            (email) =>
                                email.trim()
                        )
                        .filter(
                            Boolean
                        ),

                cc:
                    cc
                        .split(",")
                        .map(
                            (email) =>
                                email.trim()
                        )
                        .filter(
                            Boolean
                        ),

                bcc:
                    bcc
                        .split(",")
                        .map(
                            (email) =>
                                email.trim()
                        )
                        .filter(
                            Boolean
                        ),

                subject:
                    subject.trim(),

                message:
                    message.trim(),

            };


            if (
                typeof onSend ===
                "function"
            ) {

                await onSend(
                    payload
                );

            }

        } catch (
            sendError
        ) {

            setError(
                sendError?.message ||
                "Unable to send the report. Please try again."
            );

        } finally {

            setIsSending(
                false
            );

        }

    };


    // =========================================
    // DON'T RENDER
    // =========================================

    if (
        !open
    ) {

        return null;

    }


    // =========================================
    // REPORT INFO
    // =========================================

    const patientName =
        safeReport.patientName ||
        "Patient";


    const accessionNo =
        safeReport.accessionNo ||
        "—";


    const reportFormat =
        safeReport.reportFormat ||
        "PDF";


    // =========================================
    // RENDER
    // =========================================

    return (

        <div
            className="
                email-report-modal__overlay
            "

            role="presentation"

            onMouseDown={(
                event
            ) => {

                if (
                    event.target ===
                    event.currentTarget
                ) {

                    handleClose();

                }

            }}
        >

            <div
                className="
                    email-report-modal
                "

                role="dialog"

                aria-modal="true"

                aria-labelledby="
                    email-report-modal-title
                "
            >

                {/* =================================
                    HEADER
                ================================= */}

                <header
                    className="
                        email-report-modal__header
                    "
                >

                    <div
                        className="
                            email-report-modal__title-group
                        "
                    >

                        <div
                            className="
                                email-report-modal__icon
                            "
                        >

                            <EmailOutlinedIcon />

                        </div>


                        <div>

                            <h2
                                id="
                                    email-report-modal-title
                                "
                            >
                                Email Report
                            </h2>

                            <p>
                                Send the generated report
                                securely by email.
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"

                        className="
                            email-report-modal__close
                        "

                        onClick={
                            handleClose
                        }

                        disabled={
                            isSending
                        }

                        aria-label="
                            Close email report modal
                        "
                    >

                        <CloseOutlinedIcon />

                    </button>

                </header>


                {/* =================================
                    REPORT SUMMARY
                ================================= */}

                <div
                    className="
                        email-report-modal__report
                    "
                >

                    <div
                        className="
                            email-report-modal__report-icon
                        "
                    >

                        <AttachFileOutlinedIcon />

                    </div>


                    <div
                        className="
                            email-report-modal__report-info
                        "
                    >

                        <strong>
                            {
                                patientName
                            }
                        </strong>

                        <span>
                            Accession:
                            {" "}
                            {
                                accessionNo
                            }
                        </span>

                    </div>


                    <span
                        className="
                            email-report-modal__format
                        "
                    >
                        {
                            reportFormat
                        }
                    </span>

                </div>


                {/* =================================
                    FORM
                ================================= */}

                <form
                    className="
                        email-report-modal__form
                    "

                    onSubmit={
                        handleSubmit
                    }
                >

                    {/* =============================
                        TO
                    ============================= */}

                    <div
                        className="
                            email-report-modal__field
                        "
                    >

                        <label
                            htmlFor="
                                email-report-to
                            "
                        >
                            To
                            <span>
                                *
                            </span>
                        </label>


                        <input
                            id="
                                email-report-to
                            "

                            type="text"

                            value={
                                to
                            }

                            onChange={(
                                event
                            ) =>
                                setTo(
                                    event.target.value
                                )
                            }

                            placeholder="
                                recipient@example.com
                            "

                            disabled={
                                isSending
                            }

                            autoComplete="
                                email
                            "
                        />


                        <small>
                            Separate multiple email
                            addresses with commas.
                        </small>

                    </div>


                    {/* =============================
                        CC / BCC
                    ============================= */}

                    <div
                        className="
                            email-report-modal__row
                        "
                    >

                        <div
                            className="
                                email-report-modal__field
                            "
                        >

                            <label
                                htmlFor="
                                    email-report-cc
                                "
                            >
                                CC
                            </label>


                            <input
                                id="
                                    email-report-cc
                                "

                                type="text"

                                value={
                                    cc
                                }

                                onChange={(
                                    event
                                ) =>
                                    setCc(
                                        event.target.value
                                    )
                                }

                                placeholder="
                                    Optional
                                "

                                disabled={
                                    isSending
                                }
                            />

                        </div>


                        <div
                            className="
                                email-report-modal__field
                            "
                        >

                            <label
                                htmlFor="
                                    email-report-bcc
                                "
                            >
                                BCC
                            </label>


                            <input
                                id="
                                    email-report-bcc
                                "

                                type="text"

                                value={
                                    bcc
                                }

                                onChange={(
                                    event
                                ) =>
                                    setBcc(
                                        event.target.value
                                    )
                                }

                                placeholder="
                                    Optional
                                "

                                disabled={
                                    isSending
                                }
                            />

                        </div>

                    </div>


                    {/* =============================
                        SUBJECT
                    ============================= */}

                    <div
                        className="
                            email-report-modal__field
                        "
                    >

                        <label
                            htmlFor="
                                email-report-subject
                            "
                        >
                            Subject
                            <span>
                                *
                            </span>
                        </label>


                        <input
                            id="
                                email-report-subject
                            "

                            type="text"

                            value={
                                subject
                            }

                            onChange={(
                                event
                            ) =>
                                setSubject(
                                    event.target.value
                                )
                            }

                            placeholder="
                                Email subject
                            "

                            disabled={
                                isSending
                            }
                        />

                    </div>


                    {/* =============================
                        MESSAGE
                    ============================= */}

                    <div
                        className="
                            email-report-modal__field
                        "
                    >

                        <label
                            htmlFor="
                                email-report-message
                            "
                        >
                            Message
                        </label>


                        <textarea
                            id="
                                email-report-message
                            "

                            value={
                                message
                            }

                            onChange={(
                                event
                            ) =>
                                setMessage(
                                    event.target.value
                                )
                            }

                            rows={6}

                            placeholder="
                                Write your message...
                            "

                            disabled={
                                isSending
                            }
                        />

                    </div>


                    {/* =============================
                        ERROR
                    ============================= */}

                    {error && (

                        <div
                            className="
                                email-report-modal__error
                            "

                            role="alert"
                        >
                            {
                                error
                            }
                        </div>

                    )}


                    {/* =============================
                        FOOTER
                    ============================= */}

                    <footer
                        className="
                            email-report-modal__footer
                        "
                    >

                        <button
                            type="button"

                            className="
                                email-report-modal__cancel
                            "

                            onClick={
                                handleClose
                            }

                            disabled={
                                isSending
                            }
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"

                            className="
                                email-report-modal__send
                            "

                            disabled={
                                isSending
                            }
                        >

                            {isSending ? (

                                <>

                                    <CircularProgress
                                        size={14}

                                        thickness={5}

                                        sx={{
                                            color:
                                                "#ffffff",
                                        }}
                                    />

                                    <span>
                                        Sending...
                                    </span>

                                </>

                            ) : (

                                <>

                                    <SendOutlinedIcon />

                                    <span>
                                        Send Report
                                    </span>

                                </>

                            )}

                        </button>

                    </footer>

                </form>

            </div>

        </div>

    );

};


export default EmailReportModal;