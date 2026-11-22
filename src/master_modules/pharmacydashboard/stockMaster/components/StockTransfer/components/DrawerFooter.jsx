import "./DrawerFooter.css";

import {
    CloseOutlined,
    LocalShippingOutlined,
} from "@mui/icons-material";

const DrawerFooter = ({

    onCancel,

    onSave,

    disabled = false,

    loading = false,

}) => {

    return (

        <div className="transfer-footer">

            <button

                type="button"

                className="transfer-btn secondary"

                onClick={onCancel}

            >

                <CloseOutlined />

                Cancel

            </button>

            <button

                type="button"

                className="transfer-btn primary"

                onClick={onSave}

                disabled={disabled || loading}

            >

                <LocalShippingOutlined />

                {

                    loading

                        ? "Transferring..."

                        : "Transfer Stock"

                }

            </button>

        </div>

    );

};

export default DrawerFooter;