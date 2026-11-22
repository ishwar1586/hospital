import Dialog
    from "@mui/material/Dialog";

import DialogContent
    from "@mui/material/DialogContent";

import IconButton
    from "@mui/material/IconButton";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import BusinessOutlinedIcon
    from "@mui/icons-material/BusinessOutlined";

import StatusChip
    from "../Table/StatusChip";

import PriorityChip
    from "../Table/PriorityChip";

import TATChip
    from "../Table/TATChip";

import "./ViewProcessingModal.css";


// =========================================
// DETAIL ITEM
// =========================================

const DetailItem = ({
    label,
    value,
}) => {

    return (

        <div className="view-processing-modal__detail">

            <span className="view-processing-modal__detail-label">

                {label}

            </span>


            <span className="view-processing-modal__detail-value">

                {value || "-"}

            </span>

        </div>

    );

};


// =========================================
// VIEW PROCESSING MODAL
// =========================================

const ViewProcessingModal = ({
    open,
    processing,
    onClose,
}) => {


    // =========================================
    // SAFE DATA
    // =========================================

    const data =
        processing || {};


    // =========================================
    // CLOSE MODAL
    // =========================================

    const handleClose = () => {

        if (onClose) {

            onClose();

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth
            className="view-processing-dialog"
        >

            <DialogContent
                className="view-processing-modal"
            >


                {/* =================================
                    HEADER
                ================================= */}

                <div className="view-processing-modal__header">

                    <div className="view-processing-modal__header-content">


                        {/* ICON */}

                        <div className="view-processing-modal__header-icon">

                            <ScienceOutlinedIcon />

                        </div>


                        {/* TITLE */}

                        <div>

                            <h2>

                                Sample Processing Details

                            </h2>


                            <p>

                                View complete processing information

                            </p>

                        </div>

                    </div>


                    {/* CLOSE */}

                    <IconButton
                        type="button"
                        onClick={handleClose}
                        className="view-processing-modal__close"
                        aria-label="Close"
                    >

                        <CloseOutlinedIcon />

                    </IconButton>

                </div>


                {/* =================================
                    ACCESSION SUMMARY
                ================================= */}

                <div className="view-processing-modal__summary">


                    {/* ICON */}

                    <div className="view-processing-modal__summary-icon">

                        <ScienceOutlinedIcon />

                    </div>


                    {/* ACCESSION */}

                    <div className="view-processing-modal__summary-content">

                        <span>

                            Accession No.

                        </span>


                        <strong>

                            {data.accessionNo || "-"}

                        </strong>

                    </div>


                    {/* STATUS */}

                    <div className="view-processing-modal__summary-status">

                        <StatusChip
                            status={
                                data.status ||
                                "Unknown"
                            }
                        />

                    </div>

                </div>


                {/* =================================
                    PATIENT INFORMATION
                ================================= */}

                <section
                    className="view-processing-modal__section"
                >


                    {/* SECTION TITLE */}

                    <div className="view-processing-modal__section-title">

                        <PersonOutlineOutlinedIcon />

                        <h3>

                            Patient Information

                        </h3>

                    </div>


                    {/* DETAILS */}

                    <div className="view-processing-modal__grid">


                        <DetailItem
                            label="Patient Name"
                            value={
                                data.patientName
                            }
                        />


                        <DetailItem
                            label="Sample Type"
                            value={
                                data.sampleType
                            }
                        />


                        <DetailItem
                            label="Test / Profile"
                            value={
                                data.testProfile
                            }
                        />


                        <DetailItem
                            label="Received On"
                            value={
                                data.receivedOn
                            }
                        />

                    </div>

                </section>


                {/* =================================
                    PROCESSING INFORMATION
                ================================= */}

                <section
                    className="view-processing-modal__section"
                >


                    {/* SECTION TITLE */}

                    <div className="view-processing-modal__section-title">

                        <BusinessOutlinedIcon />

                        <h3>

                            Processing Information

                        </h3>

                    </div>


                    {/* DETAILS */}

                    <div className="view-processing-modal__grid">


                        <DetailItem
                            label="Department"
                            value={
                                data.department
                            }
                        />


                        <DetailItem
                            label="Current Step"
                            value={
                                data.currentStep
                            }
                        />


                        {/* PRIORITY */}

                        <div className="view-processing-modal__detail">

                            <span className="view-processing-modal__detail-label">

                                Priority

                            </span>


                            <span>

                                <PriorityChip
                                    priority={
                                        data.priority ||
                                        "Normal"
                                    }
                                />

                            </span>

                        </div>


                        {/* TAT */}

                        <div className="view-processing-modal__detail">

                            <span className="view-processing-modal__detail-label">

                                TAT Remaining

                            </span>


                            <span>

                                <TATChip
                                    value={
                                        data.tatRemaining ||
                                        "-"
                                    }

                                    status={
                                        data.tatStatus ||
                                        "normal"
                                    }
                                />

                            </span>

                        </div>

                    </div>

                </section>


                {/* =================================
                    PROCESSING TIMELINE
                ================================= */}

                <section
                    className="view-processing-modal__section"
                >


                    {/* SECTION TITLE */}

                    <div className="view-processing-modal__section-title">

                        <AccessTimeOutlinedIcon />

                        <h3>

                            Processing Timeline

                        </h3>

                    </div>


                    {/* TIMELINE */}

                    <div className="view-processing-modal__timeline">


                        {/* RECEIVED */}

                        <div className="view-processing-modal__timeline-item">

                            <span className="view-processing-modal__timeline-dot" />


                            <div>

                                <strong>

                                    Sample Received

                                </strong>


                                <span>

                                    {
                                        data.receivedOn ||
                                        "-"
                                    }

                                </span>

                            </div>

                        </div>


                        {/* LINE */}

                        <div className="view-processing-modal__timeline-line" />


                        {/* CURRENT STEP */}

                        <div className="view-processing-modal__timeline-item">

                            <span className="view-processing-modal__timeline-dot" />


                            <div>

                                <strong>

                                    Current Processing Step

                                </strong>


                                <span>

                                    {
                                        data.currentStep ||
                                        "-"
                                    }

                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================
                    FOOTER
                ================================= */}

                <div className="view-processing-modal__footer">


                    <button
                        type="button"
                        className="view-processing-modal__close-button"
                        onClick={handleClose}
                    >

                        Close

                    </button>

                </div>

            </DialogContent>

        </Dialog>

    );

};


export default ViewProcessingModal;