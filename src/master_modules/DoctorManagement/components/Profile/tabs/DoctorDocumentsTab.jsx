import React from "react";

import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import VisibilityOutlinedIcon
    from "@mui/icons-material/VisibilityOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";

import "./DoctorDocumentsTab.css";


// =========================================================
// DOCUMENT ITEM
// =========================================================

const DoctorDocumentItem = ({
    document,
}) => {

    const documentName =
        document?.name ??
        document?.documentName ??
        document?.title ??
        "Document";


    const documentType =
        document?.type ??
        document?.documentType ??
        "Document";


    const documentNumber =
        document?.number ??
        document?.documentNumber ??
        document?.registrationNumber ??
        null;


    const issueDate =
        document?.issueDate ??
        document?.issuedDate ??
        null;


    const expiryDate =
        document?.expiryDate ??
        document?.validUntil ??
        null;


    const documentUrl =
        document?.url ??
        document?.fileUrl ??
        document?.documentUrl ??
        null;


    const formatDate = (date) => {

        if (!date) {
            return "—";
        }


        const parsedDate =
            new Date(date);


        if (
            Number.isNaN(
                parsedDate.getTime()
            )
        ) {
            return date;
        }


        return parsedDate.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };


    const handleView = (event) => {

        event.stopPropagation();


        if (!documentUrl) {
            return;
        }


        window.open(
            documentUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };


    const handleDownload = (event) => {

        event.stopPropagation();


        if (!documentUrl) {
            return;
        }


        const link =
            document.createElement(
                "a"
            );


        link.href =
            documentUrl;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

        link.download =
            documentName;


        document.body.appendChild(
            link
        );

        link.click();

        document.body.removeChild(
            link
        );
    };


    return (
        <div className="doctor-documents-tab__item">

            {/* =========================================
                DOCUMENT ICON
            ========================================= */}

            <div className="doctor-documents-tab__icon">

                <DescriptionOutlinedIcon
                    fontSize="small"
                />

            </div>


            {/* =========================================
                DOCUMENT INFORMATION
            ========================================= */}

            <div className="doctor-documents-tab__info">

                <div className="doctor-documents-tab__name">
                    {documentName}
                </div>

                <div className="doctor-documents-tab__meta">

                    <span>
                        {documentType}
                    </span>

                    {documentNumber && (
                        <>
                            <span className="doctor-documents-tab__dot">
                                •
                            </span>

                            <span>
                                {documentNumber}
                            </span>
                        </>
                    )}

                </div>

            </div>


            {/* =========================================
                DATES
            ========================================= */}

            <div className="doctor-documents-tab__dates">

                <div className="doctor-documents-tab__date">

                    <span className="doctor-documents-tab__date-label">
                        Issued
                    </span>

                    <span className="doctor-documents-tab__date-value">
                        {formatDate(issueDate)}
                    </span>

                </div>


                <div className="doctor-documents-tab__date">

                    <span className="doctor-documents-tab__date-label">
                        Expiry
                    </span>

                    <span className="doctor-documents-tab__date-value">
                        {formatDate(expiryDate)}
                    </span>

                </div>

            </div>


            {/* =========================================
                ACTIONS
            ========================================= */}

            <div className="doctor-documents-tab__actions">

                <button
                    type="button"
                    className="
                        doctor-documents-tab__action
                    "
                    aria-label={
                        `View ${documentName}`
                    }
                    disabled={!documentUrl}
                    onClick={handleView}
                >

                    <VisibilityOutlinedIcon
                        fontSize="small"
                    />

                </button>


                <button
                    type="button"
                    className="
                        doctor-documents-tab__action
                    "
                    aria-label={
                        `Download ${documentName}`
                    }
                    disabled={!documentUrl}
                    onClick={handleDownload}
                >

                    <DownloadOutlinedIcon
                        fontSize="small"
                    />

                </button>

            </div>

        </div>
    );
};


// =========================================================
// COMPONENT
// =========================================================

const DoctorDocumentsTab = ({
    doctor,
    documents = [],
    loading = false,
}) => {

    if (!doctor) {
        return (
            <section className="doctor-documents-tab">

                <div className="doctor-documents-tab__state">
                    Doctor information is unavailable.
                </div>

            </section>
        );
    }


    if (loading) {
        return (
            <section className="doctor-documents-tab">

                <div className="doctor-documents-tab__state">
                    Loading documents...
                </div>

            </section>
        );
    }


    const doctorDocuments =
        Array.isArray(documents)
            ? documents
            : [];


    return (
        <section className="doctor-documents-tab">

            {/* =========================================
                HEADER
            ========================================= */}

            <div className="doctor-documents-tab__header">

                <div>

                    <h3 className="doctor-documents-tab__title">
                        Documents
                    </h3>

                    <p className="doctor-documents-tab__subtitle">
                        Professional documents and credentials
                    </p>

                </div>


                <span className="doctor-documents-tab__count">
                    {doctorDocuments.length}
                </span>

            </div>


            {/* =========================================
                DOCUMENT LIST
            ========================================= */}

            {doctorDocuments.length > 0 ? (

                <div className="doctor-documents-tab__list">

                    {doctorDocuments.map(
                        (document, index) => (

                            <DoctorDocumentItem
                                key={
                                    document?.id ??
                                    document?.documentId ??
                                    `${document?.name ?? "document"}-${index}`
                                }
                                document={
                                    document
                                }
                            />

                        )
                    )}

                </div>

            ) : (

                <div className="doctor-documents-tab__empty">

                    <div className="doctor-documents-tab__empty-icon">

                        <DescriptionOutlinedIcon />

                    </div>

                    <span className="doctor-documents-tab__empty-title">
                        No documents available
                    </span>

                    <span className="doctor-documents-tab__empty-text">
                        No professional documents have been added for this doctor.
                    </span>

                </div>

            )}

        </section>
    );
};


export default DoctorDocumentsTab;