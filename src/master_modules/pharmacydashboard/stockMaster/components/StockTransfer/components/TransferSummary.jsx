import "./TransferSummary.css";

import {
    MedicationOutlined,
    Inventory2Outlined,
    WarehouseOutlined,
    CalendarMonthOutlined,
} from "@mui/icons-material";

const TransferSummary = ({ data }) => {

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
            label: "Available Stock",
            value: `${data.availableStock} Units`,
        },

        {
            icon: <WarehouseOutlined />,
            label: "From Warehouse",
            value: data.fromWarehouse,
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

        <div className="transfer-summary">

            <div className="transfer-summary-header">

                <h3>

                    Medicine Summary

                </h3>

            </div>

            <div className="transfer-summary-grid">

                {

                    summaryItems.map((item) => (

                        <div

                            key={item.label}

                            className="transfer-summary-card"

                        >

                            <div className="transfer-summary-icon">

                                {item.icon}

                            </div>

                            <div className="transfer-summary-content">

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

export default TransferSummary;