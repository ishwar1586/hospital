// =========================================
// REPORT TEMPLATES MODAL
// =========================================

import {
    useEffect,
    useMemo,
    useState,
} from "react";


// =========================================
// ICONS
// =========================================

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import CheckCircleOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import AddOutlinedIcon
    from "@mui/icons-material/AddOutlined";


// =========================================
// STYLES
// =========================================

import "./ReportTemplatesModal.css";


// =========================================
// DEFAULT TEMPLATES
// =========================================

const DEFAULT_TEMPLATES = [

    {
        id:
            "standard-lab",

        name:
            "Standard Laboratory Report",

        description:
            "Complete laboratory report with patient details, test results and verification information.",

        format:
            "PDF",

        category:
            "Laboratory",

        isDefault:
            true,
    },


    {
        id:
            "compact-lab",

        name:
            "Compact Laboratory Report",

        description:
            "Condensed report format for quick viewing and routine printing.",

        format:
            "PDF",

        category:
            "Laboratory",

        isDefault:
            false,
    },


    {
        id:
            "clinical-report",

        name:
            "Clinical Report",

        description:
            "Detailed clinical format with expanded observations and remarks.",

        format:
            "PDF",

        category:
            "Clinical",

        isDefault:
            false,
    },


    {
        id:
            "patient-copy",

        name:
            "Patient Copy",

        description:
            "Simplified patient-facing report suitable for sharing and printing.",

        format:
            "PDF",

        category:
            "Patient",

        isDefault:
            false,
    },

];


// =========================================
// REPORT TEMPLATES MODAL
// =========================================

const ReportTemplatesModal = ({
    open = false,

    templates = DEFAULT_TEMPLATES,

    selectedTemplateId = "",

    onClose,

    onSelect,

    onPreview,

    onCreateTemplate,

}) => {

    // =========================================
    // LOCAL SELECTION
    // =========================================

    const [
        selectedId,
        setSelectedId,
    ] = useState(
        selectedTemplateId
    );


    // =========================================
    // INITIALIZE SELECTION
    // =========================================

    useEffect(
        () => {

            if (
                !open
            ) {
                return;
            }


            if (
                selectedTemplateId
            ) {

                setSelectedId(
                    selectedTemplateId
                );

                return;

            }


            const defaultTemplate =
                templates.find(
                    (template) =>
                        template.isDefault
                );


            setSelectedId(
                defaultTemplate?.id ||
                templates[0]?.id ||
                ""
            );

        },
        [
            open,
            selectedTemplateId,
            templates,
        ]
    );


    // =========================================
    // SAFE TEMPLATES
    // =========================================

    const safeTemplates =
        useMemo(
            () => {

                return Array.isArray(
                    templates
                )
                    ? templates
                    : [];

            },
            [
                templates,
            ]
        );


    // =========================================
    // SELECT TEMPLATE
    // =========================================

    const handleSelect = (
        template
    ) => {

        if (
            !template?.id
        ) {
            return;
        }


        setSelectedId(
            template.id
        );

    };


    // =========================================
    // CONFIRM SELECTION
    // =========================================

    const handleConfirm = () => {

        if (
            !selectedId
        ) {
            return;
        }


        const template =
            safeTemplates.find(
                (item) =>
                    item.id ===
                    selectedId
            );


        if (
            typeof onSelect ===
            "function"
        ) {

            onSelect(
                template
            );

        }

    };


    // =========================================
    // PREVIEW TEMPLATE
    // =========================================

    const handlePreview = (
        event,
        template
    ) => {

        event.stopPropagation();


        if (
            typeof onPreview !==
            "function"
        ) {
            return;
        }


        onPreview(
            template
        );

    };


    // =========================================
    // CREATE TEMPLATE
    // =========================================

    const handleCreateTemplate = () => {

        if (
            typeof onCreateTemplate !==
            "function"
        ) {
            return;
        }


        onCreateTemplate();

    };


    // =========================================
    // CLOSE
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
    // DON'T RENDER
    // =========================================

    if (
        !open
    ) {

        return null;

    }


    // =========================================
    // RENDER
    // =========================================

    return (

        <div
            className="
                report-templates-modal__overlay
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
                    report-templates-modal
                "

                role="dialog"

                aria-modal="true"

                aria-labelledby="
                    report-templates-modal-title
                "
            >

                {/* =================================
                    HEADER
                ================================= */}

                <header
                    className="
                        report-templates-modal__header
                    "
                >

                    <div
                        className="
                            report-templates-modal__title-group
                        "
                    >

                        <div
                            className="
                                report-templates-modal__icon
                            "
                        >

                            <DescriptionOutlinedIcon />

                        </div>


                        <div>

                            <h2
                                id="
                                    report-templates-modal-title
                                "
                            >
                                Report Templates
                            </h2>

                            <p>
                                Select the format used
                                to generate your report.
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"

                        className="
                            report-templates-modal__close
                        "

                        onClick={
                            handleClose
                        }

                        aria-label="
                            Close report templates
                        "
                    >

                        <CloseOutlinedIcon />

                    </button>

                </header>


                {/* =================================
                    CONTENT
                ================================= */}

                <div
                    className="
                        report-templates-modal__content
                    "
                >

                    {safeTemplates.length > 0 ? (

                        <div
                            className="
                                report-templates-modal__grid
                            "
                        >

                            {safeTemplates.map(
                                (
                                    template
                                ) => {

                                    const isSelected =
                                        selectedId ===
                                        template.id;


                                    return (

                                        <button
                                            key={
                                                template.id
                                            }

                                            type="button"

                                            className={`
                                                report-templates-modal__card
                                                ${
                                                    isSelected
                                                        ? "report-templates-modal__card--selected"
                                                        : ""
                                                }
                                            `}

                                            onClick={() =>
                                                handleSelect(
                                                    template
                                                )
                                            }
                                        >

                                            {/* =============================
                                                CARD HEADER
                                            ============================= */}

                                            <div
                                                className="
                                                    report-templates-modal__card-header
                                                "
                                            >

                                                <div
                                                    className="
                                                        report-templates-modal__card-icon
                                                    "
                                                >

                                                    <DescriptionOutlinedIcon />

                                                </div>


                                                {isSelected && (

                                                    <span
                                                        className="
                                                            report-templates-modal__selected
                                                        "
                                                    >

                                                        <CheckCircleOutlinedIcon />

                                                        Selected

                                                    </span>

                                                )}

                                            </div>


                                            {/* =============================
                                                CARD CONTENT
                                            ============================= */}

                                            <div
                                                className="
                                                    report-templates-modal__card-body
                                                "
                                            >

                                                <div
                                                    className="
                                                        report-templates-modal__card-title
                                                    "
                                                >

                                                    <strong>
                                                        {
                                                            template.name
                                                        }
                                                    </strong>


                                                    {template.isDefault && (

                                                        <span
                                                            className="
                                                                report-templates-modal__default
                                                            "
                                                        >
                                                            Default
                                                        </span>

                                                    )}

                                                </div>


                                                <p>
                                                    {
                                                        template.description
                                                    }
                                                </p>

                                            </div>


                                            {/* =============================
                                                CARD FOOTER
                                            ============================= */}

                                            <div
                                                className="
                                                    report-templates-modal__card-footer
                                                "
                                            >

                                                <span>
                                                    {
                                                        template.category
                                                    }
                                                </span>


                                                <span>
                                                    {
                                                        template.format
                                                    }
                                                </span>


                                                <span
                                                    role="button"

                                                    tabIndex={0}

                                                    className="
                                                        report-templates-modal__preview
                                                    "

                                                    onClick={(
                                                        event
                                                    ) =>
                                                        handlePreview(
                                                            event,
                                                            template
                                                        )
                                                    }

                                                    onKeyDown={(
                                                        event
                                                    ) => {

                                                        if (
                                                            event.key ===
                                                            "Enter"
                                                        ) {

                                                            handlePreview(
                                                                event,
                                                                template
                                                            );

                                                        }

                                                    }}
                                                >

                                                    <VisibilityOutlinedIcon />

                                                    Preview

                                                </span>

                                            </div>

                                        </button>

                                    );

                                }
                            )}

                        </div>

                    ) : (

                        <div
                            className="
                                report-templates-modal__empty
                            "
                        >

                            <DescriptionOutlinedIcon />

                            <strong>
                                No templates available
                            </strong>

                            <span>
                                Create a report template
                                to get started.
                            </span>

                        </div>

                    )}

                </div>


                {/* =================================
                    FOOTER
                ================================= */}

                <footer
                    className="
                        report-templates-modal__footer
                    "
                >

                    <button
                        type="button"

                        className="
                            report-templates-modal__create
                        "

                        onClick={
                            handleCreateTemplate
                        }
                    >

                        <AddOutlinedIcon />

                        Create Template

                    </button>


                    <div
                        className="
                            report-templates-modal__footer-actions
                        "
                    >

                        <button
                            type="button"

                            className="
                                report-templates-modal__cancel
                            "

                            onClick={
                                handleClose
                            }
                        >
                            Cancel
                        </button>


                        <button
                            type="button"

                            className="
                                report-templates-modal__apply
                            "

                            onClick={
                                handleConfirm
                            }

                            disabled={
                                !selectedId
                            }
                        >

                            <CheckCircleOutlinedIcon />

                            Use Template

                        </button>

                    </div>

                </footer>

            </div>

        </div>

    );

};


export default ReportTemplatesModal;