import "./MedicineImage.css";

import {

    MedicationRounded,

} from "@mui/icons-material";

const MedicineImage = ({

    medicine,

}) => {

    return (

        <div className="medicine-image">

            {

                medicine?.image ? (

                    <img

                        src={medicine.image}

                        alt={medicine.medicineName}

                    />

                ) : (

                    <div className="medicine-placeholder">

                        <MedicationRounded />

                    </div>

                )

            }

        </div>

    );

};

export default MedicineImage;