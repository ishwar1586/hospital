import {
    AddRounded,
    RemoveRounded,
} from "@mui/icons-material";

import "./QtyStepper.css";

const QtyStepper = ({

    value = 0,

    min = 0,

    max = 0,

    onChange,

}) => {

    const handleDecrease = () => {

        if (value <= min) return;

        onChange(value - 1);

    };

    const handleIncrease = () => {

        if (value >= max) return;

        onChange(value + 1);

    };

    const handleInputChange = (event) => {

        let qty = Number(event.target.value);

        if (Number.isNaN(qty)) qty = 0;

        if (qty < min) qty = min;

        if (qty > max) qty = max;

        onChange(qty);

    };

    return (

        <div className="qty-stepper">

            <button

                type="button"

                className="qty-btn"

                onClick={handleDecrease}

                disabled={value <= min}

            >

                <RemoveRounded />

            </button>

            <input

                type="number"

                value={value}

                min={min}

                max={max}

                onChange={handleInputChange}

            />

            <button

                type="button"

                className="qty-btn"

                onClick={handleIncrease}

                disabled={value >= max}

            >

                <AddRounded />

            </button>

        </div>

    );

};

export default QtyStepper;