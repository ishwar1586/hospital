// =========================================
// REPORT DISPATCH TEMPLATES MODAL
// =========================================

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import CheckCircleOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlined";

import "./ReportTemplatesModal.css";


// =========================================
// REPORT DISPATCH TEMPLATES MODAL
// =========================================

const ReportTemplatesModal = ({
    isOpen = false,

    templates = [],

    selectedTemplateId = null,

    onSelect,
    onClose,
    onApply,
}) => {

    // =========================================
    // CLOSED STATE
    // =========================================

    if (
        !isOpen
    ) {
        return null;
    }


    // =========================================
    // SELECT TEMPLATE
    // =========================================

    const handleSelect = (
        template
    ) => {

        if (
            typeof onSelect !==
            "function"
        ) {
            return;
        }


        onSelect(
            template
        );

    };


    // =========================================
    // APPLY TEMPLATE
    // =========================================

    const handleApply = () => {

        if (
            typeof onApply !==
            "function"
        ) {
            return;
        }


        onApply();

    };


    // =========================================
    // CLOSE
    // =========================================

    const handleClose = () => {

        if (
            typeof onClose !==
            "function"
        ) {
            return;
        }


        onClose();

    };


    // =========================================
    // OVERLAY CLICK
    // =========================================

    const handleOverlayMouseDown = (
        event
    ) => {

        if (
            event.target !==
            event.currentTarget
        ) {
            return;
        }


        handleClose();

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <div
            className="
                report-dispatch-templates-modal__overlay
            "

            onMouseDown={
                handleOverlayMouseDown
            }
        >

            <section
                className="
                    report-dispatch-templates-modal
                "

                role="dialog"

                aria-modal="true"

                aria-labelledby="
                    report-dispatch-templates-modal__title
                "
            >

                {/* =================================
                    HEADER
                ================================= */}

                <header
                    className="
                        report-dispatch-templates-modal__header
                    "
                >

                    <div
                        className="
                            report-dispatch-templates-modal__heading
                        "
                    >

                        {/* =========================
                            ICON
                        ========================= */}

                        <div
                            className="
                                report-dispatch-templates-modal__heading-icon
                            "
                        >

                            <DescriptionOutlinedIcon />

                        </div>


                        {/* =========================
                            TITLE
                        ========================= */}

                        <div
                            className="
                                report-dispatch-templates-modal__heading-content
                            "
                        >

                            <h2
                                id="
                                    report-dispatch-templates-modal__title
                                "
                            >
                                Report Templates
                            </h2>


                            <p>
                                Select a template for
                                report dispatch.
                            </p>

                        </div>

                    </div>


                    {/* =============================
                        CLOSE
                    ============================= */}

                    <button
                        type="button"

                        className="
                            report-dispatch-templates-modal__close
                        "

                        onClick={
                            handleClose
                        }

                        aria-label="
                            Close report templates
                        "

                        title="
                            Close
                        "
                    >

                        <CloseOutlinedIcon />

                    </button>

                </header>


                {/* =================================
                    BODY
                ================================= */}

                <div
                    className="
                        report-dispatch-templates-modal__body
                    "
                >

                    {templates.length > 0 ? (

                        <div
                            className="
                                report-dispatch-templates-modal__grid
                            "
                        >

                            {templates.map(
                                (
                                    template
                                ) => {

                                    const isSelected =
                                        selectedTemplateId ===
                                        template.id;


                                    return (

                                        <button
                                            key={
                                                template.id
                                            }

                                            type="button"

                                            className={`
                                                report-dispatch-templates-modal__template
                                                ${
                                                    isSelected
                                                        ? "report-dispatch-templates-modal__template--selected"
                                                        : ""
                                                }
                                            `}

                                            onClick={() =>
                                                handleSelect(
                                                    template
                                                )
                                            }

                                            aria-pressed={
                                                isSelected
                                            }
                                        >

                                            {/* =================
                                                TEMPLATE ICON
                                            ================= */}

                                            <div
                                                className="
                                                    report-dispatch-templates-modal__template-icon
                                                "
                                            >

                                                <DescriptionOutlinedIcon />

                                            </div>


                                            {/* =================
                                                CONTENT
                                            ================= */}

                                            <div
                                                className="
                                                    report-dispatch-templates-modal__template-content
                                                "
                                            >

                                                <strong>
                                                    {
                                                        template.name
                                                    }
                                                </strong>


                                                {
                                                    template.description && (

                                                        <span>
                                                            {
                                                                template.description
                                                            }
                                                        </span>

                                                    )
                                                }


                                                {
                                                    template.format && (

                                                        <small>
                                                            {
                                                                template.format
                                                            }
                                                        </small>

                                                    )
                                                }

                                            </div>


                                            {/* =================
                                                SELECTED
                                            ================= */}

                                            {isSelected && (

                                                <CheckCircleOutlinedIcon
                                                    className="
                                                        report-dispatch-templates-modal__selected-icon
                                                    "
                                                />

                                            )}

                                        </button>

                                    );

                                }
                            )}

                        </div>

                    ) : (

                        /* =========================
                           EMPTY STATE
                        ========================= */

                        <div
                            className="
                                report-dispatch-templates-modal__empty
                            "
                        >

                            <DescriptionOutlinedIcon />


                            <strong>
                                No templates available
                            </strong>


                            <span>
                                Report templates will
                                appear here when they
                                are configured.
                            </span>

                        </div>

                    )}

                </div>


                {/* =================================
                    FOOTER
                ================================= */}

                <footer
                    className="
                        report-dispatch-templates-modal__footer
                    "
                >

                    {/* =============================
                        CANCEL
                    ============================= */}

                    <button
                        type="button"

                        className="
                            report-dispatch-templates-modal__cancel
                        "

                        onClick={
                            handleClose
                        }
                    >
                        Cancel
                    </button>


                    {/* =============================
                        APPLY
                    ============================= */}

                    <button
                        type="button"

                        className="
                            report-dispatch-templates-modal__apply
                        "

                        onClick={
                            handleApply
                        }

                        disabled={
                            !selectedTemplateId
                        }
                    >
                        Apply Template
                    </button>

                </footer>

            </section>

        </div>

    );

};


export default ReportTemplatesModal;