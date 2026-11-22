import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import ScienceOutlinedIcon
    from "@mui/icons-material/ScienceOutlined";

import LocationOnOutlinedIcon
    from "@mui/icons-material/LocationOnOutlined";

import AccessTimeOutlinedIcon
    from "@mui/icons-material/AccessTimeOutlined";

import BadgeOutlinedIcon
    from "@mui/icons-material/BadgeOutlined";

import CalendarTodayOutlinedIcon
    from "@mui/icons-material/CalendarTodayOutlined";

import "./ViewCollectionModal.css";


const ViewCollectionModal = ({
    open,
    collection,
    onClose,
}) => {

    /* =========================================
       DON'T RENDER
    ========================================= */

    if (!open || !collection) {
        return null;
    }


    const patient =
        collection.patient || {};


    /* =========================================
       HANDLE BACKDROP
    ========================================= */

    const handleBackdropClick = (
        event
    ) => {

        if (
            event.target ===
            event.currentTarget
        ) {

            onClose();

        }

    };


    return (

        <div
            className="view-collection-modal__backdrop"
            onMouseDown={
                handleBackdropClick
            }
        >

            <div
                className="view-collection-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="view-collection-title"
            >


                {/* =================================
                    HEADER
                ================================= */}

                <div className="view-collection-modal__header">

                    <div className="view-collection-modal__title-wrapper">

                        <div className="view-collection-modal__title-icon">

                            <ScienceOutlinedIcon />

                        </div>


                        <div>

                            <h2
                                id="view-collection-title"
                            >
                                Sample Collection Details
                            </h2>

                            <p>
                                {collection.accessionNo}
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        className="view-collection-modal__close"
                        onClick={onClose}
                        aria-label="Close"
                    >

                        <CloseOutlinedIcon />

                    </button>

                </div>


                {/* =================================
                    BODY
                ================================= */}

                <div className="view-collection-modal__body">


                    {/* =================================
                        PATIENT SECTION
                    ================================= */}

                    <section className="view-collection-modal__section">

                        <div className="view-collection-modal__section-title">

                            <PersonOutlineOutlinedIcon />

                            <span>
                                Patient Information
                            </span>

                        </div>


                        <div className="view-collection-modal__grid">


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Patient Name
                                </span>

                                <span className="view-collection-field__value view-collection-field__value--strong">
                                    {patient.name || "-"}
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    UHID
                                </span>

                                <span className="view-collection-field__value">
                                    {patient.uhid || "-"}
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Age
                                </span>

                                <span className="view-collection-field__value">
                                    {patient.age
                                        ? `${patient.age} Years`
                                        : "-"
                                    }
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Gender
                                </span>

                                <span className="view-collection-field__value">
                                    {patient.gender || "-"}
                                </span>

                            </div>

                        </div>

                    </section>


                    {/* =================================
                        SAMPLE SECTION
                    ================================= */}

                    <section className="view-collection-modal__section">

                        <div className="view-collection-modal__section-title">

                            <ScienceOutlinedIcon />

                            <span>
                                Sample Information
                            </span>

                        </div>


                        <div className="view-collection-modal__grid">


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Accession No.
                                </span>

                                <span className="view-collection-field__value view-collection-field__value--blue">
                                    {collection.accessionNo || "-"}
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Sample Type
                                </span>

                                <span className="view-collection-field__value">
                                    {collection.sampleType || "-"}
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Collection Center
                                </span>

                                <span className="view-collection-field__value">
                                    {collection.collectionCenter || "-"}
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Collected By
                                </span>

                                <span className="view-collection-field__value">
                                    {collection.collectedBy || "-"}
                                </span>

                            </div>

                        </div>

                    </section>


                    {/* =================================
                        COLLECTION DETAILS
                    ================================= */}

                    <section className="view-collection-modal__section">

                        <div className="view-collection-modal__section-title">

                            <AccessTimeOutlinedIcon />

                            <span>
                                Collection Details
                            </span>

                        </div>


                        <div className="view-collection-modal__grid">


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Collection Date
                                </span>

                                <span className="view-collection-field__value">

                                    {collection.collectionDate || "-"}

                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Collection Time
                                </span>

                                <span className="view-collection-field__value">

                                    {collection.collectionTime || "-"}

                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Status
                                </span>

                                <span
                                    className={`
                                        view-collection-status
                                        view-collection-status--${String(
                                            collection.status || ""
                                        )
                                            .toLowerCase()
                                            .replace(
                                                /\s+/g,
                                                "-"
                                            )}
                                    `}
                                >
                                    {collection.status || "-"}
                                </span>

                            </div>


                            <div className="view-collection-field">

                                <span className="view-collection-field__label">
                                    Collection ID
                                </span>

                                <span className="view-collection-field__value">

                                    {collection.id || "-"}

                                </span>

                            </div>

                        </div>

                    </section>

                </div>


                {/* =================================
                    FOOTER
                ================================= */}

                <div className="view-collection-modal__footer">

                    <button
                        type="button"
                        className="view-collection-modal__close-button"
                        onClick={onClose}
                    >
                        Close
                    </button>

                </div>

            </div>

        </div>

    );

};


export default ViewCollectionModal;