import PersonOutlineOutlinedIcon
    from "@mui/icons-material/PersonOutlineOutlined";

import "./CollectionTable.css";


const PatientDetailsCell = ({
    patient,
}) => {

    if (!patient) {
        return null;
    }


    return (
        <div className="collection-patient-cell">

            <div className="collection-patient-cell__avatar">

                <PersonOutlineOutlinedIcon />

            </div>


            <div className="collection-patient-cell__content">

                <span className="collection-patient-cell__name">

                    {patient.name}

                </span>


                <span className="collection-patient-cell__meta">

                    {patient.uhid}

                    <span className="collection-patient-cell__separator">
                        •
                    </span>

                    {patient.age}Y / {patient.gender}

                </span>

            </div>

        </div>
    );
};


export default PatientDetailsCell;