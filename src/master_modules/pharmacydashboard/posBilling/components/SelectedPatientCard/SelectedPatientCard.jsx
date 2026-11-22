import "./SelectedPatientCard.css";

import {
    CheckCircleOutlined,
    VisibilityOutlined,
    CloseOutlined,
    PersonOutlineOutlined,
    LocalHospitalOutlined,
    MedicalServicesOutlined,
} from "@mui/icons-material";

const SelectedPatientCard = ({

    patient,

    onViewDetails,

    onRemove,

}) => {

    if (!patient) return null;

    return (

        <section className="selected-patient-card">

            {/* ================================= */}

            <div className="selected-header">

                <div className="selected-title">

                    <CheckCircleOutlined />

                    <h3>

                        Patient Selected Successfully

                    </h3>

                </div>

                <button

                    className="remove-patient-btn"

                    onClick={onRemove}

                >

                    <CloseOutlined />

                </button>

            </div>

            {/* ================================= */}

            <div className="selected-body">

                <div className="selected-avatar">

                    {

                        patient.patientName

                            .charAt(0)

                            .toUpperCase()

                    }

                </div>

                <div className="selected-info">

                    <h2>

                        {patient.patientName}

                    </h2>

                    <span>

                        {patient.uhid}

                    </span>

                    <div className="selected-meta">

                        <div>

                            <PersonOutlineOutlined />

                            {patient.age} Years /

                            {" "}
                            {patient.gender}

                        </div>

                        <div>

                            <MedicalServicesOutlined />

                            {patient.doctor}

                        </div>

                        <div>

                            <LocalHospitalOutlined />

                            {patient.department}

                        </div>

                    </div>

                </div>

                <button

                    className="view-details-btn"

                    onClick={onViewDetails}

                >

                    <VisibilityOutlined />

                    View Details

                </button>

            </div>

        </section>

    );

};

export default SelectedPatientCard;