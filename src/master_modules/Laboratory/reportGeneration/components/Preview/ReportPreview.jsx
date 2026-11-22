// =========================================
// REPORT PREVIEW
// =========================================

import ReportPreviewToolbar
    from "./ReportPreviewToolbar";

import "./ReportPreview.css";


// =========================================
// REPORT PREVIEW
// =========================================

const ReportPreview = ({
    report = null,

    onClose,

    onPrint,

    onDownload,

    onEmail,

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
    // PATIENT DETAILS
    // =========================================

    const patientName =
        safeReport.patientName ||
        "—";


    const age =
        safeReport.age ??
        "—";


    const gender =
        safeReport.gender ||
        "—";


    const uhid =
        safeReport.uhid ||
        "—";


    const accessionNo =
        safeReport.accessionNo ||
        "—";


    const department =
        safeReport.department ||
        "—";


    const sampleType =
        safeReport.sampleType ||
        "—";


    const collectedOn =
        safeReport.collectedOn ||
        "—";


    const receivedOn =
        safeReport.receivedOn ||
        "—";


    const verifiedOn =
        safeReport.verifiedOn ||
        "—";


    const verifiedBy =
        safeReport.verifiedBy ||
        "—";


    const reportFormat =
        safeReport.reportFormat ||
        "PDF";


    const reportStatus =
        safeReport.status ||
        "ready";


    // =========================================
    // TESTS
    // =========================================

    const tests =
        Array.isArray(
            safeReport.tests
        )
            ? safeReport.tests
            : [];


    // =========================================
    // PREVIEW EMPTY STATE
    // =========================================

    if (
        !report
    ) {

        return (

            <section
                className="
                    report-preview
                    report-preview--empty
                "
            >

                <div
                    className="
                        report-preview__empty
                    "
                >

                    <div
                        className="
                            report-preview__empty-icon
                        "
                    >
                        📄
                    </div>


                    <h3>
                        No Report Selected
                    </h3>


                    <p>
                        Select a report to preview
                        its generated document.
                    </p>

                </div>

            </section>

        );

    }


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                report-preview
            "
        >

            {/* =================================
                TOOLBAR
            ================================= */}

            <ReportPreviewToolbar

                report={
                    safeReport
                }

                reportFormat={
                    reportFormat
                }

                onClose={
                    onClose
                }

                onPrint={
                    onPrint
                }

                onDownload={
                    onDownload
                }

                onEmail={
                    onEmail
                }

            />


            {/* =================================
                PREVIEW AREA
            ================================= */}

            <div
                className="
                    report-preview__viewport
                "
            >

                <article
                    className="
                        report-preview__document
                    "
                >

                    {/* =============================
                        REPORT HEADER
                    ============================= */}

                    <header
                        className="
                            report-preview__document-header
                        "
                    >

                        <div
                            className="
                                report-preview__brand
                            "
                        >

                            <div
                                className="
                                    report-preview__brand-mark
                                "
                            >
                                +
                            </div>


                            <div>

                                <h1>
                                    City Care
                                </h1>

                                <span>
                                    DIAGNOSTICS
                                </span>

                            </div>

                        </div>


                        <div
                            className="
                                report-preview__lab-details
                            "
                        >

                            <strong>
                                City Care Diagnostics Pvt. Ltd.
                            </strong>

                            <span>
                                Advanced Diagnostic Laboratory
                            </span>

                            <span>
                                Health Care Road, Medical District
                            </span>

                            <span>
                                Phone: 0522-XXXXXXX
                            </span>

                        </div>

                    </header>


                    {/* =============================
                        REPORT TITLE
                    ============================= */}

                    <div
                        className="
                            report-preview__title-section
                        "
                    >

                        <h2>
                            LABORATORY REPORT
                        </h2>


                        <span
                            className="
                                report-preview__status
                            "
                        >
                            {
                                reportStatus
                            }
                        </span>

                    </div>


                    {/* =============================
                        PATIENT INFORMATION
                    ============================= */}

                    <section
                        className="
                            report-preview__patient-section
                        "
                    >

                        <div
                            className="
                                report-preview__info-grid
                            "
                        >

                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Patient Name
                                </span>

                                <strong>
                                    {
                                        patientName
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Age / Gender
                                </span>

                                <strong>
                                    {age}
                                    {" / "}
                                    {gender}
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    UHID
                                </span>

                                <strong>
                                    {
                                        uhid
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Accession No.
                                </span>

                                <strong>
                                    {
                                        accessionNo
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Sample Type
                                </span>

                                <strong>
                                    {
                                        sampleType
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Department
                                </span>

                                <strong>
                                    {
                                        department
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Collected On
                                </span>

                                <strong>
                                    {
                                        collectedOn
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Received On
                                </span>

                                <strong>
                                    {
                                        receivedOn
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Verified On
                                </span>

                                <strong>
                                    {
                                        verifiedOn
                                    }
                                </strong>

                            </div>


                            <div
                                className="
                                    report-preview__info-item
                                "
                            >

                                <span>
                                    Verified By
                                </span>

                                <strong>
                                    {
                                        verifiedBy
                                    }
                                </strong>

                            </div>

                        </div>

                    </section>


                    {/* =============================
                        TEST INFORMATION
                    ============================= */}

                    <section
                        className="
                            report-preview__results-section
                        "
                    >

                        <div
                            className="
                                report-preview__section-heading
                            "
                        >

                            <h3>
                                Laboratory Results
                            </h3>

                            <span>
                                {
                                    tests.length
                                }
                                {" "}
                                Test
                                {
                                    tests.length ===
                                    1
                                        ? ""
                                        : "s"
                                }
                            </span>

                        </div>


                        {tests.length > 0 ? (

                            <table
                                className="
                                    report-preview__results-table
                                "
                            >

                                <thead>

                                    <tr>

                                        <th>
                                            Test Name
                                        </th>

                                        <th>
                                            Result
                                        </th>

                                        <th>
                                            Unit
                                        </th>

                                        <th>
                                            Reference Range
                                        </th>

                                        <th>
                                            Method
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {tests.map(
                                        (
                                            test,
                                            index
                                        ) => {

                                            const testObject =
                                                test &&
                                                typeof test ===
                                                    "object"
                                                    ? test
                                                    : null;


                                            return (

                                                <tr
                                                    key={`
                                                        ${accessionNo}-test-${index}
                                                    `}
                                                >

                                                    <td>
                                                        {
                                                            testObject?.name ||
                                                            testObject?.testName ||
                                                            testObject ||
                                                            "—"
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            testObject?.result ||
                                                            "—"
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            testObject?.unit ||
                                                            "—"
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            testObject?.referenceRange ||
                                                            "—"
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            testObject?.method ||
                                                            "—"
                                                        }
                                                    </td>

                                                </tr>

                                            );

                                        }
                                    )}

                                </tbody>

                            </table>

                        ) : (

                            <div
                                className="
                                    report-preview__no-results
                                "
                            >

                                No laboratory result
                                values available.

                            </div>

                        )}

                    </section>


                    {/* =============================
                        REMARKS
                    ============================= */}

                    <section
                        className="
                            report-preview__remarks
                        "
                    >

                        <strong>
                            Remarks:
                        </strong>

                        <span>
                            {
                                safeReport.remarks ||
                                "Please correlate clinically."
                            }
                        </span>

                    </section>


                    {/* =============================
                        SIGNATURES
                    ============================= */}

                    <section
                        className="
                            report-preview__signatures
                        "
                    >

                        <div>

                            <div
                                className="
                                    report-preview__signature-line
                                "
                            />

                            <strong>
                                Dr. Pathologist
                            </strong>

                            <span>
                                MD (Pathology)
                            </span>

                        </div>


                        <div>

                            <div
                                className="
                                    report-preview__signature-line
                                "
                            />

                            <strong>
                                Dr. Microbiologist
                            </strong>

                            <span>
                                MD / DNB
                            </span>

                        </div>


                        <div>

                            <div
                                className="
                                    report-preview__signature-line
                                "
                            />

                            <strong>
                                Dr. Rajesh Sharma
                            </strong>

                            <span>
                                MD (Biochemistry)
                            </span>

                        </div>

                    </section>


                    {/* =============================
                        FOOTER
                    ============================= */}

                    <footer
                        className="
                            report-preview__document-footer
                        "
                    >
                        This is a computer generated
                        laboratory report.
                    </footer>

                </article>

            </div>

        </section>

    );

};


export default ReportPreview;