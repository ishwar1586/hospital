import "./DrawerHeader.css";

import {
    CloseRounded,
    MedicationRounded,
} from "@mui/icons-material";

import StatusChip from "../../../StatusChip/StatusChip";

const DrawerHeader = ({

    stock,

    onClose,

}) => {

    if (!stock) return null;

    return (

        <div className="drawer-header">

            <div className="drawer-header-left">

                <div className="drawer-avatar">

                    <MedicationRounded />

                </div>

                <div className="drawer-header-content">

                    <div className="drawer-title-row">

                        <h2>

                            {stock.medicineName}

                        </h2>

                        <StatusChip

                            status={stock.status}

                        />

                    </div>

                    <div className="drawer-meta">

                        <span>

                            {stock.medicineCode}

                        </span>

                        <span className="dot">

                            •

                        </span>

                        <span>

                            {stock.category}

                        </span>

                    </div>

                </div>

            </div>

            <button

                className="drawer-close-btn"

                onClick={onClose}

            >

                <CloseRounded />

            </button>

        </div>

    );

};

export default DrawerHeader;