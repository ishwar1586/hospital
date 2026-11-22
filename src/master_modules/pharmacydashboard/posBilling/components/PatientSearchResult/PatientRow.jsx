import "./PatientRow.css";

import {
    LocalHospitalOutlined,
    MedicalServicesOutlined,
    PhoneOutlined,
    CheckCircleOutlined,
} from "@mui/icons-material";

import StatusChip from "./StatusChip";

const PatientRow = ({

    patient,

    onSelect,

}) => {

    return (

        <tr className="patient-row">

            {/* ================================= */}
            {/* UHID */}
            {/* ================================= */}

            <td>

                <span className="patient-uhid">

                    {patient.uhid}

                </span>

            </td>

            {/* ================================= */}
            {/* Patient */}
            {/* ================================= */}

            <td>

                <div className="patient-profile">

                    <div className="patient-avatar">

                        {

                            patient.patientName

                                .charAt(0)

                                .toUpperCase()

                        }

                    </div>

                    <div>

                        <h4>

                            {patient.patientName}

                        </h4>

                        <span>

                            {patient.age} Years / {patient.gender}

                        </span>

                    </div>

                </div>

            </td>

            {/* ================================= */}
            {/* Patient Type */}
            {/* ================================= */}

            <td>

                <span

                    className={`patient-type ${patient.patientType.toLowerCase()}`}

                >

                    <LocalHospitalOutlined />

                    {patient.patientType}

                </span>

            </td>

            {/* ================================= */}
            {/* Doctor */}
            {/* ================================= */}

            <td>

                <div className="doctor-info">

                    <MedicalServicesOutlined />

                    {patient.doctor}

                </div>

            </td>

            {/* ================================= */}
            {/* Department */}
            {/* ================================= */}

            <td>

                {patient.department}

            </td>

            {/* ================================= */}
            {/* Mobile */}
            {/* ================================= */}

            <td>

                <div className="mobile-info">

                    <PhoneOutlined />

                    {patient.mobile}

                </div>

            </td>

            {/* ================================= */}
            {/* Status */}
            {/* ================================= */}

            <td>

                <StatusChip

                    status={patient.status}

                />

            </td>

            {/* ================================= */}
            {/* Action */}
            {/* ================================= */}

            <td>

                <button

                    className="patient-select-btn"

                    onClick={() =>

                        onSelect(patient)

                    }

                >

                    <CheckCircleOutlined />

                    Select

                </button>

            </td>

        </tr>

    );

};

export default PatientRow;