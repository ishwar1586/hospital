import "./InfoItem.css";

const InfoItem = ({

    label,

    value,

    direction = "row",

}) => {

    return (

        <div

            className={`info-item ${direction}`}

        >

            <div className="info-label">

                {label}

            </div>

            <div className="info-value">

                {

                    value ||

                    "--"

                }

            </div>

        </div>

    );

};

export default InfoItem;