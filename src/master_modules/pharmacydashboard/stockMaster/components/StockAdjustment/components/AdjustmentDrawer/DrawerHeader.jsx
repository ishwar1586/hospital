import "./DrawerHeader.css";

import { IconButton } from "@mui/material";

import {
    // CloseOutlined,
    Inventory2Outlined,
} from "@mui/icons-material";

const DrawerHeader = ({

    adjustmentNo,

    adjustmentDate,

    // onClose,

}) => {

    return (

        <div className="adjustment-header">

            {/* ================================ */}
            {/* Left */}
            {/* ================================ */}

            <div className="adjustment-header-left">

                <div className="adjustment-header-icon">

                    <Inventory2Outlined/>

                </div>

                <div>

                    <h2>

                        Stock Adjustment

                    </h2>

                    <p>

                        Verify and adjust physical stock inventory

                    </p>

                </div>

            </div>

            {/* ================================ */}
            {/* Right */}
            {/* ================================ */}

            <div className="adjustment-header-right">

                <div className="adjustment-meta">

                    <div>

                        <span>

                            Adjustment No

                        </span>

                        <strong>

                            {adjustmentNo}

                        </strong>

                    </div>

                    <div>

                        <span>

                            Date

                        </span>

                        <strong>

                            {adjustmentDate}

                        </strong>

                    </div>

                </div>

                {/* <IconButton

                    onClick={onClose}

                >

                    <CloseOutlined/>

                </IconButton> */}

            </div>

        </div>

    );

};

export default DrawerHeader;