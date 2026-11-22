import "./DrawerFooter.css";

import {
    EditOutlined,
    PrintOutlined,
    CloseOutlined,
} from "@mui/icons-material";

const DrawerFooter = ({

    stock,

    onClose,

    onEdit,

    onPrint,

}) => {

    return (

        <div className="drawer-footer">

            <button

                className="drawer-footer-btn secondary"

                onClick={() => onPrint?.(stock)}

            >

                <PrintOutlined />

                Print

            </button>

            <button

                className="drawer-footer-btn primary"

                onClick={() => onEdit?.(stock)}

            >

                <EditOutlined />

                Edit Stock

            </button>

            <button

                className="drawer-footer-btn danger"

                onClick={onClose}

            >

                <CloseOutlined />

                Close

            </button>

        </div>

    );

};

export default DrawerFooter;