import "./InfoItem.css";

const InfoItem = ({

    label,

    value,

}) => {

    const displayValue =

        value === null ||
        value === undefined ||
        value === ""

            ? "--"

            : value;

    return (

        <div className="info-item">

            <div className="info-item-label">

                {label}

            </div>

            <div className="info-item-value">

                {displayValue}

            </div>

        </div>

    );

};

export default InfoItem;