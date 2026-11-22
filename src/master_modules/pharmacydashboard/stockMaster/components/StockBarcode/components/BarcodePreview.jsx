import "./BarcodePreview.css";

import {
    Inventory2Outlined,
    CalendarMonthOutlined,
    CurrencyRupeeOutlined,
    QrCode2Outlined,
} from "@mui/icons-material";

const BarcodePreview = ({ data }) => {

    return (

        <div className="barcode-preview">

            {/* ================================= */}

            <div className="barcode-preview-header">

                <h3>

                    Barcode Preview

                </h3>

            </div>

            {/* ================================= */}

            <div className="barcode-preview-body">

                <div className="barcode-label">

                    {/* ======================== */}

                    <div className="barcode-top">

                        <h4>

                            {data.medicineName || "--"}

                        </h4>

                        <span>

                            {data.medicineCode || "--"}

                        </span>

                    </div>

                    {/* ======================== */}

                    <div className="barcode-image">

                        <QrCode2Outlined />

                    </div>

                    {/* ======================== */}

                    <div className="barcode-number">

                        {data.medicineCode || "000000000000"}

                    </div>

                    {/* ======================== */}

                    <div className="barcode-info">

                        {

                            data.showBatch && (

                                <div>

                                    <Inventory2Outlined />

                                    <span>

                                        Batch :

                                    </span>

                                    <strong>

                                        {data.batchNo || "--"}

                                    </strong>

                                </div>

                            )

                        }

                        {

                            data.showExpiry && (

                                <div>

                                    <CalendarMonthOutlined />

                                    <span>

                                        Exp :

                                    </span>

                                    <strong>

                                        {data.expiryDate || "--"}

                                    </strong>

                                </div>

                            )

                        }

                        {

                            data.showPrice && (

                                <div>

                                    <CurrencyRupeeOutlined />

                                    <span>

                                        MRP :

                                    </span>

                                    <strong>

                                        ₹ {data.mrp || "--"}

                                    </strong>

                                </div>

                            )

                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default BarcodePreview;