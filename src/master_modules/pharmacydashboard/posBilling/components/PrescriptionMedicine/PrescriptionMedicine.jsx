import "./PrescriptionMedicine.css";

import {
    MedicationOutlined,
    ScheduleOutlined,
    Inventory2Outlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";

import StatusChip from "../PatientSearchResult/StatusChip";

const PrescriptionMedicine = ({

    medicine,

    onAdd,

}) => {

    const isOutOfStock =
        medicine.status === "Out of Stock";

    return (

        <div className="prescription-medicine">

            {/* ================================= */}
            {/* Left */}
            {/* ================================= */}

            <div className="medicine-left">

                <div className="medicine-icon">

                    <MedicationOutlined />

                </div>

                <div className="medicine-info">

                    <h4>

                        {medicine.medicineName}

                    </h4>

                    <p>

                        {medicine.strength}

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Middle */}
            {/* ================================= */}

            <div className="medicine-details">

                <div className="detail-item">

                    <ScheduleOutlined />

                    <div>

                        <span>

                            Frequency

                        </span>

                        <strong>

                            {medicine.frequency}

                        </strong>

                    </div>

                </div>

                <div className="detail-item">

                    <Inventory2Outlined />

                    <div>

                        <span>

                            Quantity

                        </span>

                        <strong>

                            {medicine.quantity}

                        </strong>

                    </div>

                </div>

                <div className="detail-item">

                    <span className="price-label">

                        ₹

                    </span>

                    <div>

                        <span>

                            MRP

                        </span>

                        <strong>

                            ₹ {medicine.mrp}

                        </strong>

                    </div>

                </div>

            </div>

            {/* ================================= */}
            {/* Right */}
            {/* ================================= */}

            <div className="medicine-actions">

                <StatusChip

                    status={medicine.status}

                />

                <button

                    type="button"

                    disabled={isOutOfStock}

                    className="add-medicine-btn"

                    onClick={() =>

                        onAdd?.(medicine)

                    }

                >

                    <ShoppingCartOutlined />

                    {

                        isOutOfStock

                            ? "Unavailable"

                            : "Add"

                    }

                </button>

            </div>

        </div>

    );

};

export default PrescriptionMedicine;