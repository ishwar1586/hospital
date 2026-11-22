import "./QuantityStepper.css";

import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const QuantityStepper = ({
    quantity = 1,
    stock = 0,
    onIncrease,
    onDecrease,
}) => {

    const isMin = quantity <= 1;
    const isMax = quantity >= stock;

    return (

        <div className="quantity-stepper">

            <button
                type="button"
                className="stepper-action"
                disabled={isMin}
                onClick={onDecrease}
            >
                <RemoveRoundedIcon fontSize="small" />
            </button>

            <div className="stepper-count">

                {quantity}

            </div>

            <button
                type="button"
                className="stepper-action"
                disabled={isMax}
                onClick={onIncrease}
            >
                <AddRoundedIcon fontSize="small" />
            </button>

        </div>

    );

};

export default QuantityStepper;