import "./DrawerHeader.css";

import { IconButton } from "@mui/material";

import {
    CloseOutlined,
    QrCode2Outlined,
} from "@mui/icons-material";

const DrawerHeader = ({

    barcodeNo,

    generatedDate,

    onClose,

}) => {

    return (

        <div className="barcode-header">

            {/* ================================= */}
            {/* Left */}
            {/* ================================= */}

            <div className="barcode-header-left">

                <div className="barcode-header-icon">

                    <QrCode2Outlined />

                </div>

                <div>

                    <h2>

                        Print Barcode

                    </h2>

                    <p>

                        Generate and print barcode labels for medicine stock

                    </p>

                </div>

            </div>

            {/* ================================= */}
            {/* Right */}
            {/* ================================= */}

            <div className="barcode-header-right">

                <div className="barcode-meta">

                    <div>

                        <span>

                            Barcode No

                        </span>

                        <strong>

                            {barcodeNo}

                        </strong>

                    </div>

                    <div>

                        <span>

                            Generated Date

                        </span>

                        <strong>

                            {generatedDate}

                        </strong>

                    </div>

                </div>

                <IconButton

                    onClick={onClose}

                >

                    <CloseOutlined />

                </IconButton>

            </div>

        </div>

    );

};

export default DrawerHeader;