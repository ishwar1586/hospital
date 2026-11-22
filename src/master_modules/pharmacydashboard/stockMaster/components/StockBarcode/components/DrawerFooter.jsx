import "./DrawerFooter.css";

import {
    CloseOutlined,
    PrintOutlined,
} from "@mui/icons-material";

const DrawerFooter = ({

    onCancel,

    onPrint,

    disabled = false,

    loading = false,

}) => {

    return (

        <div className="barcode-footer">

            <button

                type="button"

                className="barcode-btn secondary"

                onClick={onCancel}

            >

                <CloseOutlined />

                Cancel

            </button>

            <button

                type="button"

                className="barcode-btn primary"

                onClick={onPrint}

                disabled={disabled || loading}

            >

                <PrintOutlined />

                {

                    loading

                        ? "Printing..."

                        : "Print Barcode"

                }

            </button>

        </div>

    );

};

export default DrawerFooter;