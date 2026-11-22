import "./AdjustmentPreview.css";

import {
    TrendingUpOutlined,
    TrendingDownOutlined,
    RemoveOutlined,
} from "@mui/icons-material";

const AdjustmentPreview = ({

    currentStock,

    physicalStock,

    difference,

    adjustmentType,

}) => {

    const newAvailable = physicalStock;

    const getStatus = () => {

        if (difference > 0) {

            return {

                icon: <TrendingUpOutlined />,

                className: "stock-in",

            };

        }

        if (difference < 0) {

            return {

                icon: <TrendingDownOutlined />,

                className: "stock-out",

            };

        }

        return {

            icon: <RemoveOutlined />,

            className: "no-change",

        };

    };

    const status = getStatus();

    return (

        <div className="adjustment-preview">

            {/* ============================= */}

            <div className="adjustment-preview-header">

                <h3>

                    Adjustment Preview

                </h3>

            </div>

            {/* ============================= */}

            <div className="adjustment-preview-body">

                <div className="preview-item">

                    <span>

                        Current Stock

                    </span>

                    <strong>

                        {currentStock}

                    </strong>

                </div>

                <div className="preview-item">

                    <span>

                        Physical Stock

                    </span>

                    <strong>

                        {physicalStock}

                    </strong>

                </div>

                <div className="preview-item">

                    <span>

                        Difference

                    </span>

                    <strong
                        className={status.className}
                    >

                        {difference > 0 && "+"}

                        {difference}

                    </strong>

                </div>

                <div className="preview-item">

                    <span>

                        Adjustment Type

                    </span>

                    <strong
                        className={status.className}
                    >

                        {status.icon}

                        {adjustmentType}

                    </strong>

                </div>

                <div className="preview-item">

                    <span>

                        Updated Stock

                    </span>

                    <strong>

                        {newAvailable}

                    </strong>

                </div>

            </div>

        </div>

    );

};

export default AdjustmentPreview;