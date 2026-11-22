import "./DrawerHeader.css";

import { IconButton } from "@mui/material";

import {
    CloseOutlined,
    LocalShippingOutlined,
} from "@mui/icons-material";

const DrawerHeader = ({

    transferNo,

    transferDate,

    // onClose,

}) => {

    return (

        <div className="transfer-header">

            {/* ===================================== */}
            {/* Left */}
            {/* ===================================== */}

            <div className="transfer-header-left">

                <div className="transfer-header-icon">

                    <LocalShippingOutlined/>

                </div>

                <div>

                    <h2>

                        Transfer Stock

                    </h2>

                    <p>

                        Transfer medicine stock between warehouses

                    </p>

                </div>

            </div>

            {/* ===================================== */}
            {/* Right */}
            {/* ===================================== */}

            <div className="transfer-header-right">

                <div className="transfer-meta">

                    <div>

                        <span>

                            Transfer No

                        </span>

                        <strong>

                            {transferNo}

                        </strong>

                    </div>

                    <div>

                        <span>

                            Date

                        </span>

                        <strong>

                            {transferDate}

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