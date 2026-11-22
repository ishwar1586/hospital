import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import "./ReturnReasonSelect.css";

const ReturnReasonSelect = ({

    value = "",

    onChange,

}) => {

    const reasons = [

        "Damaged Medicine",

        "Expired Medicine",

        "Wrong Medicine Dispensed",

        "Doctor Changed Prescription",

        "Duplicate Billing",

        "Patient Refused",

        "Packing Damage",

        "Billing Error",

        "Other",

    ];

    return (

        <div className="return-reason-select">

            <select

                value={value}

                onChange={(event) =>

                    onChange(event.target.value)

                }

            >

                <option value="">

                    Select Reason

                </option>

                {

                    reasons.map((reason) => (

                        <option

                            key={reason}

                            value={reason}

                        >

                            {reason}

                        </option>

                    ))

                }

            </select>

            <KeyboardArrowDownRoundedIcon className="select-icon" />

        </div>

    );

};

export default ReturnReasonSelect;