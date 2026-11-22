import "./PurchaseHeaderActions.css";

import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const PurchaseHeaderActions = ({
    onImport,
    onExport,
    onAdd,
}) => {

    return (

        <div className="purchase-header">

            <div className="purchase-header-left">

                <h2>
                    Purchase Master
                </h2>

                <p>
                    Manage all purchase transactions and orders
                </p>

            </div>
            {/* 
            <div className="purchase-header-right">

                <button
                    className="import-btn"
                    onClick={onImport}
                >

                    <UploadFileOutlinedIcon />

                    Import PO

                </button>

                <button
                    className="export-btn"
                    onClick={onExport}
                >

                    <FileDownloadOutlinedIcon />

                    Export

                </button> */}

            <div className="purchase-header-right">

                <button
                    className="import-btn"
                    onClick={onImport}
                >
                    <UploadFileOutlinedIcon />
                    Import PO
                </button>

                <button
                    className="export-btn"
                    onClick={onExport}
                >
                    <FileDownloadOutlinedIcon />
                    Export
                </button>

                <button
                    className="new-po-btn"
                    onClick={onAdd}
                >
                    + New Purchase Order
                </button>

            </div>

        </div>

    );
};

export default PurchaseHeaderActions;