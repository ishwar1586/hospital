import "./AdjustmentSummary.css";

import {
    MedicationOutlined,
    Inventory2Outlined,
    WarehouseOutlined,
    CalendarMonthOutlined,
} from "@mui/icons-material";

const AdjustmentSummary = ({ data }) => {

    const summaryItems = [

        {
            icon: <MedicationOutlined />,
            label: "Medicine",
            value: data.medicineName,
        },

        {
            icon: <MedicationOutlined />,
            label: "Medicine Code",
            value: data.medicineCode,
        },

        {
            icon: <Inventory2Outlined />,
            label: "Current Stock",
            value: `${data.currentStock} Units`,
        },

        {
            icon: <Inventory2Outlined />,
            label: "Reserved Stock",
            value: `${data.reservedStock} Units`,
        },

        {
            icon: <Inventory2Outlined />,
            label: "Available Stock",
            value: `${data.availableStock} Units`,
        },

        {
            icon: <WarehouseOutlined />,
            label: "Warehouse",
            value: data.warehouse,
        },

        {
            icon: <Inventory2Outlined />,
            label: "Batch No.",
            value: data.batchNo,
        },

        {
            icon: <CalendarMonthOutlined />,
            label: "Expiry Date",
            value: data.expiryDate,
        },

    ];

    return (

        <div className="adjustment-summary">

            <div className="adjustment-summary-header">

                <h3>

                    Medicine Summary

                </h3>

            </div>

            <div className="adjustment-summary-grid">

                {

                    summaryItems.map((item) => (

                        <div

                            key={item.label}

                            className="summary-card"

                        >

                            <div className="summary-icon">

                                {item.icon}

                            </div>

                            <div className="summary-content">

                                <span>

                                    {item.label}

                                </span>

                                <strong>

                                    {item.value || "--"}

                                </strong>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AdjustmentSummary;