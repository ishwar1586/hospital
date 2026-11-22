import "./TransferPreview.css";

import {
    CheckCircleOutlined,
    ErrorOutlineOutlined,
    LocalShippingOutlined,
} from "@mui/icons-material";

const TransferPreview = ({

    currentStock,

    availableStock,

    transferQty,

    remainingStock,

    destination,

}) => {

    const isValid =

        transferQty > 0 &&

        transferQty <= availableStock &&

        destination;

    return (

        <div className="transfer-preview">

            {/* ================================= */}

            <div className="transfer-preview-header">

                <h3>

                    Transfer Preview

                </h3>

            </div>

            {/* ================================= */}

            <div className="transfer-preview-body">

                <div className="transfer-preview-item">

                    <span>

                        Current Stock

                    </span>

                    <strong>

                        {currentStock}

                    </strong>

                </div>

                <div className="transfer-preview-item">

                    <span>

                        Available Stock

                    </span>

                    <strong>

                        {availableStock}

                    </strong>

                </div>

                <div className="transfer-preview-item">

                    <span>

                        Transfer Quantity

                    </span>

                    <strong>

                        {transferQty || 0}

                    </strong>

                </div>

                <div className="transfer-preview-item">

                    <span>

                        Remaining Stock

                    </span>

                    <strong>

                        {remainingStock}

                    </strong>

                </div>

                <div className="transfer-preview-item">

                    <span>

                        Destination Warehouse

                    </span>

                    <strong>

                        {destination || "--"}

                    </strong>

                </div>

                <div className="transfer-preview-status">

                    {

                        isValid

                        ? (

                            <div className="status-success">

                                <CheckCircleOutlined/>

                                Ready to Transfer

                            </div>

                        )

                        : (

                            <div className="status-error">

                                <ErrorOutlineOutlined/>

                                Invalid Transfer Details

                            </div>

                        )

                    }

                </div>

            </div>

        </div>

    );

};

export default TransferPreview;