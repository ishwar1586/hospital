import "./PrescriptionRow.css";

import {
    MedicationOutlined,
    ShoppingCartOutlined,
    VisibilityOutlined,
} from "@mui/icons-material";

import StockStatusChip from "./StockStatusChip";

const PrescriptionRow = ({
    medicine,
    onAdd,
    onView,
}) => {

    const isOutOfStock =
        medicine.status === "Out Of Stock";

    return (

        <div className="prescription-row">

            {/* ====================================== */}
            {/* Medicine */}
            {/* ====================================== */}

            <div className="medicine-cell">

                <div className="medicine-avatar">

                    <MedicationOutlined />

                </div>

                <div className="medicine-info">

                    <h4>

                        {medicine.medicineName}

                    </h4>

                    <p>

                        Generic :

                        <span>

                            {" "}

                            {medicine.genericName}

                        </span>

                    </p>

                    <div className="medicine-meta">

                        <span>

                            {medicine.medicineCode}

                        </span>

                        <span>

                            {medicine.dosageForm}

                        </span>

                    </div>

                </div>

            </div>

            {/* ====================================== */}
            {/* Strength */}
            {/* ====================================== */}

            <div className="cell center">

                {medicine.strength}

            </div>

            {/* ====================================== */}
            {/* Frequency */}
            {/* ====================================== */}

            <div className="cell center">

                {medicine.frequency}

            </div>

            {/* ====================================== */}
            {/* Days */}
            {/* ====================================== */}

            <div className="cell center">

                {medicine.duration}

            </div>

            {/* ====================================== */}
            {/* Qty */}
            {/* ====================================== */}

            <div className="cell center">

                {medicine.quantity}

            </div>

            {/* ====================================== */}
            {/* Stock */}
            {/* ====================================== */}

            <div className="cell center">

                {medicine.availableStock}

            </div>

            {/* ====================================== */}
            {/* MRP */}
            {/* ====================================== */}

            <div className="cell price">

                ₹ {medicine.mrp}

            </div>

            {/* ====================================== */}
            {/* Status */}
            {/* ====================================== */}

            <div className="cell center">

                <StockStatusChip

                    status={medicine.status}

                />

            </div>

            {/* ====================================== */}
            {/* Action */}
            {/* ====================================== */}

            <div className="prescription-actions">

                <button
                    className="view-btn"
                    onClick={() =>
                        onView?.(medicine)
                    }
                >

                    <VisibilityOutlined />

                </button>

                <button
                    className="add-btn"
                    disabled={isOutOfStock}
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

export default PrescriptionRow;