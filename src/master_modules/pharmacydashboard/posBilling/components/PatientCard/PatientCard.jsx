import "./PatientCard.css";

import {
    BadgeOutlined,
    PersonOutlineOutlined,
    LocalHospitalOutlined,
    BloodtypeOutlined,
    PhoneOutlined,
    HealthAndSafetyOutlined,
    MedicalServicesOutlined,
    VerifiedOutlined,
    FingerprintOutlined,
} from "@mui/icons-material";

import patientMock from "../../mock/patient.mock";

const PatientCard = ({ customerType }) => {

    /* ==========================================
       Walk-in Customer
    ========================================== */

    if (customerType === "walkin") {

        return null;

    }

    /* ==========================================
       Patient Data
    ========================================== */

    const patient = patientMock;

    const avatarLetter =

        patient.patientName
            ?.charAt(0)
            ?.toUpperCase() || "P";

    /* ==========================================
       Patient Information
    ========================================== */

    const patientInfo = [

        {
            icon: <FingerprintOutlined />,
            label: "UHID",
            value: patient.uhid,
        },

        {
            icon: <PersonOutlineOutlined />,
            label: "Age / Gender",
            value: `${patient.age} Years / ${patient.gender}`,
        },

        {
            icon: <PhoneOutlined />,
            label: "Mobile",
            value: patient.mobile,
        },

        {
            icon: <MedicalServicesOutlined />,
            label: "Doctor",
            value: patient.doctor,
        },

        {
            icon: <LocalHospitalOutlined />,
            label: "Department",
            value: patient.department,
        },

        {
            icon: <BloodtypeOutlined />,
            label: "Blood Group",
            value: patient.bloodGroup,
        },

        {
            icon: <BadgeOutlined />,
            label: "Insurance",
            value: patient.insurance,
        },

        {
            icon: <HealthAndSafetyOutlined />,
            label: "Allergies",
            value: patient.allergies,
            fullWidth: true,
        },

    ];

    /* ==========================================
       JSX
    ========================================== */

    return (

        <section className="patient-card">

            {/* ================================= */}
            {/* Header */}
            {/* ================================= */}

            <div className="patient-card-header">

                <div>

                    <h3>

                        Patient Information

                    </h3>

                    <p>

                        Patient profile and medical information

                    </p>

                </div>

                <div className="patient-status">

                    <VerifiedOutlined />

                    {patient.status}

                </div>

            </div>

            {/* ================================= */}
            {/* Profile */}
            {/* ================================= */}

            <div className="patient-profile">

                <div className="patient-avatar">

                    {avatarLetter}

                </div>

                <div className="patient-profile-info">

                    <h2>

                        {patient.patientName}

                    </h2>

                    <span>

                        {patient.patientType} Patient

                    </span>

                </div>

            </div>

            {/* ================================= */}
            {/* Information Grid */}
            {/* ================================= */}

            <div className="patient-grid">

                {

                    patientInfo.map((item) => (

                        <div

                            key={item.label}

                            className={`

                                patient-item

                                ${

                                    item.fullWidth

                                        ? "patient-full"

                                        : ""

                                }

                            `}

                        >

                            <div className="patient-item-icon">

                                {item.icon}

                            </div>

                            <div className="patient-item-content">

                                <span>

                                    {item.label}

                                </span>

                                <strong>

                                    {item.value}

                                </strong>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

};

export default PatientCard;