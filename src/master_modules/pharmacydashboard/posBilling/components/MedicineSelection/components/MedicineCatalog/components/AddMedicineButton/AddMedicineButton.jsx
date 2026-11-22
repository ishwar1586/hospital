import "./AddMedicineButton.css";

import {

    AddRounded,

    CheckRounded,

} from "@mui/icons-material";

/* ===========================================================
Component
=========================================================== */

const AddMedicineButton = ({

    medicine,

    buttonText = "Add",

    disabled = false,

    onClick,

}) => {

    const isAdded =

        buttonText === "Added";

    return (

        <button

            type="button"

            className={`

                add-medicine-btn

                ${

                    isAdded

                        ? "added"

                        : ""

                }

            `}

            disabled={disabled}

            onClick={() =>

                onClick?.(

                    medicine

                )

            }

        >

            {

                isAdded

                    ? <CheckRounded />

                    : <AddRounded />

            }

            <span>

                {buttonText}

            </span>

        </button>

    );

};

export default AddMedicineButton;