import "./PrescriptionBanner.css";

import {
    PersonOutlineOutlined,
    LocalHospitalOutlined,
    DescriptionOutlined,
    MedicationOutlined,
    CheckCircleOutlineOutlined,
    AccessTimeOutlined,
} from "@mui/icons-material";

const PrescriptionBanner = ({ prescriptionData }) => {

    if (!prescriptionData) return null;

    const {
        patient,
        prescription,
        medicines = [],
        addedCount = 0,
    } = prescriptionData;

    const remainingCount =
        medicines.length - addedCount;

    return (

        <section className="prescription-banner">

            {/* ================================= */}
            {/* Patient */}
            {/* ================================= */}

            <div className="banner-card">

                <div className="banner-icon">

                    <PersonOutlineOutlined />

                </div>

                <div>

                    <span className="banner-label">

                        Patient

                    </span>

                    <h4>

                        {patient.patientName}

                    </h4>

                    <p>

                        UHID : {patient.uhid}

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Doctor */}
            {/* ================================= */}

            <div className="banner-card">

                <div className="banner-icon doctor">

                    <LocalHospitalOutlined />

                </div>

                <div>

                    <span className="banner-label">

                        Doctor

                    </span>

                    <h4>

                        {prescription.doctor}

                    </h4>

                    <p>

                        {prescription.department}

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Prescription */}
            {/* ================================= */}

            <div className="banner-card">

                <div className="banner-icon prescription">

                    <DescriptionOutlined />

                </div>

                <div>

                    <span className="banner-label">

                        Prescription

                    </span>

                    <h4>

                        {prescription.prescriptionId}

                    </h4>

                    <p>

                        {prescription.prescriptionDate}

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Medicine Summary */}
            {/* ================================= */}

            <div className="banner-card">

                <div className="banner-icon medicine">

                    <MedicationOutlined />

                </div>

                <div>

                    <span className="banner-label">

                        Medicines

                    </span>

                    <h4>

                        {medicines.length}

                        {" "}Prescribed

                    </h4>

                    <p>

                        Added : {addedCount}

                        {" | "}

                        Remaining : {remainingCount}

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Status */}
            {/* ================================= */}

            <div className="banner-card">

                <div className="banner-icon success">

                    <CheckCircleOutlineOutlined />

                </div>

                <div>

                    <span className="banner-label">

                        Status

                    </span>

                    <h4>

                        Ready

                    </h4>

                    <p>

                        Waiting for Medicine Selection

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Visit Time */}
            {/* ================================= */}

            <div className="banner-card">

                <div className="banner-icon time">

                    <AccessTimeOutlined />

                </div>

                <div>

                    <span className="banner-label">

                        Visit Time

                    </span>

                    <h4>

                        {prescription.visitTime}

                    </h4>

                    <p>

                        Visit No : {prescription.visitNo}

                    </p>

                </div>

            </div>

        </section>

    );

};

export default PrescriptionBanner;