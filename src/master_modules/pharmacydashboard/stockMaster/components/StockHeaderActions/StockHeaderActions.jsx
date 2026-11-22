import "./StockHeaderActions.css";

import {
    AddOutlined,
    FileDownloadOutlined,
    RefreshOutlined,
    // ViewColumnOutlined,
} from "@mui/icons-material";

const StockHeaderActions = ({

    onAdd,

    onExport,

    onRefresh,

    // onColumns,

}) => {

    return (

        <div className="stock-header">

            <div className="stock-header-left">

                <h2>

                    Stock Master

                </h2>

                <p>

                    Manage inventory, batches, stock quantity and expiry details

                </p>

            </div>

            <div className="stock-header-right">

                <button

                    className="stock-btn secondary"

                    onClick={onRefresh}

                >

                    <RefreshOutlined />

                    Refresh

                </button>

                {/* <button

                    className="stock-btn secondary"

                    onClick={onColumns}

                >

                    <ViewColumnOutlined />

                    Columns

                </button> */}

                <button

                    className="stock-btn secondary"

                    onClick={onExport}

                >

                    <FileDownloadOutlined />

                    Export

                </button>

                <button

                    className="stock-btn primary"

                    onClick={onAdd}

                >

                    <AddOutlined />

                    Add Stock

                </button>

            </div>

        </div>

    );

};

export default StockHeaderActions;